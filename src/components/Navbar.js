import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
	return (
		<div className="container">
			<div className="row">
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="#">Nathan Barquin</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#experience">Experience</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}
