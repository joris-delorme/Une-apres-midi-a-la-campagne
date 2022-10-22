import React from 'react'
import { Parallax } from 'react-parallax';
import { scrollDown } from '../../utils/constant';

const Hero = ({image, children}) => {
  return (
    <section className='hero'>
        <div className="image-container">
            <Parallax bgImage={image} strength={200}>
                <div className="image" style={{height: '100vh'}}></div>
            </Parallax>
        </div>
        <img className='scrollDown' src={scrollDown} alt='scroll down' />
        
        {children}
    </section>
  )
}

export default Hero