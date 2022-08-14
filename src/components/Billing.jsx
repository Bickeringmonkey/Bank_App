import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img 
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom 0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
          With our new billing and invoicing system, we now make it even easier for you to
           have better control over your money.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img 
            src={apple}
            alt=''
            className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'
          />
          <img 
            src={google}
            alt=''
            className='w-[144.17px] h-[43.08px] object-contain cursor-pointer'
          />
        </div>
      </div>
    </section> 
  );


export default Billing