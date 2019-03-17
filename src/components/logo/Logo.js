import React from "react";
import logo from "../../header.png";

const Logo=()=>
{
	const style=
				{
					width:"100px",
					height:"100px",
				}
	return(
		<div>
			<img src={logo} alt="logo" style={style} />
		</div>
		);
}
export default Logo;