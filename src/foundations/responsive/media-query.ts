// Media query utilities for responsive design

/**
 * Create a media query listener that calls a callback when the query matches or not.
 * Returns a cleanup function to remove the listener.
 */
export function createMediaQueryListener(
  query: string,
  callback: (matches: boolean) => void
): () => void {
  const mediaQuery = window.matchMedia(query);
  
  const handler = (e: MediaQueryListEvent | MediaQueryList) => {
    callback(e.matches);
  };
  
  // Call immediately with current state
  handler(mediaQuery);
  
  // Add listener for changes
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
}

