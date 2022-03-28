import { debounce } from '../utils/index';

jest.useFakeTimers();

test('debounce 执行', function() {
  var test = jest.fn();
  var debounced = debounce(test, 1000, false);

  debounced.call();
  debounced.call();
  jest.runAllTimers();

  expect(test)
});

test('debounce 中止', function() {
  var test = jest.fn();
  var debounced = debounce(test, 1000, false);

  debounced.call();
  debounced.stop();
  jest.runAllTimers();

  expect(test)
});