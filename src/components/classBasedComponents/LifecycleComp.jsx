import React from "react";
class LifecycleComp extends React.Component{
    constructor(){
        super();

        console.log("constructor method is initialised");
        this.state={
            count:78,
            heading:"Welcome To React",
            heading2:"practising javascript in react"
        }
    }
    static getDerivedStateFromProps()
    {
        console.log("derived state has initialised");
        return null;

        }
        componentDidUpdate(prevProps,prevState){
            console.log("it is running");
        }
        getSnapshotBeforeUpdate(pevProps,prevState){
            console.log("get value");
            return null;
        }
        shouldComponentUpdate(){
            console.log("component initiated");
            return true;
           }
render(){
    console.log("render method ius called");
    const handleIncrease=()=>{
        this.setState({count:this.state.count-10})
       } 
       const handleChange=()=>
       {this.setState({
           heading:"React is basically react on raect change"})
   }
   console.log(this.state.heading);
      const handlePress=()=>
           {this.setState({
            heading2:"it is ver easy"
           })

           };
           
    return(
        <div>
            <h1>            {this.state.heading}
</h1><br />

<h2> {this.state.heading2}</h2><br />
            <p>current state of this event is {this.state.count}</p><br />
            <button onClick={handleIncrease}><h2>decrement</h2></button><br />
            <button onClick={handleChange}><h3>change</h3></button><br />
            <button onClick={handlePress}><h4>press it</h4></button>

        </div>

    )
    
}
}
export default LifecycleComp;