import React from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';

const Eachtrans = (props) => {
    const deleteIt=(id)=>{
        props.onSelect(id);
    }
    return (<p className='record'>{props.text} <span style={props.style}>₹ {props.amount}</span> <button onClick={()=>{deleteIt(props.id)}}><DangerousIcon/></button></p>)

}

export default Eachtrans