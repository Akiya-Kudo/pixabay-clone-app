import React from 'react'
import './css/ImagesGallery.css';

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
          { fetchData.map((data) => (     
            <div className='image' key={data.id}>
              <a href={ data.pageURL } target="_blank" rel="noopener noreferrer">
                <img src={data.largeImageURL} alt="" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery