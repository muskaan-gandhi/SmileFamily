import React, { Component } from 'react';
import "./images.css";
import { Slide } from 'react-slideshow-image';
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.png";
import Image5 from "./image5.png";
import Image6 from "./image6.png";
import 'react-slideshow-image/dist/styles.css';

class Images extends Component {
    constructor() {
      super();
      this.slideRef = React.createRef();
      this.back = this.back.bind(this);
      this.next = this.next.bind(this);
      this.state = {
        current: 0
      };
    }
  
    back() {
      this.slideRef.current.goBack();
    }
  
    next() {
      this.slideRef.current.goNext();
    }
  
    render() {
      const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: "ease",
      };
      const slideImages = [Image1, Image2, Image3, Image4, Image5, Image6];
      return (
        <div>
          <div className="slide-container">
            <Slide ref={this.slideRef} {...properties}>
              {slideImages.map((each, index) => (
                <div key={index} className="each-slide">
                  <img className="lazy" src={each} alt="sample" />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      );
    }
  }
export default Images;