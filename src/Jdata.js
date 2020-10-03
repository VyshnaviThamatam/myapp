import React from 'react';
import './App.css';
import Data from './Data/data.json';
import {Link} from 'react-router-dom';

var Jdata=()=>{
	var info =Data.profiles;
	return(
		<section className="parent">
		{info.map((i,index)=>(
		<article className="child">
			<h2>{i.name}</h2>
			<p>{i.role}</p>
			<a style={{color:"red"}} href={"mailto:"+i.email}>{i.email}</a><br></br>
			<a href={"tell:"+i.phone}>{i.phone}</a><br></br>
			<Link>View Details</Link>

		</article>
			))}
		
		</section>
		);
}
export default Jdata;