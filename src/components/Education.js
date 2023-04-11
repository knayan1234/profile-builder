import React, { useState } from "react";


const Education=()=>{

   
    const [data,setData]=useState({course:"",college:"",date:"",loc:""});

     const change=(e)=>{
       
        setData({ ...data, [e.target.name]: e.target.value });

       
     };

     const check=(e)=>{
        e.preventDefault();
        console.log(data);
     };
    return(
       <div>
        <div className="d-flex justify-content-center">
          <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
           <center><h1 className="text-center pt-3 text-primary h2 pb-5"><u>Education Details</u></h1></center> 
        <form onSubmit={check}>
           <div class="form-group">
                <label for="formGroupExampleInput">Course Name</label>
                <input type="text" name="course" class="form-control" id="formGroupExampleInput" placeholder="Enter Course Name" onChange={change}/>
           </div>
           <div class="form-group">
                <label for="formGroupExampleInput">College Name</label>
                <input type="text" name="college" class="form-control" id="formGroupExampleInput" placeholder="Enter College Name" onChange={change}/>
           </div>
          
           <label for="formGroupExampleInput">Passout Year : &nbsp;</label>
            <select name="date"  className="form-group form-group-lg" onChange={change}>
            <option value=" ">select</option>

            
             <option value="2000">2000</option>
             <option value="2001">2001</option>
             <option value="2002">2002</option>
             <option value="2003">2003</option>
             <option value="2004">2004</option>
             <option value="2005">2005</option>
            </select>

           <div class="form-group">
                <label for="formGroupExampleInput">Location</label>
                <input type="text" name="loc" class="form-control" id="formGroupExampleInput" placeholder="Enter Location Details" onChange={change}/>
           </div>
           <div className="text-center">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form> 
          </div>
        </div>
     </div>
    );

};

export default Education;