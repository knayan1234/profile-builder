import React from "react";
import {useState} from "react";

const Project=()=>{
 const [content,setContent]=useState([{title:"",description:"",skills:""}]);
    const add=(e)=>{
        e.preventDefault();      
        content.map((val,i)=>
        {
        console.log(val.title);
        console.log(val.description);
        console.log(val.skills);
       
        });      
        setContent([{title:"",description:"",skills:""}]);
        
    };
    const new_field=()=>{
       
        setContent([...content,{title:"",description:"",skills:""}]);

    };
 const change=(e,i)=>{
    const {name,value}=e.target;
    const onChangeValue=[...content];
    onChangeValue[i][name]=value;
    setContent(onChangeValue);
   
 };
   return(
        <div>
            
             <div className="d-flex justify-content-center">
             <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
           <center><h1 className="text-center pt-3 text-primary h2 pb-5"><u>Project Details</u></h1></center>
         <form onSubmit={add}>      
            {
                content.map((val,i)=>
                <div>

              <hr /> 
              
              <p><u>{" Entry -"+ (i+1)}</u></p>
             <div class="form-group">
                <label for="formGroupExampleInput">Project Title</label>
                <input type="text" name="title" value={val.title} onChange={(e)=>change(e,i)} class="form-control" id="formGroupExampleInput" placeholder="Enter Project Title" />
            </div>

          <div class="form-group">
             <label for="exampleFormControlTextarea1">Project Description</label>
             <textarea class="form-control" name="description" value={val.description} id="exampleFormControlTextarea1" rows="5" Placeholder=" Enter Project Description" onChange={(e)=>change(e,i)}></textarea>
          </div>
              
          <div class="form-group">
            <label for="formGroupExampleInput">Tech Skills Used</label>
            <input type="text" name="skills" value={val.skills} onChange={(e)=>change(e,i)} class="form-control" id="formGroupExampleInput" placeholder="Enter Tech Skills Used" />
          </div>
                </div>

                )
            }
            <div className="text-center">
             <button class="btn btn-primary" type="button" onClick={new_field}>Add Another Entry</button>&nbsp;
            <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
        </div>
        </div>
        </div>
       
    );

};

export default Project;