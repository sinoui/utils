/**
 * 线性缓动函数
 *
 * @param elapsed 已消耗时间
 * @param start 开始值
 * @param delta 差值
 * @param duration 动画时长
 */
function linearEasingFunction(
  elapsed: number,
  start: number,
  delta: number,
  duration: number,
) {
  return start + delta * Math.min(elapsed / duration, 1);
}

/**
 * 运行动画。
 *
 * @param start 开始数字
 * @param end 结束数字
 * @param duration 动画运行时长
 * @param callback 动画过程中每一帧执行的回调函数
 */
function animate(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
  easingFunction = linearEasingFunction,
) {
  const startTime = Date.now();
  const delta = end - start;

  let rafId = -1;
  const tick = () => {
    const elapsed = Date.now() - startTime;
    const value = easingFunction(elapsed, start, delta, duration); // 使用缓动函数求值

    callback(value);

    if (elapsed < duration) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = -1;
    }
  };

  tick();

  return () => rafId !== -1 && cancelAnimationFrame(rafId);
}

export default animate;
