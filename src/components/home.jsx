import React from 'react'
import { Zap, Banknote, Timer, MoveRight } from 'lucide-react'

import girlImg from "../assets/girl_img.jpeg"
import LoanSection from './loan-section'


export default function HomePage() {
  return (
    <>
      <div className='home'>
        <div className='left-section'>
          <div className='intro-section'>
            <h1>Simplify Your Finances, amplify your life</h1>
            <p>Embark your financial journey with CreditSea. We're here to <br /> support your needs & dreams.</p>
          </div>

          <div className='feature-section'>
            <div>
              <div className='icon'>
                <Zap color='orange' />
              </div>
              <p>Transfer to <br /> bank in seconds</p>
            </div>

            <div>
              <div className='icon'>
                <Banknote color='orange' />
              </div>
              <p>Cash without <br /> collateral</p>
            </div>

            <div>
              <div className='icon'>
                <Timer color='orange' />
              </div>
              <p>Repay in <br /> 3-36 months</p>
            </div>
          </div>

          <button className='get-started-btn'>
            Get Started Now <MoveRight />
          </button>
        </div>

        <div className='right-section'>
          <img src={girlImg} alt='girl-img' />
        </div>
      </div>

      <LoanSection />
    </>
  )
}
