import React from 'react';
import Img1 from '../assets/home_gallery/img_1.jpg';
import Img2 from '../assets/home_gallery/img_2.jpg';
import Img3 from '../assets/home_gallery/IMG_2389.PNG';
import Img4 from '../assets/home_gallery/IMG_2391.PNG';
import Img5 from '../assets/home_gallery/IMG_7829.PNG';
import Img6 from '../assets/home_gallery/img_6.jpg';
import './Gallery.css';

function Gallery() {
  return (
    <div className="galleryWrapper">
      <div className="gallery">
        <div className="galleryItem-1">
          <img className="galleryImg" src={Img4} alt="" />
        </div>
        <div className="galleryItem-2">
          <img className="galleryImg" src={Img3} alt="" />
        </div>
        <div className="galleryItem-3">
          <img className="galleryImg" src={Img2} alt="" />
        </div>
        <div className="galleryItem-4">
          <img className="galleryImg" src={Img1} alt="" />
        </div>
        <div className="galleryItem-5">
          <img className="galleryImg" src={Img5} alt="" />
        </div>
        <div className="galleryItem-6">
          <img className="galleryImg" src={Img6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
