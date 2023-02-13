import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import ModelizerModelsView from 'src/components/ModelizerModelsView.vue';
import UpdateModelEvent from 'src/composables/events/ModelEvent';
import Project from 'src/composables/Project';
import { createI18n } from 'vue-i18n';
import i18nConfiguration from 'src/i18n';

installQuasarPlugin();

jest.mock('src/composables/events/ModelEvent', () => ({
  subscribe: jest.fn(),
}));

jest.mock('src/composables/Project', () => ({
  getAllModels: jest.fn(),
}));

describe('Test component: ModelizerModelsView', () => {
  let wrapper;
  let updateModelSubscribe;
  let updateModelUnsubscribe;

  beforeEach(() => {
    updateModelSubscribe = jest.fn();
    updateModelUnsubscribe = jest.fn();

    UpdateModelEvent.subscribe.mockImplementation(() => {
      updateModelSubscribe();
      return { unsubscribe: updateModelUnsubscribe };
    });

    Project.getAllModels.mockImplementation((path) => {
      if (path !== 'projectName/coucou') {
        return Promise.resolve();
      }

      return Promise.resolve([{}]);
    });

    wrapper = shallowMount(ModelizerModelsView, {
      props: {
        projectName: 'projectName',
      },
      global: {
        components: {
          'router-link': 'a',
        },
        plugins: [
          createI18n({
            locale: 'en-US',
            messages: i18nConfiguration,
          }),
        ],
      },
    });
  });

  describe('Test props: projectName', () => {
    it('should match "projectName"', () => {
      expect(wrapper.vm.projectName).toEqual('projectName');
    });
  });

  describe('Test function: updateModels', () => {
    it('should set data.models to an array with 1 element', async () => {
      process.env.MODELS_DEFAULT_FOLDER = 'coucou';
      await wrapper.vm.updateModels();

      expect(Array.isArray(wrapper.vm.data.models)).toBeTruthy();
      expect(wrapper.vm.data.models.length).toEqual(1);
    });

    it('should set data.models to undefined', async () => {
      process.env.MODELS_DEFAULT_FOLDER = '';
      await wrapper.vm.updateModels();

      expect(wrapper.vm.data.models).not.toBeDefined();
    });
  });

  describe('Test hook function: onMounted', () => {
    it('should subscribe to UpdateModelEvent', () => {
      expect(updateModelSubscribe).toHaveBeenCalledTimes(1);
    });
  });

  describe('Test hook function: onUnmounted', () => {
    it('should unsubscribe to UpdateModelEvent', () => {
      expect(updateModelUnsubscribe).toHaveBeenCalledTimes(0);
      wrapper.unmount();
      expect(updateModelUnsubscribe).toHaveBeenCalledTimes(1);
    });
  });
});
