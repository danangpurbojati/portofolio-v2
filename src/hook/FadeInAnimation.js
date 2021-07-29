import React, { useEffect } from 'react'
import { mainAnimation } from "../globalStyles/animation";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const FadeInAnimation = ({children}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }

    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={mainAnimation}
        >
            {children}    
        </motion.div>
    )
}

export default FadeInAnimation
