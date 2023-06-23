
import React, {useState} from 'react';
function FormHandle()
{
const[userDetails,setUserDetails]=useState({
    name:"",
    designation:"",
    rating:""
});
const [arr,setArr]=useState([]);
function handleChange(e){
  setUserDetails((prev)=>({...prev,[e.target.id]:e.target.value}));
  setArr((prev)=>([...prev,userDetails]));
}
function handleShow(){
  console.log(userDetails);
  console.log(arr);
}
  




return(
    <>
    <div>
            <h1>Feedback </h1>
    <form>

  <label>name</label>  <input type="text" id='name' onChange={handleChange} placeholder="enter name" /><br />
  <label>designation</label>  <input type="text" id='designation' onChange={handleChange} placeholder="designation" /> <br />
   <label>rating</label>  <input type="text" id='rating'  onChange={handleChange} placeholder="rating" /><br />
   <button type="button" placeholder="submit" onClick={handleShow}>Save</button>
     </form>
     </div>
    </>
)

}







export default FormHandle;