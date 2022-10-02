import React from 'react'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const PagesTransition = () => {

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={transition}
        className='pages-transition' style={{backgroundColor: '#fff'}} >
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{...transition, delay: 0.2}}
        className='pages-transition' >
      </motion.div>
    </>
  )
}

export default PagesTransition