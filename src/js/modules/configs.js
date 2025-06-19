const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

export {
  smoothScrollConfig,
  observerConfig,
};