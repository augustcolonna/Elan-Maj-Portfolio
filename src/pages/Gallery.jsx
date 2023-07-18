/* eslint-disable react/prop-types */
// import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/Gallery.scss'

function Gallery({ data }) {
  // const images = [
  //   {
  //     original: '/assets/_MG_0415.jpg',
  //     thumbnail: '/assets/_MG_0415.jpg',
  //   },
  //   {
  //     original: '/assets/_MG_0427.jpg',
  //     thumbnail: '/assets/_MG_0427.jpg',
  //   },
  //   {
  //     original: '/assets/_MG_0460.jpg',
  //     thumbnail: '/assets/_MG_0460.jpg',
  //   },
  //   {
  //     original: '/assets/_MG_0473.jpg',
  //     thumbnail: '/assets/_MG_0473.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5431.jpg',
  //     thumbnail: '/assets/CPIMG_5431.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5463.jpg',
  //     thumbnail: '/assets/CPIMG_5463.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5488.jpg',
  //     thumbnail: '/assets/CPIMG_5488.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5496.jpg',
  //     thumbnail: '/assets/CPIMG_5496.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5564.jpg',
  //     thumbnail: '/assets/CPIMG_5564.jpg',
  //   },
  //   {
  //     original: '/assets/CPIMG_5581.jpg',
  //     thumbnail: '/assets/CPIMG_5581.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1709.jpg',
  //     thumbnail: '/assets/EL236A1709.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1740.jpg',
  //     thumbnail: '/assets/EL236A1740.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1769.jpg',
  //     thumbnail: '/assets/EL236A1769.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1788.jpg',
  //     thumbnail: '/assets/EL236A1788.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1793.jpg',
  //     thumbnail: '/assets/EL236A1793.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1851.jpg',
  //     thumbnail: '/assets/EL236A1851.jpg',
  //   },
  //   {
  //     original: '/assets/EL236A1906.jpg',
  //     thumbnail: '/assets/EL236A1906.jpg',
  //   },
  //   {
  //     original: '/assets/FAIMG_6733.jpg',
  //     thumbnail: '/assets/FAIMG_6733.jpg',
  //   },
  //   {
  //     original: '/assets/FAIMG_6837.jpg',
  //     thumbnail: '/assets/FAIMG_6837.jpg',
  //   },
  //   {
  //     original: '/assets/FAIMG_6846.jpg',
  //     thumbnail: '/assets/FAIMG_6846.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2464.jpg',
  //     thumbnail: '/assets/G-IMG_2464.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2528.jpg',
  //     thumbnail: '/assets/G-IMG_2528.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2685.jpg',
  //     thumbnail: '/assets/G-IMG_2685.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2690.jpg',
  //     thumbnail: '/assets/G-IMG_2690.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2711.jpg',
  //     thumbnail: '/assets/G-IMG_2711.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2718.jpg',
  //     thumbnail: '/assets/G-IMG_2718.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_2859.jpg',
  //     thumbnail: '/assets/G-IMG_2859.jpg',
  //   },
  //   {
  //     original: '/assets/G-IMG_4574.jpg',
  //     thumbnail: '/assets/G-IMG_4574.jpg',
  //   },
  //   {
  //     original: '/assets/ISIMG_6052.jpg',
  //     thumbnail: '/assets/ISIMG_6052.jpg',
  //   },
  //   {
  //     original: '/assets/ISIMG_6077.jpg',
  //     thumbnail: '/assets/ISIMG_6077.jpg',
  //   },
  //   {
  //     original: '/assets/SFIMG_6600.jpg',
  //     thumbnail: '/assets/SFIMG_6600.jpg',
  //   },
  //   {
  //     original: '/assets/SFIMG_6617.jpg',
  //     thumbnail: '/assets/SFIMG_6617.jpg',
  //   },
  //   {
  //     original: '/assets/SFIMG_6619.jpg',
  //     thumbnail: '/assets/SFIMG_6619.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5708.jpg',
  //     thumbnail: '/assets/SLPIMG_5708.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5711.jpg',
  //     thumbnail: '/assets/SLPIMG_5711.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5749.jpg',
  //     thumbnail: '/assets/SLPIMG_5749.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5824.jpg',
  //     thumbnail: '/assets/SLPIMG_5824.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5915.jpg',
  //     thumbnail: '/assets/SLPIMG_5915.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5955.jpg',
  //     thumbnail: '/assets/SLPIMG_5955.jpg',
  //   },
  //   {
  //     original: '/assets/SLPIMG_5961.jpg',
  //     thumbnail: '/assets/SLPIMG_5961.jpg',
  //   },
  // ]

  // const createGalleryImages = images.map((image) => {
  //     const urlOg = import.meta.env.VITE_URLPREFIX + image.original
  //     console.log(urlOg)
  //     return urlOg
  // })

  return (
    // <div className="image-gallery-wrapper">
    //   <ImageGallery
    //     items={images}
    //     showThumbnails={false}
    //     showFullscreenButton={true}
    //     thumbnailPosition="top"
    //     lazyLoad={true}
    //     showPlayButton={true}
    //     autoPlay={false}
    //     slideInterval={5000}
    //   />
    // </div>
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
