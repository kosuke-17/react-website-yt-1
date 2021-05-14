import React from 'react';

function CaPortfolio(props) {
  return (
    <>
      <li className='port_item'>
        <img 
          src={props.src}
          alt='ポーフォリオの画像' 
          width={props.width} 
          height={props.height}
        />
        <div className='port_item_info'>
          <h5 className='port_item_text'>{props.text}</h5>
        </div>
      </li>
    </>
  )}
export default CaPortfolio;