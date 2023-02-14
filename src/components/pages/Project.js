import React, { useState } from "react";
import Card from "react-bootstrap/Card";


function Project(props) {
	// This imports the information sent down form the array named projects in the Portfolio component for rendering  the project cards. It distributes the data onto the variable currentProject in order to divide out the data onto the card.
	const projectCard = useState(props)[0].projects;

	const name = projectCard.name;
	const description = projectCard.description;
	const image =  projectCard.image;
	const techs = projectCard.technologies;
	const appLink = projectCard.deployed;
	const gitLink = projectCard.github;

	// This function parses the information from the technologies array and creates a list of the technologies applied for each project for the card.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}
//the jsx return returns the card for each respective project which will then go back to the Portfolio component to be rendered in the portfolio return
	return (
		<Card style={{ width: "18rem" }}
        className="project-card">
			 <Card.Img
				variant="top"
				src={image}
                className="card-image"
                /> 
		
		
			<div className="center-page">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Applied Technologies</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} on Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;