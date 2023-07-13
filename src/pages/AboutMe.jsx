import Navbar from '../components/Navbar'
import '../styles/AboutMe.scss'
function AboutMe() {
  return (
    <div className="bio-container">
      <Navbar />
      <div className="bio">
        <h1>Photography and Editing Style:</h1>
        <p>
          my approach to photography is to capture raw and authentic moments
          with an artistic eye. I prefer not to have models hold specifc poses,
          but capture subjects in their natural environement where I would move
          around the subject to snap the shot in which represents themselves.
          <br></br>
          <br></br>I like to use minimalist enviornments so that the background
          does not over power the photos purpose. My approach to editing may be
          summarized as gritty, emotional, and bright. I add a fair amount of
          grain to enhance an authentic and timeless aesthetic.
        </p>
      </div>
      <hr></hr>
      <div className="important-information">
        <h2> Some other important things to note:</h2>
        <div>
          <h3>Camera Rental Equipment:</h3>
          <p>
            needed rental equipment such as lighting equipment, reflectors, or
            additional camera bodies or lenses are added to the end rate and are
            the responsibility of the customer.
          </p>
          <h3>Photography services:</h3>
          <p>hourly rate (including transportation time): $150 per hour.</p>
          <h3>Photo Editing:</h3>
          <p>
            hourly rate of $50 per hour. This rate includes photo selection,
            color correction, exposure adjustments, cropping, skin retouching,
            object removal, etc. Note: the time required for photo editing may
            vary depending on the complexity of the project and the clients
            specific photography guidelines.
          </p>
          <h2>Additional Information:</h2>
          <p>
            Please note that the rates provided above are subject to change and
            may vary based on the specifc requirements of each project. For a
            detailed quote tailored to your specifc needs, contact us directly.
          </p>
        </div>
      </div>
      <hr></hr>
      <footer>
        <p>THANK YOU FOR CONSIDERING MY PHOTOGRAPHY SERVICES.</p>
      </footer>
    </div>
  )
}

export default AboutMe
