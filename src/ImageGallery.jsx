import React from 'react'
import './css/ImagesGallery.css';

const ImageGallery = ({ fetchData }) => {

  // const handleDownload = (url) => {
  //   const matches = url.match(/[A-Za-z0-9\-_]+\.\w+$/);
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {},
  //   })
  //   .then((response) => {
  //     response.arrayBuffer().then((buffer) => {
  //       const url = window.URL.createObjectURL(new Blob([buffer]));
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', matches[0]);
  //       document.body.appendChild(link);
  //       link.click();
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  return (
    <div className="content">
      <div className="images-wrapper">
          { fetchData.map((data) => (     
            <div className='image' key={data.id}>
              <a href={ data.largeImageURL } target="_blank" rel="noopener noreferrer" download >
                <img src={data.webformatURL} alt="#"/>
              </a>
              {/* <button type='button' onClick={ handleDownload(data.largeImageURL) }>aaa</button> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery