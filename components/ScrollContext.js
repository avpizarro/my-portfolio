// Import React Hooks.
import { useEffect, useState, createContext, useContext } from "react";
// Import Lenis to be able to initiate an instance.
import Lenis from 'lenis';

// Create a context that can be used through the application.
const SmoothScrollerContext = createContext();

// Custom hook to allow easy access to the Lenis instance in child components.
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function ScrollContext({ children }) {
  // Store the the lenis instance in state so it can be shared via context.
  const [lenisRef, setLenis] = useState(null);

  // Store the requestAnimationFrame ID in state for cleanup.
  // const [rafState, setRaf] = useState(null);

  // Initialize Lenis and manage its lifecycle when the component mounts and unmounts.
  useEffect(() => {
    // Create a Lenis instance to handle smooth scrolling.
    const scroller = new Lenis();

    // Scroll to top when Lenis initializes
    scroller.scrollTo(0, { immediate: true });

    // Variable to store the requestAnimationFrame ID for the smooth scrolling loop.
    let rf;

    // Function to update Lenis with the current animation frame time.
    function raf(time) {
      scroller.raf(time); // Pass the current time to Lenis.
      requestAnimationFrame(raf); // Schedule the next frame.
    }

    // Start the animation loop.
    rf = requestAnimationFrame(raf);

    // Store the Lenis instance and the requestAnimationFrame ID in state.
    setLenis(scroller);
    // setRaf(rf);

    // Cleanup function ti destroy Lenis and cancel the animation loop on unmount.
    return () => {
      if (scroller) {
        cancelAnimationFrame(rf); // Cancel the animation frame loop.
        scroller.destroy(); // Destroy the Lenis instance to free up ressources.
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  // Provide the Lenis instance to the application via context.
  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  )  
}
