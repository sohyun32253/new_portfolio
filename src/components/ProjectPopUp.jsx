import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProjectPopUp({ project }) {
    // const [isClosePopUp, setIsClosePopUp] = useRef();

    // // const popupClose = () => {
    // //     setIsClosePopUp((e)=>{
    // //         isClosePopUp
    // //     })
    // }

      const PrevArrow = ({ onClick }) => {
        return (
          <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer"
            onClick={onClick}
          >
          〈 
          </div>
        );
      };

      const NextArrow = ({ onClick }) => {
        return (
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer"
            onClick={onClick}
          >
             〉
          </div>
        );
      };

  if (!project) return null;

  var settings = {
    arrows: true,
    autoplay : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
    <div className='w-full h-[300px] bg-white'>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
  );
}

export default ProjectPopUp;
