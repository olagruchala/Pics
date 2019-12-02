import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImagesList = (props) => {

  const images = props.images.map(image => {
    return <ImageCard key={image.id} description={image.description} url={image.urls.regular} id={image.id}/>
  });

    return (
      <div className='image-list'>{images}</div>
    )
};

export default ImagesList;
