export default function debounce(fn, wait) {
  let lastTimoutId = null;

  return (...args) => {
    if (lastTimoutId) {
      clearTimeout(lastTimoutId);
      lastTimeoutId = null;
    }
    lastTimoutId = setTimeout(() => {
      fn(...args);
      lastTimoutId = null;
    }, wait);
  };
}
