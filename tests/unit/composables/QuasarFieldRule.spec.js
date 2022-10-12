import {
  notEmpty,
  isGitRepositoryUrl,
  isUniqueBranchName,
} from 'src/composables/QuasarFieldRule';

describe('Test composable: InputRule', () => {
  const t = (key) => key;

  describe('Test function: notEmpty', () => {
    it('Should return true if not empty', () => {
      expect(notEmpty(t, 'a')).toBeTruthy();
    });

    it('Should return error if undefined', () => {
      expect(notEmpty(t)).toEqual('errors.empty');
    });

    it('Should return error if null', () => {
      expect(notEmpty(t, null)).toEqual('errors.empty');
    });

    it('Should return error if empty', () => {
      expect(notEmpty(t, '')).toEqual('errors.empty');
    });
  });

  describe('Test function: isGitRepositoryUrl', () => {
    it('Should return true on valid git url', () => {
      expect(isGitRepositoryUrl(t, 'http://test.com/test')).toBe(true);
      expect(isGitRepositoryUrl(t, 'https://test.com/test')).toBe(true);
      expect(isGitRepositoryUrl(t, 'https://github.com/ditrit/leto-modelizer')).toBe(true);
    });

    it('Should return error on invalid git url', () => {
      const key = 'errors.invalid.gitProvider.repository';
      expect(isGitRepositoryUrl(t, 'git@github.com/ditrit/leto-modelizer.git')).toEqual(key);
      expect(isGitRepositoryUrl(t, 'ftp://github.com/ditrit/leto-modelizer.git')).toEqual(key);
      expect(isGitRepositoryUrl(t, 'http://github.com/ditrit/leto-modelizer.git')).toEqual(key);
    });
  });

  describe('Test function: isUniqueBranchName', () => {
    it('Should return true without duplicated branch', () => {
      expect(isUniqueBranchName(t, [], 'test')).toBe(true);
      expect(isUniqueBranchName(t, [{ name: 'test2' }], 'test')).toBe(true);
    });

    it('Should return string error message with duplicated branch', () => {
      const key = 'errors.git.branch.duplicate';
      expect(isUniqueBranchName(t, [{ name: 'test' }], 'test')).toEqual(key);
    });
  });
});
