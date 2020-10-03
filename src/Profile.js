import React,{Component} from 'react';
import './App.css';
import Data from './Data/data.json';

export default class Profile extends Component{
	render(){
		var indexValue=this.props.location.data.id;
		var eachdetails=Data.profiles[indexValue];
		return(
			<section>
			<h1 className="Skill">{eachdetails.name}</h1>
			<h1 className="Skill">{eachdetails.role}</h1>
			<h1 className="Skill">{eachdetails.phone}</h1>
			<h1 className="Skill">{eachdetails.email}</h1>
			</section>);
	}

}


// function Array_data(){
// 	let array=["vyshu","nani","sridevi","sri"]
// 	let array1=["nani","sridevi","sri","vyshu"]
// 	return(
// 	<div>
// 	{array.map((i,index)=>(
// 	<Adata name={i} bname={array1[index]}></Adata>
// 	))}
	
// 	</div>);
// }