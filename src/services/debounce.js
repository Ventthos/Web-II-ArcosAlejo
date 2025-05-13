export function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Cancela el timeout anterior
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Llama a la función después del retraso
    }, delay);
  };
}