import React from "react";
import "./../styles/packs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";

export default () => {
  const packsData = [
    { mrp: 11970, val: 8991 },
    { mrp: 43380, val: 22491 },
    { mrp: 22440, val: 14391 },
    { mrp: 22440, val: 15291 }
  ];

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li id="c1">At Centre</li>
            <li id="c2">At Home</li>
          </ul>
        </nav>
      </div>
      <div className="label">
        <img src="./assets/tag.svg" alt="tag" id="lbl-l" />
        <div className="lbl-text">
          <p id="lbl-title">Book 2 classes FREE!</p>
          <p id="lbl-subtitle">At any cult.fit center</p>
        </div>
        <img src="./assets/arrow.svg" alt="arrow" id="lbl-r" />
      </div>
      <div className="title-section">
        <div className="title-t">Cult Unlimited Membership</div>
        <div className="title-st">
          Access to 100+ Cult centers | Free access to mind.fit and Cult outdoor
          centers | Attend unlimited number of classes
        </div>
      </div>
      <div className="all-packs">
        {packsData.map((pack, ind) => (
          <a href="null" className="packs" key={ind}>
            <img
              className="pack-img"
              src={`./assets/pack${ind + 1}.jpg`}
              alt={`p${ind}`}
            />
            <div className="price-orignal">
              <div className="p-det">Fitness pack at Cult</div>
              <div className="mrp">₹{pack.mrp}</div>
            </div>
            <div className="offer-price">
              <img className="price-img" src="./assets/price.svg" alt="ptag" />
              <div className="o-det">Offer Price:</div>
              <div className="price-val">₹{pack.val}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="yt-link">
        <video
          height="423"
          controls
          width="873"
          className="vid"
          poster="./assets/vid.jpg"
        >
          <source
            src="https://s3.ap-south-1.amazonaws.com/curefit-content/video/CULTYourNewPlayground.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="workouts">
        <div className="w-title">Choose your workouts</div>
        <div className="w-logo">
          {[...Array(9).keys()].map(k => (
            <img
              src={`./assets/w${k + 1}.jpg`}
              alt={`w${k + 1}`}
              key={k + "wx"}
            />
          ))}
        </div>
      </div>
      <div className="view">
        <div className="view-head">
          <div className="view-t">Experience the space</div>
          <div className="view-st">
            State-of-the-art facility for all your fitness needs
          </div>
        </div>
        <div className="view-slider">
          <Carousel
            list={[...Array(4).keys()].map(k => ({
              src: `./assets/v${k + 1}.jpg`,
              alt: `v${k + 1}`
            }))}
          />
        </div>
      </div>
    </div>
  );
};
