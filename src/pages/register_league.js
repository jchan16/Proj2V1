import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
	return (
		<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
			<Row classname="">
				<Col className="col mt-5">
					<h4 class="text-center">Register into a league</h4>
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
							</Col>

							<Col>
								<Form.Group className="mb-5" controlId="Email">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>
							</Col>
						</Row>

						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5 flex-fill" controlId="Birtdate">
										<Form.Label>Birthday</Form.Label>
										<Form.Control type="date" placeholder=""/>
								</Form.Group>

							</Col>

							<Col>

								<Form.Group className="mb-5 flex-fill" controlId="Phone">
										<Form.Label>Phone Number</Form.Label>
										<Form.Control type="tel" placeholder="Enter email" />
								</Form.Group>
							</Col>

						</Row>

						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5" controlID="League">
									<Form.Label>League</Form.Label>
									<Form.Select aria-label="Default select example">
										<option value=""></option>
										<option value="1">To be added </option>
									</Form.Select>
								</Form.Group>

							</Col>

							<Col>
								<Form.Group className="mb-5" controlID="Division">
									<Form.Label>Division</Form.Label>
									<Form.Select aria-label="Default select example">
										<option value=""></option>
										<option value="1">To be added </option>
									</Form.Select>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="mb-5" controlID="Team">
									<Form.Label>Team</Form.Label>
									<Form.Select aria-label="Default select example">
										<option value=""></option>
										<option value="1">To be added </option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>

						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5" controlId="CredNumber">
									<Form.Label>Credit Card Number</Form.Label>
									<Form.Control type="text" placeholder="Enter credit card number" />
								</Form.Group>

							</Col>

							<Col>
							<Form.Group className="mb-5 flex-fill" controlId="EXPdate">
										<Form.Label>Expriry Date </Form.Label>
										<Form.Control type="month" placeholder=""/>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="mb-5" controlId="CVV">
									<Form.Label>CVV</Form.Label>
									<Form.Control type="text" placeholder="Enter CVV" />
								</Form.Group>
							</Col>
						</Row>

						<Row className="mt-5 d-flex justify-content-center text-center">
							<Button variant="primary" type="submit" >
								Submit
							</Button>
						</Row>
						
					</Form>

				</Container>

			</Row>
		</Container>
	);
};

export default Register;