import Container from 'react-bootstrap/Container';
import Slide from './components/slide';

function Home(){
  return (
    <div className="Content">

    <h3 className="display-4 text-center mt-5"> Welcome to Addersfield Soccer Club</h3>

    <Container>
      <div className="mx-auto w-50 mt-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat purus a lectus tempor cursus. 
          Vestibulum pulvinar consectetur consectetur. Vestibulum sodales turpis quis auctor lobortis. Nulla varius, neque eu molestie volutpat, mi ex vehicula nunc, ac laoreet dui tortor id sapien.
           Quisque porta ac mauris at consectetur. Pellentesque faucibus lorem nibh, ut mollis quam porttitor quis. Quisque diam libero, tincidunt sed augue in, laoreet efficitur sem</p>
      </div>
    </Container>
      <div className ="d-flex mx-auto justify-content-center mt-5 w-50 h-50">
        <Slide />
      </div>

  </div>
  );

}

export default Home;