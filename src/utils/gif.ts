export const isGif = (src?: string): boolean => {
  const extension = src?.split('.').pop()?.toLowerCase();

  return extension === 'gif';
};
