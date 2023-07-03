import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
	return (
		<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
			<Row classname="">
				<Col className="col mt-5">
					<h4 class="text-center">Contact Coach</h4>
				</Col>
			</Row>

			<Row className="">
				<Container>
					<Form>
						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5" controlId="Name">
									<Form.Label>Full Name</Form.Label>
									<Form.Control type="text" placeholder="Enter full name" />
								</Form.Group>
							

								<Form.Group className="mb-5" controlId="Email">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group className="mb-5" controlID="Coach">
									<Form.Label>Coach</Form.Label>
									<Form.Select aria-label="Default select example">
										<option value=""></option>
										<option value="1">To be added </option>
									</Form.Select>
								</Form.Group>

								<Form.Group className="mb-5" controlId="Subject">
										<Form.Label>Subject </Form.Label>
										<Form.Control type="text" placeholder="Enter email" />
								</Form.Group>

								<Form.Group className="mb-5" controlId="Message">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
								
								<Row className="mt-5 d-flex justify-content-center text-center">
									<Button variant="primary" type="submit" >
										Submit
									</Button>
								</Row>
							</Col>
						</Row>

					</Form>

				</Container>

			</Row>
		</Container>
	);
};

export default Contact;