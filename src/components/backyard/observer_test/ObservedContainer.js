import { useEffect, useRef, useState } from "react";
import './observed-container.css'

export default function ObservedContainer() {
  // 1) Start with a reference you want to observe, 
  // use the react hook useRef.
  const containerReference = useRef(null);
  // 2) Create a state variable isVisible, we are gonna use
  // it to display a message whenever our box is in the viewport.
  const [isVisible, setIsVisible] = useState(false);


  // 3) Declare a callback function that receives an array of 
  // IntersectionObserverEntries as a parameter, inside this function 
  // we take the first and only entry and check if is intersecting with
  // the viewport and if it is then we call setIsVisible with the 
  // value of entry.isIntersecting (true/false).
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

<<<<<<< HEAD
=======
  // 4) Create the options object with the same values as the image.
>>>>>>> development
  const options = {
    root: null,
    rootMargine: "0px",
    threshold: 1.0,
  };

<<<<<<< HEAD
=======

  // 5) Add the react hook useEffect and create an observer contructor
  //  using the callback function and the options we just created before 
  
>>>>>>> development
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerReference.current)
      observer.observe(containerReference.current);

<<<<<<< HEAD
=======
    // * it's optional in our case but you can return a cleanup function to
    // unobserve our target when the component unmounts.
>>>>>>> development
    return () => {
      if (containerReference.current)
        observer.unobserve(containerReference.current);
    };
  }, [containerReference, options]);
  return (
    <div id="observer-test">
      <div className='isVisible'>{isVisible ? 'IN VIEWPORT' : 'NOT IN VIEWPORT'} observedContainer</div>
      <div className="section"></div>
<<<<<<< HEAD
=======
      {/* Set the (containerReference) useRef variable on the element we want to observe. */}
>>>>>>> development
      <div className="box" ref={containerReference}>Observe Me</div>
    </div>
  )
}
