// Public API for responsive design utilities

import { MOBILE_BREAKPOINT, MOBILE_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from './breakpoints';
import { createMediaQueryListener } from './media-query';

export { MOBILE_BREAKPOINT, MOBILE_MEDIA_QUERY, DESKTOP_MEDIA_QUERY };
export { createMediaQueryListener };

/**
 * Check if the current viewport is mobile-sized.
 */
export function isMobile(): boolean {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

/**
 * Setup responsive styles for an element.
 * Applies mobile styles when viewport is mobile-sized, desktop styles otherwise.
 * Returns a cleanup function to remove the listener.
 * 
 * @param _element - The element to apply responsive styles to (unused, kept for API consistency)
 * @param mobileStyles - Function that applies mobile-specific styles
 * @param desktopStyles - Function that applies desktop-specific styles
 * @returns Cleanup function to remove the media query listener
 */
export function setupResponsive(
  _element: HTMLElement,
  mobileStyles: () => void,
  desktopStyles: () => void
): () => void {
  return createMediaQueryListener(MOBILE_MEDIA_QUERY, (isMobile) => {
    if (isMobile) {
      mobileStyles();
    } else {
      desktopStyles();
    }
  });
}

