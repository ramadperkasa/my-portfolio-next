const isMobile = () => {
  return window.innerWidth < 768;
};

const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

const isDesktop = () => {
  return window.innerWidth >= 1024;
};

const ScreenSize = {
  isMobile,
  isTablet,
  isDesktop,
};

export default ScreenSize;