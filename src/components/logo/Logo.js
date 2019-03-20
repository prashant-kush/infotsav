import React from "react";
import logo from "../../infotsav-thor.png";
import "./Logo.css";

const Logo=()=>
{
	const style=
				{
					width:"1200px",
					height:"200px",
				}
	return(
		<div className="logo">
			<img src={logo} alt="logo" style={style}/>
		</div>
		);
}
export default Logo;