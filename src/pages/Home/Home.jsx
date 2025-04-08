import React from 'react';
import Header from '../../component/Header/HeaderComponent';
import Footer from '../../component/Footer/FooterComponent';
import Button from '../../component/Button/Button';
import "./styleHome.css";

const Home = () => {
  return (
    <>
      <Header/>
        <div className="home-1">
          <div className="1-plan">
            <img src="/image/background.jpg" alt="home" className="bk1" />
            <div className="content-1">
                <h1>
                  Quốc Anh Hair
                </h1>
                <p>
                  Tại đây chúng tôi cung cấp các sản phẩm về tóc giả, tóc nối, với nhiều sản khác về tóc. Chất lượng sản phẩm luôn luôn được đặt lên hàng đầu
                </p>
                <div className="buttons">
                  <Button
                    variant="outline" 
                    size="lg" 
                    to="/hair"
                    className="hover:bg-primary hover:text-black w-full sm:w-auto">
                    Go to catalog
                  </Button>
                  <Button
                    variant="default" 
                    size="lg" 
                    to="/contact"
                    className="hover:bg-black hover:text-white w-full sm:w-auto">
                      Cooperation
                  </Button>
                </div>
            </div>
          </div>
        </div>
        <div className="home-2">
          <div className="title-1">
            <p>#</p>
          </div>
          <div className="box-1">
              <div className="text1">
                <p> TN HAIR VIETNAM is a state-of-the-art, full-cycle hair extension factory. With advanced equipment, innovative technologies, and a modern production approach, we are proud to deliver top-notch products to our valued customers.
Our hair extensions are designed for longevity, thanks to their exceptional quality. From tape-ins and wefts to keratin bonds and more, we offer a complete range of extension options. Each strand is carefully crafted with a fully intact cuticle layer, ensuring elasticity, natural shine, and long-lasting beauty. Every step of the process is performed by hand, enabling us to maintain the highest standards of quality control.</p>
              </div>
              <div className="box-img">
                <img src="/image/background.jpg" alt="abcd"/>
              </div>
          </div>
          <div className="box-2">
            <div className="box-img">
              <img src="/image/background.jpg" alt="abcd"/>
            </div>
            <div className="text2">
              <p> At TN HAIR VIETNAM, our mission is to empower hair professionals with premium Remy hair extensions that look natural and feel amazing, helping them retain loyal clients. Together, we can ensure you and your clients feel confident and radiant—all at the best value!</p>
            </div>
          </div>
        <div/>
        <div className="home-3">
          <div className="title-2">
            <p>#OUR PRODUCT</p>
          </div>
          <div class="container-3">
            <div class="miniBox">
              <h2>Loai 1</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai1"/>
              </a>
            </div>
            <div class="miniBox">
              <h2>Loai 2</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai2" />
              </a>
            </div>
            <div class="miniBox">
              <h2>Loai 3</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai3" />
              </a>
            </div>
            <div class="miniBox">
              <h2>Loai 4</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai4" />
              </a>
            </div>
            <div class="miniBox">
              <h2>Loai 5</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai5" />
              </a>
            </div>
            <div class="miniBox">
              <h2>Loai 6</h2>
              <a href="#" className="boximg">
              <img src="/image/background.jpg" alt="loai5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
};

export default Home; 