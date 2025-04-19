import React from 'react';
import Header from '../../component/Header/HeaderComponent';
import Footer from '../../component/Footer/FooterComponent';
import FbButton from '../../component/Button/ButtonFB';
import './styleAbout.css';

const AboutUs = () => {
  return(
    <>
      <Header/>
      <div className="about-1">
        <div className="about-title-1">
          <p># ABOUT US</p>
        </div>
      </div>
      <div className="about-2">
        <div className="about-box">
          <img src="/image/background.jpg" alt="#" />
          <div className="about-title-2">
            <p>QA Hair là thương hiệu hàng đầu tại Việt Nam chuyên cung cấp các sản phẩm tóc chất lượng cao, từ tóc giả đến tóc nối và các sản phẩm chăm sóc tóc. Chúng tôi cam kết mang đến sản phẩm an toàn, tự nhiên và phù hợp với nhiều phong cách. Với phương châm "Chất lượng là hàng đầu," QA Hair dễ dàng tiếp cận mọi khách hàng thông qua các kênh phân phối rộng rãi và dịch vụ khách hàng tận tâm. Hãy đến với QA Hair để tìm kiếm giải pháp tóc hoàn hảo cho bạn!
            </p>
            <FbButton
              to="https://www.facebook.com/profile.php?id=61565826924384"
            />
          </div>
        </div>
        <div className="about-box">
          <div className="about-title-3">
            <p>
            QA Hair là thương hiệu hàng đầu tại Việt Nam chuyên cung cấp các sản phẩm tóc chất lượng cao, từ tóc giả đến tóc nối và các sản phẩm chăm sóc tóc. Chúng tôi cam kết mang đến sản phẩm an toàn, tự nhiên và phù hợp với nhiều phong cách. Với phương châm "Chất lượng là hàng đầu," QA Hair dễ dàng tiếp cận mọi khách hàng thông qua các kênh phân phối rộng rãi và dịch vụ khách hàng tận tâm. Hãy đến với QA Hair để tìm kiếm giải pháp tóc hoàn hảo cho bạn!
            </p>
          </div>
          <img src="/image/background.jpg" alt="#" />
        </div>
        <div className="about-box">
          <img src="/image/background.jpg" alt="#" />
          <div className="about-title-3">
            <p>
            QA Hair là thương hiệu hàng đầu tại Việt Nam chuyên cung cấp các sản phẩm tóc chất lượng cao, từ tóc giả đến tóc nối và các sản phẩm chăm sóc tóc. Chúng tôi cam kết mang đến sản phẩm an toàn, tự nhiên và phù hợp với nhiều phong cách. Với phương châm "Chất lượng là hàng đầu," QA Hair dễ dàng tiếp cận mọi khách hàng thông qua các kênh phân phối rộng rãi và dịch vụ khách hàng tận tâm. Hãy đến với QA Hair để tìm kiếm giải pháp tóc hoàn hảo cho bạn!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default AboutUs;