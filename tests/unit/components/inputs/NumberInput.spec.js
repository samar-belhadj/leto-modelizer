import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import NumberInput from 'src/components/inputs/NumberInput';

installQuasarPlugin();

// TODO : shallowMount and Quasar test not working due to some property error (prefix)
describe.skip('Test component: NumberInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NumberInput, {
      props: {
        attribute: {
          value: 42,
          name: 'attributeName',
        },
      },
    });
  });

  describe('Test variables initialization', () => {
    describe('Test prop: attribute', () => {
      it('should be an object containing name & value', () => {
        expect(wrapper.vm.attribute.name).toEqual('attributeName');
        expect(wrapper.vm.attribute.value).toEqual(42);
      });
    });

    describe('Test variables: localValue', () => {
      it('should match attribute.value', () => {
        expect(wrapper.vm.localValue).toEqual(42);
      });
    });
  });
});
