import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/Gallery.scss'

function Gallery() {
  const images = [
    {
      original: 'src/assets/_MG_0415.jpg',
      thumbnail: 'src/assets/_MG_0415.jpg',
    },
    {
      original: 'src/assets/_MG_0427.jpg',
      thumbnail: 'src/assets/_MG_0427.jpg',
    },
    {
      original: 'src/assets/_MG_0460.jpg',
      thumbnail: 'src/assets/_MG_0460.jpg',
    },
    {
      original: 'src/assets/_MG_0473.jpg',
      thumbnail: 'src/assets/_MG_0473.jpg',
    },
    {
      original: 'src/assets/CPIMG_5431.jpg',
      thumbnail: 'src/assets/CPIMG_5431.jpg',
    },
    {
      original: 'src/assets/CPIMG_5463.jpg',
      thumbnail: 'src/assets/CPIMG_5463.jpg',
    },
    {
      original: 'src/assets/CPIMG_5488.jpg',
      thumbnail: 'src/assets/CPIMG_5488.jpg',
    },
    {
      original: 'src/assets/CPIMG_5496.jpg',
      thumbnail: 'src/assets/CPIMG_5496.jpg',
    },
    {
      original: 'src/assets/CPIMG_5564.jpg',
      thumbnail: 'src/assets/CPIMG_5564.jpg',
    },
    {
      original: 'src/assets/CPIMG_5581.jpg',
      thumbnail: 'src/assets/CPIMG_5581.jpg',
    },
    {
      original: 'src/assets/EL236A1709.jpg',
      thumbnail: 'src/assets/EL236A1709.jpg',
    },
    {
      original: 'src/assets/EL236A1740.jpg',
      thumbnail: 'src/assets/EL236A1740.jpg',
    },
    {
      original: 'src/assets/EL236A1769.jpg',
      thumbnail: 'src/assets/EL236A1769.jpg',
    },
    {
      original: 'src/assets/EL236A1788.jpg',
      thumbnail: 'src/assets/EL236A1788.jpg',
    },
    {
      original: 'src/assets/EL236A1793.jpg',
      thumbnail: 'src/assets/EL236A1793.jpg',
    },
    {
      original: 'src/assets/EL236A1851.jpg',
      thumbnail: 'src/assets/EL236A1851.jpg',
    },
    {
      original: 'src/assets/EL236A1906.jpg',
      thumbnail: 'src/assets/EL236A1906.jpg',
    },
    {
      original: 'src/assets/FAIMG_6733.jpg',
      thumbnail: 'src/assets/FAIMG_6733.jpg',
    },
    {
      original: 'src/assets/FAIMG_6837.jpg',
      thumbnail: 'src/assets/FAIMG_6837.jpg',
    },
    {
      original: 'src/assets/FAIMG_6846.jpg',
      thumbnail: 'src/assets/FAIMG_6846.jpg',
    },
    {
      original: 'src/assets/G-IMG_2464.jpg',
      thumbnail: 'src/assets/G-IMG_2464.jpg',
    },
    {
      original: 'src/assets/G-IMG_2528.jpg',
      thumbnail: 'src/assets/G-IMG_2528.jpg',
    },
    {
      original: 'src/assets/G-IMG_2685.jpg',
      thumbnail: 'src/assets/G-IMG_2685.jpg',
    },
    {
      original: 'src/assets/G-IMG_2690.jpg',
      thumbnail: 'src/assets/G-IMG_2690.jpg',
    },
    {
      original: 'src/assets/G-IMG_2711.jpg',
      thumbnail: 'src/assets/G-IMG_2711.jpg',
    },
    {
      original: 'src/assets/G-IMG_2718.jpg',
      thumbnail: 'src/assets/G-IMG_2718.jpg',
    },
    {
      original: 'src/assets/G-IMG_2859.jpg',
      thumbnail: 'src/assets/G-IMG_2859.jpg',
    },
    {
      original: 'src/assets/G-IMG_4574.jpg',
      thumbnail: 'src/assets/G-IMG_4574.jpg',
    },
    {
      original: 'src/assets/ISIMG_6052.jpg',
      thumbnail: 'src/assets/ISIMG_6052.jpg',
    },
    {
      original: 'src/assets/ISIMG_6077.jpg',
      thumbnail: 'src/assets/ISIMG_6077.jpg',
    },
    {
      original: 'src/assets/SFIMG_6600.jpg',
      thumbnail: 'src/assets/SFIMG_6600.jpg',
    },
    {
      original: 'src/assets/SFIMG_6617.jpg',
      thumbnail: 'src/assets/SFIMG_6617.jpg',
    },
    {
      original: 'src/assets/SFIMG_6619.jpg',
      thumbnail: 'src/assets/SFIMG_6619.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5708.jpg',
      thumbnail: 'src/assets/SLPIMG_5708.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5711.jpg',
      thumbnail: 'src/assets/SLPIMG_5711.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5749.jpg',
      thumbnail: 'src/assets/SLPIMG_5749.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5824.jpg',
      thumbnail: 'src/assets/SLPIMG_5824.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5915.jpg',
      thumbnail: 'src/assets/SLPIMG_5915.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5955.jpg',
      thumbnail: 'src/assets/SLPIMG_5955.jpg',
    },
    {
      original: 'src/assets/SLPIMG_5961.jpg',
      thumbnail: 'src/assets/SLPIMG_5961.jpg',
    },
  ]

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
