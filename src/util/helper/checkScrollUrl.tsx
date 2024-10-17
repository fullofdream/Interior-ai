
export const checkScrollUrl = (url: string) : boolean => {
  if (url.startsWith("/")) {
    return false;
  }
  return true;  
}
