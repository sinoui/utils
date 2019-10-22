/* eslint-disable @typescript-eslint/no-explicit-any */
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
