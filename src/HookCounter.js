import React,{useState} from 'react';

function HookCounter(){
var initialcount=0
const [count,setcount]=useState(initialcount)

return(
	<div>
	count:{count}
	<button onClick={()=> setcount(initialcount)}>Reset</button>
	<button onClick={()=> setcount(count+1)}>Increment</button>
	<button onClick={()=> setcount(count-1)}>Dcerement</button>
	</div>);
}
export default HookCounter;