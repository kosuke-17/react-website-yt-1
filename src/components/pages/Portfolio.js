import React from 'react';
import './Portfolio.css';
import CaPortfolio from './CaPortfolio'

export default function Portfolio() {
  return (
    <>
      <div>
        <h1 className='portfolio'>Portfolio</h1>
          <div className='contents'>
            <div className='content'>
              <ul className='port_items'>
                <div className='content-url'>
                  <a href='http://35.73.179.40'>ポートフォリオへ</a>
                </div>
                  <CaPortfolio
                    src='images/img-2.jpg'
                    text='サッカープレー共有アプリ'
                    label='オリジナルアプリ'
                    width='600px' 
                    height='400px' 
                  />
                </ul>
              </div>
          </div>
      </div>
    </>
  );
}