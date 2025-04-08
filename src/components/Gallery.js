import React from 'react';
import Img1 from '../assets/gallery_imgs/gallery1.jpg';
import Img2 from '../assets/gallery_imgs/gallery2.jpg';
import Img3 from '../assets/gallery_imgs/gallery3.jpg';
import Img4 from '../assets/gallery_imgs/gallery4.jpg';
import Img5 from '../assets/gallery_imgs/gallery5.jpg';
import Img6 from '../assets/gallery_imgs/gallery6.jpg';
import './Gallery.css';

function Gallery() {
  return (
    <div className="galleryWrapper">
      <div className="gallery">
        <div className="galleryItem-1">
          <img className="galleryImg" src={Img1} alt="" />
        </div>
        <div className="galleryItem-2">
          <img className="galleryImg" src={Img2} alt="" />
        </div>
        <div className="galleryItem-3">
          <img className="galleryImg" src={Img3} alt="" />
        </div>
        <div className="galleryItem-4">
          <img className="galleryImg" src={Img4} alt="" />
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
