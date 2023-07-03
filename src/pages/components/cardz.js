import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardz(props) {
    const title= props.title;
    const body = props.body;
    const purpose = props.purpose;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./images/placeholderC.jpg")} />
      <Card.Body>
        <Card.Title>
            <div className="text-center">
                {title}
            </div>
        </Card.Title>

        <Card.Text>
            <div className="text-center">
                {body}
            </div>
        </Card.Text>

        <Button className="d-block mx-auto" variant="primary" onClick={purpose}>Learn More </Button>
      </Card.Body>
    </Card>
  );
}

export default Cardz;