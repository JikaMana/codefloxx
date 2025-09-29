// src/hooks/use-media-query.js

import React, { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check for window to ensure this runs only in the browser
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);

      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => setMatches(media.matches);

      // Add listener for changes
      media.addEventListener('change', listener);

      // Clean up the listener when the component unmounts
      return () => media.removeEventListener('change', listener);
    }
  }, [matches, query]);

  return matches;
}
