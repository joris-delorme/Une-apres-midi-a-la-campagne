import React from 'react'
import { motion, useTransform, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';

const MagneticButton = ({role, position = "center", isLink=false, link="", children}) => {
  const x = useSpring(150, { stiffness: 100, damping: 10 });
  const y = useSpring(50, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(x, [0, 300], [-45, 45]);
  const rotateY = useTransform(y, [0, 100], [-45, 45]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }

  function resetToInital() {
    x.set(150, true);

    y.set(50, true);
  }
  return (
    <motion.div 
    style={{
      width: 300,
      height: 100,
      display: "flex",
      placeItems: "center",
      placeContent: position,
      perspective: 400
    }}
    onMouseMove={handleMouse}
    onMouseLeave={resetToInital}
    className="magnetic-zone">
      <motion.button 
      className={`magnetic-button ${role === "secondary" && 'secondary'}`}
      style={{
        x: rotateX,
        y: rotateY
      }}
      >{
        isLink ?
        <Link to={link}><span>{children}</span></Link>
        :
        <span>{children}</span>
        }</motion.button>
    </motion.div>
  )
}

export default MagneticButton