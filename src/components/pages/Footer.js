import React from "react";

function Footer() {
	return (
		<footer className="footer d-flex">
			<div >
				<a
					href="https://github.com/Kubikubiessa"
					target="blank"
					rel="noopener"
					className="footer-link">
				
					<img
						src={require("../../assets/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div className="footer-link">
				<a
					href="https://www.linkedin.com/in/heidrun-kubiessa-ph-d-98110324a"
					target="blank"
					rel="noopener"
				>
					<img
						src={require("../../assets/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div className="footer-link">
				<a
					href="https://twitter.com/kubikubiessa1"
					target="blank"
					rel="noopener"
				>
					<img
						src={require("../../assets/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;