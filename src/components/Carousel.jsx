import '../styles/carousel.scss'


const Carousel = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} />
      })}
    </div>
  )
}

export default Carousel
