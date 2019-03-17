import React from "react";
import email from "../../email2.png";
import "./newsLetter.css";
class NewsLetter extends React.Component
{
	constructor()
	{
		super();
		this.state=
					{
						emailInput:"",
						run:0
					}
	}


		render()
		{
			if(this.state.run==!0)
			{
			
		const svg=document.getElementById("svg");
			const circle=document.getElementById("circle");
			 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			 if(this.state.emailInput.match(mailformat))
			 {
			 	svg.classList.remove("checkmark1");
			 	svg.classList.add("checkmark");
			 	circle.classList.remove("checkmark__circle1");
			 	circle.classList.add("checkmark__circle");

			 	//RELOADING THE ELEMENT

			 	var elm = svg;
				var newone = elm.cloneNode(true);
				elm.parentNode.replaceChild(newone, elm);
			 }
			 else
				{
				   svg.classList.remove("checkmark");
				    svg.classList.add("checkmark1");
				    circle.classList.remove("checkmark__circle");
				   circle.classList.add("checkmark__circle1");

				 //RELOADING THE ELEMENT
						        
			      var elm = svg;
					var newone = elm.cloneNode(true);
					elm.parentNode.replaceChild(newone, elm);
				  }
				}

		return(
				<div>
					<div>
						<p className="newsletter">We'll be here soon with a newer version of INFOTSAV, subscribe to be notified.</p>
					</div>
					<div className="input_field">
						<img src={email} alt="email_svg" className="email_png"/>
						<input type="text" placeholder="Enter your email here" className="input_box" id="input" onChange={()=>{
							this.setState({emailInput:document.getElementById("input").value,run:1});
						}} />
						<svg class="checkmark1" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"
							><circle class="checkmark__circle1" id="circle" cx="26" cy="26" r="25" fill="none"
							/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
						</svg>
					</div>
				</div>
			);
		}
}

export default NewsLetter;