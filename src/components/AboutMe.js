
// import { useState } from "react";
import React from "react";
import user_data from './user_data.json';
import {Link} from "react-router-dom";
// import profilePic from "../photos/profilePic";

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
            <div className="d-flex justify-content-center">
          <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
           <center><h1 className="text-center pt-3 text-primary h2 pb-5"><u>Personal Details</u></h1></center> 
       
            <form  className="mb-3" >
             Name:-<input name="name" class="form-control form-control-lg" type="text" value={user_data.name}  /><br></br><p></p>
             Professional Summary :- <textarea class="form-control form-control-lg" name="prof"  value={user_data.prof}/> <br></br><p></p>
             Loaction:-<input class="form-control form-control-lg"  name="location"   value={user_data.loc}  /><br></br><p></p>
            <div className="mb-3">
            <label for="formFile" className="form-label"></label>
            <div>
                <img src={ user_data.profile_pic} />
            </div>
            {/* Profile Pic:-<textarea class="form-control form-control-lg" name="pic" value={user_data.profile_pic}/> <br></br><p></p> */}
            {/* <input className="form-control  form-control-lg" type="file" id="formFileLg" /> */}
            {/* <div className="container">
                <img src={profilePic} /> */}
                {/* <img src="https://www.bing.com/images/search?view=detailV2&ccid=n2tEJJZh&id=2DE54B42B5E89EFA1B4514C335938CEB3C421048&thid=OIP.n2tEJJZhEhzdL3KoYGdPmgHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f6b%2faa%2f98%2f6baa98cc1c3f4d76e989701746e322dd.png&exph=801&expw=800&q=Profile+Logo&simid=608021864691757820&FORM=IRPRST&ck=A80ABA086980690B386619D0B0FCCB18&selectedIndex=34" />  */}
            {/* </div> */}
            <div className="text-center">
           <Link to='/project'><button class="btn btn-primary" type="submit">Next</button></Link>
           </div>
            </div>

            </form>
        </div>
        </div>
        </div>
           
    );

};

export default AboutMe;
