import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        // Initially set the matches state based on the query
        setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);

        // Cleanup listener on unmount or when the query changes
        return () => media.removeEventListener('change', listener);
    }, [query]);  // Only depend on the query

    return matches;
};

export default useMediaQuery;
