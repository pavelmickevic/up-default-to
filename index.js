const upDefaultTo = (defaultValue, property, ...args) => {
  let returnVal = property ?? defaultValue;
  if (typeof property === "function") {
    returnVal =
      property.apply(this, args) ??
      (typeof defaultValue === "number" ? 0 : false);
  }
  return returnVal;
};

export default upDefaultTo;
