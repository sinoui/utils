/* eslint-disable @typescript-eslint/no-explicit-any */

interface DebounceOptions {
  /**
   * 是否立即执行第一次函数调用。如果设置为 `true`，则会立即执行第一次函数调用。否则会在规定时间之后执行第一次函数调用。默认为 `false`。
   */
  leading?: boolean;
}

/**
 * 防抖 https://sinoui.github.io/sinoui-guide/docs/debounce-and-throttle-guide#%E9%98%B2%E6%8A%96-debounce
 *
 * @export
 * @param {Function} func                需要防抖执行的函数
 * @param {number} [wait=166]            等待时长
 * @param {DebounceOptions} [options={}] 额外的配置项
 * @returns
 */
export default function debounce(
  func: Function,
  wait = 166,
  options: DebounceOptions = {},
) {
  let timeout = -1;
  let firstInvoked = !options.leading;

  function debounced(...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const later = () => {
      func.apply(that, args);
    };

    if (!firstInvoked) {
      firstInvoked = true;
      later();
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait) as any;
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
