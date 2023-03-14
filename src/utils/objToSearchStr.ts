export const objToSearchStr = (obj: Record<string, string | number>) => {
  return Object.entries(obj)
    .map((keyValue) => {
      const [key, value] = keyValue;
      return `${key}=${value}`;
    })
    .join("&");
};
