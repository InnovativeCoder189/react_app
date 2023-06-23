import React from "react";
class Lifeycle2 extends React.Component{
    constructor(){
        super();
        console.log("constructor has been initialised");

        this.state={
            count:80,
            heading:"hello world",
            heading1:"welcome to react"

        }
    }
    render(){
        // console.log("render method has been initialised");
    const {count}=this.state;
    const {heading}=this.state;
    const {heading1}=this.state;
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>this.setState({count: count+1})}>Increment</button><br />
            <h2>{heading}</h2>
            <button onClick={()=>this.setState({heading:"bye world"})}>change </button>
            <p>hi all we welcome you on {heading1}
            <button onClick={()=>this.setState({heading1:"bye react"})}>click</button>
            
            
            </p>


        </div>)
    }

}
//
export default Lifeycle2;

