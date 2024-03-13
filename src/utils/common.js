export const checkIsMobile = (userAgent) => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
};

export const getVarOfCSS = (name, toNumber = true) => {
  try {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return toNumber ? parseInt(value) : value;
  } catch (e) {
    return toNumber ? 0 : "";
  }
};
