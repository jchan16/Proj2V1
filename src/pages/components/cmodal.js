import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from "react-router-dom";

function Cmodal(props) {
    const league = props.league1;
    const name = props.name1;
    const show = props.show2;
    const hide = props.onHide2;

  return (
    <Modal show={show} onHide={hide} className="modal-lg">
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row className=" d-flex  flex-row justify-content-center ">
              <Col className="col d-flex  flex-column align-items-center justify-content-center">
                <img src={require("./images/placeholderC.jpg")} class="d-block img-fluid mb-5" alt="..."/>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
              <ListGroup className="list-group-flush d-flex">
                  <ListGroup.Item className="text-center"> <strong>Leagues this Coach coaches for </strong></ListGroup.Item>
                  <ListGroup.Item className="text-center">{league} womens </ListGroup.Item>
                  <ListGroup.Item className="text-center">{league} mens</ListGroup.Item>
                  <ListGroup.Item className="text-center">{league} unisex</ListGroup.Item>
                  <ListGroup.Item> {/* Turn into form later on*/ }
                    <div className="text-center">
                      <Link to="/contact"><Button>Contact Coach</Button></Link>
                    </div>
                  </ListGroup.Item>
            </ListGroup>
              </Col>
            </Row>

            <Row className="justify-content-center d-flex">
              <Col className="d-flex">
                <div class="d-block m-4">
                  <h3> <strong>Description:</strong></h3>
                  <br/>
                  <p class="text-wrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat purus a lectus tempor cursus. 
                  Vestibulum pulvinar consectetur consectetur. Vestibulum sodales turpis quis auctor lobortis. Nulla varius, neque eu molestie volutpat, mi ex vehicula nunc, ac laoreet dui tortor id sapien.
                  Quisque porta ac mauris at consectetur. Pellentesque faucibus lorem nibh, ut mollis quam porttitor quis. Quisque diam libero, tincidunt sed augue in, laoreet efficitur sem
                  </p>
                  <br/>
              </div>
              </Col>
            </Row>
          </Container>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    
  );
}

export default Cmodal;