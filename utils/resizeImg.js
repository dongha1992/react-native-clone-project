export const resizeImgUri120 = imageUri => {
  if (!imageUri) return null;
  return imageUri.replace(
    '/development/',
    '/fit-in/120x120/filters:quality(80)/development/',
  );
};
export const resizeImgUri500 = imageUri => {
  if (!imageUri) return null;
  return imageUri.replace(
    '/development/',
    '/fit-in/500x500/filters:quality(80)/development/',
  );
};
