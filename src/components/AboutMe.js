
// import { useState } from "react";
import React from "react";
import user_data from './user_data.json';

const AboutMe=()=>{

    // const add=(e)=>{
    //  e.preventDefault();
    // //  console.log(about);
    // };

//     return (
        
//         <div className="container py-3 my-3">
//             <form  className="mb-3" >
            
            
//              Name:-<input name="name" class="form-control form-control-lg" type="text" value={user_data.name}/><br></br><p></p>
//              Professional Summary :- <textarea class="form-control form-control-lg" name="prof" value={user_data.prof}/> <br></br><p></p>
//              Loaction:-<input class="form-control form-control-lg"  name="location" value={user_data.loc} /><br></br><p></p>

// import { useState } from "react";
// import React from "react";

// const AboutMe=()=>{

//     const[about,setAbout]=useState({name:'',prof:'',location:''});
    

//     const handleOnChange=(e)=>{
//         console.log("onchange");
//         console.log(about.name);
//         setAbout({...about,[e.target.name]:[e.target.value]});
//         // console.log(about);
//     };

//     const add=(e)=>{
//      e.preventDefault();
//      console.log(about);
//     };


    return (

        <div className="container py-3 my-3">
            <form  className="mb-3" >
             Name:-<input name="name" class="form-control form-control-lg" type="text" placeholder="Enter Your Name" value={user_data.name}  /><br></br><p></p>
             Professional Summary :- <textarea class="form-control form-control-lg" name="prof" placeholder="Write summary here" value={user_data.prof}/> <br></br><p></p>
             Loaction:-<input class="form-control form-control-lg"  name="location"  placeholder="" value={user_data.location}  /><br></br><p></p>
            <div className="mb-3">
            <label for="formFile" className="form-label"></label>
            Profile Pic:-<input className="form-control  form-control-lg" type="file" id="formFileLg" />

            <input className="form-control my-3 py-2" type='submit' value='Register'/>
            </div>

            </form>
        </div>
        
            // <p>Hi</p>
    );

};

export default AboutMe;
