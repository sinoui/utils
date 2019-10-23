/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 防抖 https://sinoui.github.io/sinoui-guide/docs/debounce-and-throttle-guide#%E9%98%B2%E6%8A%96-debounce
 *
 * @export
 * @param {Function} func
 * @param {number} [wait=166]
 * @returns
 */
export default function debounce(func: Function, wait = 166) {
  let timeout = -1;
  function debounced(...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait) as any;
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
