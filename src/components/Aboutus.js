import React from 'react'
import AboutImg from '../assets/aboutus.jpg'

const Aboutus = () => {
  return (
    <div className='aboutus container'>
        <div className='aboutus_img'>
            <img src={AboutImg} alt="about us" />
        </div>    
        
        <div className='aboutus_content'>
            <h1>About us</h1>
            <h2>What we believe in</h2>

            <p>content1...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fuga, quod, eligendi iusto tenetur culpa veniam animi minus odit cupiditate, ducimus accusamus quaerat numquam odio corporis earum cum harum dolorem.</p>

            <p>content2...eligendi iusto tenetur culpa veniam animi minus odit cupiditate, ducimus accusamus quaerat numquam odio corporis earum cum harum dolorem.</p>

            <a href='#' className='button'>Learn more</a>
        </div>
    </div>
  )
}

export default Aboutus