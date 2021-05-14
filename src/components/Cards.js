import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>自己紹介</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='私の経歴'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='ポートフォリオ'
              label='Luxury'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='開設中'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='私の好きな名言    【いろいろな出来事に対し「どう感じるか」ではなく、「どう意味付けるか」】'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
