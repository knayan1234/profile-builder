import React from "react";
// import {useState} from "react";
// import project_data from './project_data.json';
import user_data from './user_data.json';
import {Link} from "react-router-dom";

const Project=()=>{
//  const [content,setContent]=useState([{title:"",description:"",skills:""}]);
    // const add=(e)=>{
    //     e.preventDefault();      
        // content.map((val,i)=>
        // {
        // console.log(val.title);
        // console.log(val.description);
        // console.log(val.skills);
       
        // });      
//         setContent([{title:"",description:"",skills:""}]);
        
    // };
//     const new_field=()=>{
       
//         setContent([...content,{title:"",description:"",skills:""}]);

//     };
//  const change=(e,i)=>{
//     const {name,value}=e.target;
//     const onChangeValue=[...content];
//     onChangeValue[i][name]=value;
//     setContent(onChangeValue);
   
//  };
   return(
        <div>
            
             <div className="d-flex justify-content-center">
             <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
           <center><h1 className="text-center pt-3 text-primary h2 pb-5"><u>Project Details</u></h1></center>
         <form >      
            {/* { */}
                {/* // content.map((val,i)=> */}
                <div>

              <hr /> 
              
              {/* <p><u>{" Entry -"+ (i+1)}</u></p> */}
             <div class="form-group">
                <label for="formGroupExampleInput">Project Title</label>
                <input type="text" name="title" value={user_data.project_title}  class="form-control" id="formGroupExampleInput"/>
            </div>

          <div class="form-group">
              <label for="exampleFormControlTextarea1">Project Description</label>
              <textarea class="form-control" name="description" value={user_data.project_description} id="exampleFormControlTextarea1" rows="5" ></textarea>
           </div>
              
           <div class="form-group">
            <label for="formGroupExampleInput">Tech Skills Used</label>
            <input type="text" name="skills" value={user_data.skills}  class="form-control" id="formGroupExampleInput" />
          </div>
               </div>

          {/* //  ) */}
            {/* } */}
            <div className="text-center">
             {/* <button class="btn btn-primary" type="button" onClick={new_field}>Add Another Entry</button>&nbsp; */}
             <Link to='/aboutme'><button class="btn btn-primary" type="submit">Back</button></Link>&nbsp;
             <Link to='/education'> <button class="btn btn-primary" type="submit">Next</button></Link>
            </div>
        </form>
        </div>
        </div>
        </div>

        // <div>
        //    Name:{project_data.project_name}
        //    Description:{project_data.project_description}
        //    Skills:{project_data.skills}
        // </div>
       
    );

};

export default Project;