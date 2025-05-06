import React, { useRef, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProjectPopUp({ project, onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

      const PrevArrow = ({ onClick }) => {
        return (
          <div
            className="absolute -left-[40px] top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer"
            onClick={onClick}
          >
          〈 
          </div>
        );
      };

      const NextArrow = ({ onClick }) => {
        return (
          <div
            className="absolute -right-[40px] top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer"
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
    <div ref={popupRef} className="relative w-full">
      <Slider {...settings}>
        <div>
          <img src={project.img01} alt="미리보기 사진" />
        </div>
        <div>
          <img src={project.img02} alt="미리보기 사진" />
        </div>
        <div>
          <img src={project.img03} alt="미리보기 사진" />
        </div>
        <div>
          <img src={project.img04} alt="미리보기 사진" />
        </div>
        <div>
          <img src={project.img05} alt="미리보기 사진" />
        </div>
      </Slider>
    </div>
  );
}  

export default ProjectPopUp;
