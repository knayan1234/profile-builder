import React, { useState } from "react";
import user_data from './user_data.json';
import {Link} from "react-router-dom";


const Education=()=>{
//   const [data,setData]=useState({course:"",college:"",date:"",loc:""});
//      const change=(e)=>{     
//         setData({ ...data, [e.target.name]: e.target.value });      
//      };
//      const check=(e)=>{
//         e.preventDefault();
//         console.log(data);
//      };
    return(
       <div>
        <div className="d-flex justify-content-center">
          <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
           <center><h1 className="text-center pt-3 text-primary h2 pb-5"><u>Education Details</u></h1></center> 
        <form>
           <div class="form-group">
                <label for="formGroupExampleInput">Course Name</label>
                <input type="text" name="course" class="form-control" id="formGroupExampleInput" value={user_data.course}/>
           </div>
           <div class="form-group">
                <label for="formGroupExampleInput">College Name</label>
                <input type="text" name="college" class="form-control" id="formGroupExampleInput" value={user_data.college}/>
           </div>
           <div class="form-group">
                <label for="formGroupExampleInput">Passout Year</label>
                <input type="text" name="college" class="form-control" id="formGroupExampleInput" value={user_data.passout}/>
           </div>
          
           
            <div class="form-group">
                <label for="formGroupExampleInput">Location</label>
                <input type="text" name="loc" class="form-control" id="formGroupExampleInput" value={user_data.clg_loc} />
           </div>
           <div className="text-center">
               <Link to='/project'><button class="btn btn-primary" type="submit">Back</button></Link>&nbsp;
           
                <button class="btn btn-primary" type="submit">Next</button>
            </div>
          </form> 
          </div>
        </div>
     </div>
    );
};
export default Education;