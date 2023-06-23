import React from "react";
import { useState } from "react";
function Counter(){
        let [count,setCount]=useState(20);
        const [title,setTitle]=useState("welcome to react");
        const [books,setBooks]=useState({
            book:"rich dad poor dad",
            author:"james bond"

        });
        const [Arr,setArr]=useState([2,5,3,"hello","Bye","world"]);
        const [cars,setCars]=useState(["verna","i10","punch","safari"]);
        let[carName,setCarName]=useState(" ");

        
        
        function handleIncrease(){
            setCount(count++);
            
            console.log('hi',count);
        }
        function handleDecrease(){
            setCount(count--);
        }
        function handleChange(){
            setTitle("react is react on event ");
        }
        function handleGo(){
            console.log("change is initialised")
            setBooks({
                book:"Treasure Island",
                author:"rabindra nath tagore"}
                
            );
        }
        function handleChange1(event){
            console.log(event);

        }
        function handleArray()
        {
            console.log("new array is initialised");
            setArr=([2,34,"hello","bye"]);
        }
        function handleInputChange(event){
            setCarName=(event.target.value);
            // console.log(event.target.value);

        }
        function handleAddCar(){
            setCars((prev)=>([...prev,carName]));
            console.log({cars});
        }
        
        
        return(
        <>
        <h1>{cars.filter((ele)=>(<div>{ele}</div>))}</h1>
        <h1 onMouseOverCapture={handleChange}>{title}</h1>
        
        <button onClick ={handleIncrease}>+</button><br />
        <p>Count: {count}</p> <br />
        <button onClick ={handleDecrease}>-</button><br />
        <input type="text" placeholder="name" onChange={handleChange1} />
        
        <p>book is:{books.book}</p><br />author:{books.author}
        <button onClick={handleGo}><b>New</b></button><br/>
        <h1>input array is:{Arr.filter((ele)=>(<div>{ele}</div>))}</h1>
        <h1 onMouseDownCapture={handleArray}>{Arr}</h1>
        <input type="text" placeholder="enter car name" onChange={handleInputChange}  />enter cars

        <button onClick={handleAddCar}>Add Car</button>

        </>
        
        )
        
    }

export default Counter;