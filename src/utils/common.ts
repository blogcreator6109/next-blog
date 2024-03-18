export const getVarOfCSS = (name: string, toNumber = true) => {
  try {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return toNumber ? parseInt(value) : value;
  } catch (e) {
    return toNumber ? 0 : "";
  }
};
