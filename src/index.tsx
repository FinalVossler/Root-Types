const capitalize = (toCapitalize: string): string => {
  return toCapitalize.charAt(0).toUpperCase() + toCapitalize.slice(1);
};

export default capitalize;
