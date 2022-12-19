import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useOnIntersect(enterCallback: () => void, exitCallback: () => void,
  options = { threshold: 1.0, rootMargin: "0px" }
): MutableRefObject<null> {
  const containerRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
        enterCallback();
    } else {
        exitCallback();
    }
  }, [isIntersecting])



  useEffect(()=> {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if(containerRef.current) {
        console.log('cleaning up...🧹')
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options, enterCallback, exitCallback])

  function callback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setIntersecting(entry.isIntersecting);
  }
  return containerRef;
}

