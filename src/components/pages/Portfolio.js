import React from 'react';
import './Portfolio.css';
import CaPortfolio from './CaPortfolio'

export default function Portfolio() {
  return (
      <div>
        <div className='portfolio'>Portfolio</div>
          <div className='contents'>
            <div className='content'>
              <div className='content_item'>
              <ul className='port_items'>
                  <CaPortfolio
                    src='images/img-2.jpg'
                    text='サッカープレー共有アプリ'
                    label='オリジナルアプリ'
                    width='600px' 
                    height='400px' 
                    href='http://35.73.179.40'
                  />
                  <CaPortfolio
                    src='images/img-3.jpg'
                    text='ホームページに戻る↓'
                    label='テストてすと'
                    width='600px' 
                    height='400px' 
                    href='/'
                  />
              </ul>
              </div>
            </div>
          </div>
      </div>
  );
}