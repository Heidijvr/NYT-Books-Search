import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
} 

export default Jumbotron;

// import { Jumbotron } from 'reactstrap';


// function Jumbotron({ children }) {
//   return (
//     <h1 className="display-3">Hello, world!</h1>
//     <p className="lead">This is a simple Jumbotron-style component</p>
//     <p>
//       <Button color="primary">Learn More</Button>
//     </p>
//     <div
//       style={ { height: 300, clear: "both", paddingTop: 120, textAlign: "center" } }
//       className="jumbotron">
//       {children}
//     </div>
//   )
// }

// export default Jumbotron;


