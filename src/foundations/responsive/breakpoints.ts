// Breakpoint constants for responsive design

/**
 * Mobile breakpoint in pixels.
 * Screens smaller than this width are considered mobile.
 */
export const MOBILE_BREAKPOINT = 768;

/**
 * Media query string for mobile screens.
 */
export const MOBILE_MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

/**
 * Media query string for desktop screens.
 */
export const DESKTOP_MEDIA_QUERY = `(min-width: ${MOBILE_BREAKPOINT}px)`;

