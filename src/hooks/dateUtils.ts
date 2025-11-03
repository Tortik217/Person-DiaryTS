export const getIsoString = () => {
  return new Date().toISOString().split("T")[0];
};