// Timeout after 100ms of no scrolling
const TIMEOUT = 100;

// Makes smooth scrolling awaitable
export const useScrollSmooth = () => {
  const scrollTo = (top: number) =>
    new Promise<void>((resolve) => {
      window.scrollTo({ top, behavior: 'smooth' });

      let scrollTimeout: NodeJS.Timeout;
      window.addEventListener('scroll', function onScroll() {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
          window.removeEventListener('scroll', onScroll);
          resolve();
        }, TIMEOUT); 
      });
    });
  return [scrollTo];
};
