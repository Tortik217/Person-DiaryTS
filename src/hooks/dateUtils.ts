export const getIsosString = () => {
  return new Date().toISOString().split("T")[0];
};