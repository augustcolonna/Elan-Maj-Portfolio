import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/Gallery.scss'

function Gallery() {
  const images = [
    {
      original: '_MG_0415.jpg',
      thumbnail: '_MG_0415.jpg',
    },
    {
      original: '_MG_0427.jpg',
      thumbnail: '_MG_0427.jpg',
    },
    {
      original: '_MG_0460.jpg',
      thumbnail: '_MG_0460.jpg',
    },
    {
      original: '_MG_0473.jpg',
      thumbnail: '_MG_0473.jpg',
    },
    {
      original: 'CPIMG_5431.jpg',
      thumbnail: 'CPIMG_5431.jpg',
    },
    {
      original: 'CPIMG_5463.jpg',
      thumbnail: 'CPIMG_5463.jpg',
    },
    {
      original: 'CPIMG_5488.jpg',
      thumbnail: 'CPIMG_5488.jpg',
    },
    {
      original: 'CPIMG_5496.jpg',
      thumbnail: 'CPIMG_5496.jpg',
    },
    {
      original: 'CPIMG_5564.jpg',
      thumbnail: 'CPIMG_5564.jpg',
    },
    {
      original: 'CPIMG_5581.jpg',
      thumbnail: 'CPIMG_5581.jpg',
    },
    {
      original: 'EL236A1709.jpg',
      thumbnail: 'EL236A1709.jpg',
    },
    {
      original: 'EL236A1740.jpg',
      thumbnail: 'EL236A1740.jpg',
    },
    {
      original: 'EL236A1769.jpg',
      thumbnail: 'EL236A1769.jpg',
    },
    {
      original: 'EL236A1788.jpg',
      thumbnail: 'EL236A1788.jpg',
    },
    {
      original: 'EL236A1793.jpg',
      thumbnail: 'EL236A1793.jpg',
    },
    {
      original: 'EL236A1851.jpg',
      thumbnail: 'EL236A1851.jpg',
    },
    {
      original: 'EL236A1906.jpg',
      thumbnail: 'EL236A1906.jpg',
    },
    {
      original: 'FAIMG_6733.jpg',
      thumbnail: 'FAIMG_6733.jpg',
    },
    {
      original: 'FAIMG_6837.jpg',
      thumbnail: 'FAIMG_6837.jpg',
    },
    {
      original: 'FAIMG_6846.jpg',
      thumbnail: 'FAIMG_6846.jpg',
    },
    {
      original: 'G-IMG_2464.jpg',
      thumbnail: 'G-IMG_2464.jpg',
    },
    {
      original: 'G-IMG_2528.jpg',
      thumbnail: 'G-IMG_2528.jpg',
    },
    {
      original: 'G-IMG_2685.jpg',
      thumbnail: 'G-IMG_2685.jpg',
    },
    {
      original: 'G-IMG_2690.jpg',
      thumbnail: 'G-IMG_2690.jpg',
    },
    {
      original: 'G-IMG_2711.jpg',
      thumbnail: 'G-IMG_2711.jpg',
    },
    {
      original: 'G-IMG_2718.jpg',
      thumbnail: 'G-IMG_2718.jpg',
    },
    {
      original: 'G-IMG_2859.jpg',
      thumbnail: 'G-IMG_2859.jpg',
    },
    {
      original: 'G-IMG_4574.jpg',
      thumbnail: 'G-IMG_4574.jpg',
    },
    {
      original: 'ISIMG_6052.jpg',
      thumbnail: 'ISIMG_6052.jpg',
    },
    {
      original: 'ISIMG_6077.jpg',
      thumbnail: 'ISIMG_6077.jpg',
    },
    {
      original: 'SFIMG_6600.jpg',
      thumbnail: 'SFIMG_6600.jpg',
    },
    {
      original: 'SFIMG_6617.jpg',
      thumbnail: 'SFIMG_6617.jpg',
    },
    {
      original: 'SFIMG_6619.jpg',
      thumbnail: 'SFIMG_6619.jpg',
    },
    {
      original: 'SLPIMG_5708.jpg',
      thumbnail: 'SLPIMG_5708.jpg',
    },
    {
      original: 'SLPIMG_5711.jpg',
      thumbnail: 'SLPIMG_5711.jpg',
    },
    {
      original: 'SLPIMG_5749.jpg',
      thumbnail: 'SLPIMG_5749.jpg',
    },
    {
      original: 'SLPIMG_5824.jpg',
      thumbnail: 'SLPIMG_5824.jpg',
    },
    {
      original: 'SLPIMG_5915.jpg',
      thumbnail: 'SLPIMG_5915.jpg',
    },
    {
      original: 'SLPIMG_5955.jpg',
      thumbnail: 'SLPIMG_5955.jpg',
    },
    {
      original: 'SLPIMG_5961.jpg',
      thumbnail: 'SLPIMG_5961.jpg',
    },
  ]

  const createImageUrl = (images) => {
    return images
  }
  
  return (
    <div className='image-gallery-wrapper'>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        thumbnailPosition="top"
        lazyLoad={false}
        showPlayButton={true}
        autoPlay={false}
        slideInterval={5000} 
      />
    </div>
  )
}

export default Gallery
