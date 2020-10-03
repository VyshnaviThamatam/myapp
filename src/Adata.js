import React,{Component} from 'react';
import Jdata from './Jdata';

export default class Adata extends Component{
	render(){
		var sty={
			background:"blue",
			color:"#fff",
			padding:"1%",
			textAlign:"center"
		}
		return(
			<div>
			<h1 style={sty}>{this.props.name} is best friend of {this.props.bname}</h1>

			</div>);
	}
}