import React from "react"; 
class Rust extends React.Component{
    constructor(){
        super();
        this.state={
            count:34
        }
    }
        render()
        {
            console.log("render method has been initialised")
            const {count}=this.state;
            return(
                <div>
                    <h1>{count}</h1>
                    </div>
            )
    
        }
    }
    
    export default Rust;
    