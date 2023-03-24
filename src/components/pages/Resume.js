import React from "react";

function Resume() {
	return (
		<section>
			<div className="page-center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/Heidrun Kubiessa Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div className="resume">
				<h4>Front-End Stack</h4>
				<ol>
					<li>HTML5</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>Bulma</li>
					<li>React</li>
					<li>Git</li> 
					<li>responsive design</li>
				</ol>
				<br></br>
				<h4>Back-End Stack</h4>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller</li>
					<li>REST</li>
					<li>Progressive Web Applications</li>
				</ol>
				<br></br>
				<h4>Dev Tool Experience</h4>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h4>Database Experience</h4>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
					<li>GraphQL</li>
				
				</ol>
			</div>
		</section>
	);
}

export default Resume;
