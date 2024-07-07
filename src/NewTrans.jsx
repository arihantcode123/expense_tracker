import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewTrans = (props) => {
    const [entry,setEntry]=useState({
        text:"",
        amount:0
    });
    
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setEntry((preValue)=>{
            return {
                ...preValue,
                [name]:value
        }})
    }
    const addNewnote=()=>{
        props.getdata(entry);
    }
  return (
    <>
        <h4 className='history_heading'>Add new transaction</h4>
        <hr></hr>
        <label for="text_input">Text</label>
        <br/>
        <input name="text" id="text_input" type="text" placeholder="Enter Text..." onChange={inputEvent}/>
        <br/>
        <label for="text_input">Amount ( +income,-expense )</label>
        <br/>
        <input name="amount" id="text_input" type="text" placeholder="Enter amount..." onChange={inputEvent}/>
        <br/>
        <br/>
        <button type="button" class="btn btn-primary" onClick={addNewnote}>Primary</button>
    </>
  )
}

export default NewTrans;