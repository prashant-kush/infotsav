import React from "react";
import "./timer.css";

class Timer extends React.Component
{	
	constructor()
	{
		super();
		this.state={
			days:'',
			hours:'',
			minutes:'',
			seconds:''
		}
	}
	createEmptyProgressBar=(id,color)=>
	{
		const can=document.getElementById(id),
				  c=can.getContext('2d'),
				  posx=can.width/2,
				  posy=can.height/2;
	  	c.lineCap='round';
	  	c.beginPath();
	  	c.arc( posx, posy, posx-10, (Math.PI/180) * 270 , (Math.PI/180) * (270 + 360) );
	  	c.strokeStyle = color;
      	c.lineWidth = '12';
      	c.stroke();
	}
	fillProgressBar=(id,time,parts,colorEmpty,colorFill)=>
	{
		const can=document.getElementById(id),
				  c=can.getContext('2d'),
				  posx=can.width/2,
				  posy=can.height/2;
	  	c.lineCap='round';
		c.beginPath();
      		c.strokeStyle = colorFill;
     	 	c.lineWidth = '15';
      		c.arc( posx, posy, posx-40, (Math.PI/180) * 270, (Math.PI/180) * (270 + ((360/parts)*(parts-1-time))) );
      		c.stroke();
      		if(time===parts-1)
      		{
      			c.clearRect( 0, 0, can.width, can.height );
      			this.createEmptyProgressBar(id,colorEmpty);

      		}
	}
	componentDidMount()
	{
		//for timer

		const targetTime= new Date("Feb 7, 2020 00:00:00").getTime();

		//for circular empty progress bar

		this.createEmptyProgressBar("canvas_seconds","#231A04");
		this.createEmptyProgressBar("canvas_minutes","#2D0B14");
		this.createEmptyProgressBar("canvas_hours","#0D2424");
		this.createEmptyProgressBar("canvas_days","#151F04");


      	//changing time and progress

		this.timer=setInterval(function(){

			//for changing time

			const now = new Date().getTime();
		    const distance= targetTime-now;
			const days=Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds=Math.floor((distance % (1000 * 60)) / 1000);
			this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds});

			//for filling progress bar

			this.fillProgressBar("canvas_seconds",this.state.seconds,60,"#231A04","#FF8000");
			this.fillProgressBar("canvas_minutes",this.state.minutes,60,"#2D0B14","#FE0D69");
			this.fillProgressBar("canvas_hours",this.state.hours,24,"#0D2424","#2ED1DC");
			this.fillProgressBar("canvas_days",this.state.days,340,"#151F04","#B4FD00");




		}.bind(this),1000);
	}
	componentWillUnmount()
	{
		clearInterval(this.timer);
	}
	render()
	{
		
		
		return(
			<div className="timer" >
				
					<div class="canvas-wrap">
					  <canvas id="canvas_days" className="canvas" width="250" height="250" ></canvas>
					  <span id="procent">{this.state.days}<br/>Days</span>
					</div>
				
					<div class="canvas-wrap">
					  <canvas id="canvas_hours" className="canvas" width="250" height="250" ></canvas>
					  <span id="procent">{this.state.hours}<br/>Hours</span>
					</div>
				
			
					<div class="canvas-wrap">
					  <canvas id="canvas_minutes" className="canvas" width="250" height="250"  ></canvas>
					  <span id="procent">{this.state.minutes}<br/>Min</span>
					</div>
				
				
					<div class="canvas-wrap">
					  <canvas id="canvas_seconds" className="canvas" width="250" height="250" ></canvas>
					  <span id="procent">{this.state.seconds}<br/>Sec</span>
					</div>
				
			</div>
			);
	}
}
export default Timer;