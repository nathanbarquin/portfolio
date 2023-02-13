import React from "react";
import { blurbs } from "../data";

export default function Blurbs() {
  return (
	<section id="blurbs">
		<div className="container">
			<div className="row">
				{blurbs.map((blurb, i) => (
					
					<div className="col-12 col-md-4">
						<p className="">{blurb.quote}</p>
					</div>
				))}
			</div>
		</div>
	</section>
  );
}
