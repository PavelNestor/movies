import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    // console.log('window.innerHeight', window.innerHeight + document.documentElement.scrollTop);
    // console.log('document.documentElement.offsetHeight', document.documentElement.offsetHeight);
    
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 200 || isFetching) return;
      console.log('true');
      
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;