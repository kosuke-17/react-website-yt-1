import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
        You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input 
            type='email' 
            name='email' 
            placeholder='Your Email' 
            className='footer-input' 
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/sign-up'>使い方</Link>
            <Link to='/'>趣味</Link>
            <Link to='/'>ポートフォリオ</Link>
            <Link to='/'>経歴</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <Link to='/'>メール</Link>
            <Link to='/'>電話番号</Link>
            <Link to='/'>郵便番号</Link>
            <Link to='/'>住所</Link>
          </div>
        
          <div className="footer-link-items">
            <h2>利用してるSNS</h2>
            <Link to='/'>GitHub</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Qiita</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className='website-rights'>TRVL ©︎ 2021</small>
          <div className="social-icons">
            <Link
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
            className='social-icon-link Instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-Instagram' />
            </Link>
            <Link
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
            className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='Linkedin'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
