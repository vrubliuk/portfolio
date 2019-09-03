export default (...args) => {
  args.forEach(arg => typeof arg === "function" && arg());
};
