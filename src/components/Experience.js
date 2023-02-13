import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Experience() {
	return (
		<section id="projects" className="container">
			<div className="">
				<div className="">
			
					<h2 className="">
						Experience
					</h2>
					<p className="">
					Below are just a small sampling of projects that I have been involved throughout my development career.
					</p>

					<span className="btn btn-info">Coding</span> <span className="btn btn-info">Version Control</span> <span className="btn btn-info">Libraries & Frameworks</span> <span className="btn btn-info">QA & Debugging</span> <span className="btn btn-info">UX</span> <span className="btn btn-info">Non-Technical</span>
				</div>
				<div className="row">
					{projects.map((project) => (
						<div className="project_container col-12 col-md-4">
							<div className="bg-light">
								<div className="header">
									<img
										alt="gallery"
										className=""
										src={project.image}
									/>
									<p>{project.title}</p>
									<span>{project.date}</span>
								</div>
								<div className="">
									<p>{project.subtitle}</p>
									<p>{project.description}</p>
								</div>
							</div>
							{project.skillCloud.map((type, index) => {
								return <span className="btn btn-dark" key={index}>{type}</span>
							})}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
