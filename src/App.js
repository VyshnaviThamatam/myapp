import React from 'react';
import './App.css';
import Profile from './Profile.js';
import Data from './Data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HookCounter from './HookCounter';

// export default class Statesexample extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"Vyshu"
//     };
//   }
// changeName=()=>{
//   this.setState({
//   name:"Vyshnavi Thamatam is a good girl"
//   });
// }
//   render(){
//     return(
//       <div>
//         <h1 className="Skill">{this.state.name}</h1>
//         <button type="button" onClick={this.changeName}>Change State</button>
//       </div>
//       );
//   }

// }

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      </BrowserRouter>
     )
  }
}
let Home=()=>{
  var info=Data.profiles;
  return(
  <section className="parent">
    {info.map((i,index)=>(<article className="child">
    <h2>{i.name}</h2>
    <p>{i.role}</p>
    <a style={{color:"red"}} href={"mailto:"+i.email}>{i.email}</a><br></br>
      <a href={"tell:"+i.phone}>{i.phone}</a><br></br>
      <Link to={{pathname:"/Profile",data:{id:index}}}>View Details</Link>

    </article>
      ))}
      <HookCounter />
    
    </section>
    )}
  

// const ChildComponent=(s)=>{
//   return(
//   <p>{s.name}</p>
//     )
//   }


// export default class Countexample extends React.Component{
// //   constructor(){
// //     super();
// //     this.state={
// //       count:0
// //     };
// //   }
// //  increment=()=>{
// //   this.setState({
// //   count:1
// //   });
// // }
// // decrement=()=>{
// //   this.setState({
// //   count:-1
// //   });
// // }
//   render(){
//     return(
//       <div>
//         <h1 className="Skill">{this.state.count}</h1>
//         // <button type="button" onClick={this.increment}>Increment</button>
//         // <button type="button" onClick={this.decrement}>Decrement</button>
//         <ChildComponent name="child1 of parent"/>
//         <Profile name="Profile Page"/>
//       </div>
//       );
//   }

// // }








// import ReactDOM from 'react-dom';

// ReactDOM.render(<p>Welcome to India</p>,document.getElementById('abc'));

// //stateless component
// var App=()=>{
//   return(
//     <div>
//     <h1 className="Skill">Welcome to React</h1>
//     </div>);

  
// }

// //state component
// class App1 extends React.Component{
//   render(){
//     return(
//       <div>
//       <App />
//       <Vyshu />
//       <h2 className="Skill">Good Morning Have a nice Day It is class component</h2>
//       <h2 style={{color:"red",textAlign:"center",textShadow:"5px 5px 5px green"}}>Good girl</h2>
//       </div>)
//   }
// }

// var Vyshu=()=>{
//   var style={
//     background:"#000",
//     color:"#fff",
//     textAlign:"center",
//     textShadow:"10px 10px 10px blue"

//   }
//   return(
//   <div><h3 style={style}>vyshu Component</h3></div>);
// }
// export default App1;