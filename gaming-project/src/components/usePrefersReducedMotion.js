import { useState, useEffect } from 'react';

const PREFERS_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const getInitialState = () => {
    // Check if window is defined for SSR safety
    if (typeof window === 'undefined') {
        return false;
    }
    return window.matchMedia(PREFERS_REDUCED_MOTION_QUERY).matches;
};

/**
 * A custom React hook that detects whether the user has requested reduced motion.
 * @returns {boolean} - True if the user prefers reduced motion, false otherwise.
 */
export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(PREFERS_REDUCED_MOTION_QUERY);
        const listener = (event) => setPrefersReducedMotion(event.matches);

        mediaQueryList.addEventListener('change', listener);
        return () => mediaQueryList.removeEventListener('change', listener);
    }, []);

    return prefersReducedMotion;
}