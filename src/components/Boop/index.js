import React from "react";

//**note for project 3 => sleek animation that can be more or less springy */

//component renders an usestate action to determine the boop effect state
const Boop = ({ rotation = 0, timing = 150, children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style ={
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped ? `rotate(${rotation}deg)`:`rotate(0deg)`,
        transition: `transform ${timing}ms`,
    };
    React.useEffect(() => {
      //action only needed for not-booped to boop state
      if (!isBooped) {
        return;
      }
      //boop duration
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      //in case boop stays in effect cancel to avoid mem leak
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, 
    
    [isBooped, timing]);
    const trigger =()=> {
      //setstate
      setIsBooped(true);
    };
    //actual compopnent functionality that is returned, has room for children (ie icons etc)
    return (
      <span onMouseEnter={trigger} style={style}>
        {children}
      </span>
    );
  };

  export default Boop;