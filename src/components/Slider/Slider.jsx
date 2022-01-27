import React from "react";
import { Image } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css";

const SliderCmp = () => {
  return (
    <div className="slider">
      <div className="slider-row">
        <div
          className="content-slide"
          style={{ height: "100%", backgroundColor: "#fcdb34" }}
        >
          <Carousel showArrows={false}>
            <div className="info">
              <h2>libero non! Culpa</h2>
              <p>
                adipisicing elit. Vel, libero non! Culpa quis atque doloribus,
                aliquam at distinctio reprehenderit laborum harum. Ipsum, quo
                nihil dicta ratione illum eveniet omnis veritatis. Vel, libero
                non! Culpa quis atque doloribus, aliquam at distinctio
                reprehenderit laborum harum. Ipsum, quo nihil dicta ratione
                illum eveniet omnis veritatis?
              </p>
            </div>
            <div className="info">
              <h2>Lorem ipsum dolor</h2>
              <p>
                adipisicing elit. Vel, libero non! Culpa quis atque doloribus,
                aliquam at distinctio reprehenderit laborum harum. Ipsum, quo
                nihil dicta ratione illum eveniet omnis veritatis. Vel, libero
                non! Culpa quis atque doloribus, aliquam at distinctio
                reprehenderit laborum harum. Ipsum, quo nihil dicta ratione
                illum eveniet omnis veritatis?
              </p>
            </div>
            <div className="info" y>
              <h2>sit amet consectetur</h2>
              <p>
                adipisicing elit. Vel, libero non! Culpa quis atque doloribus,
                aliquam at distinctio reprehenderit laborum harum. Ipsum, quo
                nihil dicta ratione illum eveniet omnis veritatis. Vel, libero
                non! Culpa quis atque doloribus, aliquam at distinctio
                reprehenderit laborum harum. Ipsum, quo nihil dicta ratione
                illum eveniet omnis veritatis?
              </p>
            </div>
          </Carousel>
        </div>
        <div className="picture-slide">
          <Carousel
            autoPlay
            infiniteLoop
            renderIndicator={(callback, b, ind, d, e) => {
              return (
                <div className="indicator-wrapper" onClick={callback}>
                  <Image
                    fluid
                    style={{ cursor: "pointer", zIndex: "10" }}
                    src={`/images/slider-${ind + 1}.png`}
                    alt="sol-bank-img"
                    className="img"
                  />
                </div>
              );
            }}
            renderThumbs={() => undefined}
          >
            <div>
              <Image
                fluid
                src="/images/slider-1.png"
                alt="sol-bank-phone"
                className="sol-bank-slide"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <Image
                fluid
                src="/images/slider-2.png"
                alt="sol-bank-lady"
                className="sol-bank-slide"
              />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <Image
                fluid
                src="/images/slider-3.png"
                alt="sol-bank-phone"
                className="sol-bank-slide"
              />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SliderCmp;
