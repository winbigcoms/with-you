export const isClientEnv = () => {
  if (typeof window === 'undefined') return false;
  return true;
};
