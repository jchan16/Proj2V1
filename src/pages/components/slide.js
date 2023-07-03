import Carousel from 'react-bootstrap/Carousel';

function Slide() {
    // add more detialed alts of each image later
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/club.jpg')}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/team.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/play.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slide;