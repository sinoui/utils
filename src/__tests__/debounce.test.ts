import debounce from '../debounce';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should debounce', () => {
    const handler = jest.fn();
    const expectedContext = { foo: 'bar' };
    let actualContext;
    function collectContext(...args: any[]) {
      // eslint-disable-next-line consistent-this
      actualContext = this;
      handler(...args);
    }
    const debounced = debounce(collectContext);
    debounced.apply(expectedContext, ['a', 'b']);

    expect(handler).toHaveBeenCalledTimes(0);

    jest.runAllTimers();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('a', 'b');
    expect(actualContext).toEqual(expectedContext);
  });

  it('should clear a pending task', () => {
    const handler = jest.fn();
    const debounced = debounce(handler);

    debounced();

    expect(handler).toHaveBeenCalledTimes(0);
    debounced.cancel();

    jest.runAllTimers();

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it('options.leading = true', () => {
    const handler = jest.fn();
    const debounced = debounce(handler, 166, { leading: true });

    debounced();
    expect(handler).toBeCalled();

    debounced();
    expect(handler).toBeCalledTimes(1);

    jest.runAllTimers();
    expect(handler).toBeCalledTimes(2);
  });
});
