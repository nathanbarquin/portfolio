import React from 'react';
import Logo from '../img/headshot.png';

function About() {
  return (
  	<section id="about">
      <div className="container">
        <div className="row">
			<div className="col-md">
				<img src={Logo} alt="Nathan Barquin Logo" width="366" height="366" />
			</div>
			<div className="col-md">
				<h1>
					Hi, I'm Nathan.
				<br className="hidden" />a <span className="c-js-word_cycle">front-end web developer</span>.
				</h1>
				<p>
				I enjoy learning new technologies and finding ways to incorporate them in new projects, as well as building and integrating web components that enhance user experiences.
				</p>

				<div>
					<button>Contact me</button>
				</div>
        	</div>
        </div>
      </div>
    </section>)
}
export default About;
