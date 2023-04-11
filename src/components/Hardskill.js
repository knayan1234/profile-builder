import React from "react";
import { useRef, useState } from 'react';



const Hardskill = () => {
    console.log('hardskills');


//     const inputRef = useRef("");
//   const [hardValues, sethardValues] = useState('');
//   const [arr, setArray] = useState([]);
// 

  
  //array push

    //to get value
//      const handleChange =(e) => {
//         // sethardValues(inputRef.current.value);
//         // setArray([...arr,e.target.value]);
// //


//     };
    // const handleClick=(e)=>{
    //     e.preventDefault();
    //     console.log(arr);
        
    // };

    // const add=(e)=>{
    //     setArray([...arr,e.target.value]);
    // };
const handleChange=(e)=>{
    // setArray([...arr,e.target.value]);
};

const add=(e)=>{
    e.preventDefault();
    setArray([...arr,e.skills]);
//    setArray([...arr," "]);
    // setArray([])
    
};
const submit=(e)=>{
    e.preventDefault();
    console.log(arr);
};
    return (
        <div>
            <h1>
                HardSkills

            </h1>
     
     <form onSubmit={submit}>
        <input type="text" name="skills" onChange={e=>handleChange} />
        <button type="button" onClick={add}>Add+</button>
        <button type="submit" >Submit</button>
     </form>
            {/* <form onSubmit={handleClick}>
                <input type='text'  id='hardskill'  onChange={handleChange}/>
                <button onClick={add}>Add+</button>

                <input type="submit" value="submit"/>

            </form> */}
            {/* <p>HardSkills : </p>
            <ul>
                {/* <li> {hardValues}</li> */}
                {/* </ul> } */}
             <div>

            </div>

         </div>

    );


};
export default Hardskill;


