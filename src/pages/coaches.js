import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardz from "./components/cardz";
import { useState } from 'react';
import Cmodal from "./components/cmodal";

const Coaches = () => {
	//figure out how to pass images later 
	const [show, setShow] = useState(false);
	const [name2, setName] = useState("");
	const [league2, setLeague] = useState("");

	const changeName =(input) => setName(input);
	const changeLeague = (input) => setLeague(input);

	

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const handleClick = (name, league) =>{
		handleShow();
		changeName(name);
		changeLeague(league);
	}
	return (

		<Container className=" mt-5 justify-content-center">
			<Row className="justify-content-center">
				<Col className="col-6">
				<h4 class="text-center">Meet some of the Coaches at ASC</h4>
				</Col>
			</Row>

			<Row className="mx-auto  justify-content-center mt-5">
				<Col className="d-flex  flex-column align-items-center justify-content-center">
					<Container className="mx-auto w-50 mb-5">
						<Cardz title="Coach 1" body="Head coach of league 1"  purpose={()=>{ handleClick("Coach 1", "League 1")}}/>
					</Container>
					
					<Container className="mx-auto w-50">
						<Cardz title="Coach 3" body="Head coach of league 3" purpose={()=>{ handleClick("Coach 3", "League 3")}}/>
					</Container>
				</Col>

				<Col className="d-flex flex-column align-items-center justify-content-space-evenly">
				<Container className="mx-auto w-75 mb-5">
						<Cardz title="Coach 2" body="Head coach of league 2" purpose={()=>{ handleClick("Coach 2", "League 2")}}/>
					</Container>
					
					<Container className="mx-auto w-75">
						<Cardz title="Coach 4" body="Head coach of league 4" purpose={()=>{ handleClick("Coach 4", "League 4")}}/>
					</Container>
				</Col>
			</Row>
			<Cmodal show2={show} onHide2={handleClose} name1={name2} league1={league2}/>
		</Container>
	);
};

export default Coaches;