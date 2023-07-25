import './Expert.css'
import {default as expertOne} from '../../assets/expert-images/pexels-thisisengineering-3862371.jpg'
import {default as link} from '../../assets/icons/linkedin.png'
import {default as face} from '../../assets/icons/facebook-logo.png'
import {default as insta} from '../../assets/icons/instagram.png'
import {default as twit} from '../../assets/icons/twitter.png'
const Expert = () => {
  return (
    <section className="expert">
      <h4 className='expertMainTitle'>Meet out expert</h4>
      <div className="expertContainer">
        {/* first */}
        <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
          {/* second */}

          <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
          {/* third */}
          <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
          {/* fourth */}
          <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
          {/* fifth */}

          <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
          {/* sixth */}
          <div className="expertCard">
          <img src={expertOne} alt="" width="100%" />

          <div className="expertInfo">
            <h4 className='expertName'>Dr. John Doe</h4>
            <p className='expertTitle'>surgeon name</p>
          </div>
          <div className="logoDiv">
            <p className="expertLogo"><img src={link} alt="linkedin" width="100%"/></p>
            <p  className="expertLogo"><img src={twit} alt="twitter" width="100%"/></p>
            <p  className="expertLogo"><img src={face} alt="facebook" width="100%"/></p>
            <p  className="expertLogo"><img src={insta} alt="instagram" width="100%"/></p>
           
          </div>
          </div>
      </div>
    </section>
  );
};

export default Expert;
