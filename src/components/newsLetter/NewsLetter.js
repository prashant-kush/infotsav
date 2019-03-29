import React from "react";
import email from "../../email2.png";
import "./newsLetter.css";
import Loader from "./../../components/loader/Loader.js";
import swal from 'sweetalert';
class NewsLetter extends React.Component
{
	constructor()
	{
		super();
		this.state=
					{
						emailInput:"",
						run:0,
						loading:"hidden"
					}
	}
	onSubmit=()=>
	{
		var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	 	if(this.state.emailInput.match(mailformat))
		{
				this.setState({loading:"visible"});
				return fetch("https://salty-fjord-26855.herokuapp.com/email",{
					method:"post",
					headers:{"Content-Type":"application/json"},
					body:JSON.stringify({email:this.state.emailInput})
				}).then((response)=>{
					const res=response.json();
					return res;
				}).then(data=>
				{
					this.setState({loading:"hidden"});
					if(data==="success")
					swal("Good job!", "Thanks for subscribing with INFOTSAV! We will get in touch with you soon", "success");
					else if(data==="failed")
						swal("Error!", "There is some error. Please try again later", "error");
					else if(data==="exists")
						swal("We Got You!", "Entered email ID already exists with us!", "info");
					else if(data==="invalid")
						swal("Invalid ID", "Please enter a valid Email ID", "error");
				}).catch(err=>{
					this.setState({loading:"hidden"});
					swal("Error!", "There is some error. Please try again later", "error");});
		}
		else
			swal("Invalid ID", "Please enter a valid Email ID", "error");
	}



		render()
		{
			if(this.state.run==!0)
			{
			
			const svg=document.getElementById("svg");
			const circle=document.getElementById("circle");
			 var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			 if(this.state.emailInput.match(mailformat))
			 {
			 	svg.classList.remove("checkmark1");
			 	svg.classList.add("checkmark");
			 	circle.classList.remove("checkmark__circle1");
			 	circle.classList.add("checkmark__circle");

			 	//RELOADING THE ELEMENT

			 	var elm = svg;
				var newone = elm.cloneNode(true);
				newone.onclick=this.onSubmit;
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
					newone.onclick=this.onSubmit;
					elm.parentNode.replaceChild(newone, elm);
				  }
				}

		return(
			<div>
				<Loader visibility={this.state.loading} />
				<div className="news">
					<div className="message">
						<p className="newsletter">We'll be here soon with a newer version of INFOTSAV, subscribe to be notified.</p>
					</div>
					<div className="input_field">
						<img src={email} alt="email_svg" className="email_png"/>
						<input type="text" placeholder="Enter your email here" className="input_box" id="input" onChange={()=>{
							this.setState({emailInput:document.getElementById("input").value,run:1});
							document.getElementById("input").value=document.getElementById("input").value.toLowerCase();
						}} />
						<svg className="checkmark1" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"
							onClick={this.onSubmit}><circle className="checkmark__circle1" id="circle" cx="26" cy="26" r="25" fill="none"
							/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
						</svg>
					</div>
				</div>
			</div>
			);
		}
}

export default NewsLetter;