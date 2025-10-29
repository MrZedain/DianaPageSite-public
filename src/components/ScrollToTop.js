// useScrollToTop.js
import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [window.location.pathname]); // Trigger scroll on each change in pathname
}

export default ScrollToTop;