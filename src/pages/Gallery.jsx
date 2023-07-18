/* eslint-disable react/prop-types */

import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/Gallery.scss'

function Gallery({ data }) {
 

  return (
   
    <div className='photo-gallery'>
      {data.map((image, index) => {
        return (
        <div className="gallery-container" key={index}>
          <img src={image.original} alt={image.alt} />
        </div>
        )
      })}
    </div>
  )
}

export default Gallery
