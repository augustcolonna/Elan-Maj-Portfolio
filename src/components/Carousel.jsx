/* eslint-disable react/prop-types */
import '../styles/carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }
  return (
    <div className="carousel">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      {
        // eslint-disable-next-line react/prop-types
        data.map((item, index) => {
          
          return (
            <img
              className={slide === index ? 'slide' : 'slide slide-hidden'}
              src={item.src}
              alt={item.alt}
              key={index}
            />
          )
        })
      }
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              className={
                slide === index ? 'indicator' : 'indicator indicator-inactive'
              }
              key={index}
              onClick={() => setSlide(index)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}

export default Carousel
