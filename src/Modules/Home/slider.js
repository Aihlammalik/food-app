
import Slider from "react-slick";
import image1 from "../../CommonComponent/Assets/desi.jpg";
import image2 from '../../CommonComponent/Assets/pizza.jpg'
import image3 from '../../CommonComponent/Assets/chinese.jpg'



import React, { Component } from "react";
import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2 style={{paddingLeft:"600px", backgroundColor:"black" ,color:"white" ,marginBottom:"0px" ,marginTop:"70px"}}>Choosed by The experts</h2>
        <Slider {...settings}>
          <div>
            <img width = "100%" src={image1} />
          </div>
    
          <div>
            <img width = "100%" src={image2} />
          </div>

          <div>
            <img width = "100%" src={image3} />
          </div>
        </Slider>
      </div>
    );
  }
}