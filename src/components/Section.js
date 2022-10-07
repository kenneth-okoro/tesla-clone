import Aos from 'aos';
import "aos/dist/aos.css"
import downArrow from '../images/down-arrow.svg';
import { useEffect } from 'react';

function Section({ title, desc, backgroundImg, leftBtnText, rightBtnText }) { 
 const backImg = { backgroundImage: `url(${backgroundImg})` };

 useEffect(() => {
   Aos.init({duration: 1000})
 }, [])
 
  return (
    <div
      style={backImg}
      className='wrap w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center'
    >
      <div
        className='item-text pt-20 text-center'
        data-aos='fade-up'
        // data-aos-duration='1000'
          data-aos-delay='200'
      >
        <h1 className='font-bold'>{title}</h1>
        <p className='font-medium'>{desc}</p>
      </div>

      <div className='buttons'>
        <div
          className='button flex flex-col md:flex-row mb-10 gap-4'
          data-aos='fade-up'
        >
          <div className='leftBtn bg-left-btn w-64 h-10 text-white font-bold flex justify-center items-center rounded-xl opacity-80 uppercase text-xs cursor-pointer'>
            {leftBtnText}
          </div>
          {rightBtnText && (
            <div className='rightBtn bg-white w-64 h-10 text-gray-900 font-bold flex justify-center items-center rounded-xl opacity-60 uppercase text-xs cursor-pointer'>
              {rightBtnText}
            </div>
          )}
        </div>

        <div className='downArrow flex justify-center'>
          <img className='h-12 animate-bounce' src={downArrow} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Section;
