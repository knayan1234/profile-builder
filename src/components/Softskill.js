import React, { useState , useEffect } from "react";
// import "./styles.css";
import axios from "axios";
import Select from "react-select";
// install 
 const Softskill =() => {
// React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState();
const [message, setMessage] = useState('');


  // Array of all options
  const optionList = [
    { value: "Adaptability", label: "Adaptability" },
    { value: "Artistic aptitude", label: "Artistic aptitude" },
    { value: "Creativity", label: "Creativity" },
    { value: "Critical thinking", label: "Critical thinking" },
    { value: "Flexibility", label: "Flexibility" },
    { value: "Innovation", label: "Innovation" },
    { value: "Problem-solving", label: "Problem-solving" },
    { value: "Logical thinking", label: "Logical thinking" },
    { value: "Presentation", label: "Presentation" },
    { value: "Public speaking", label: "Public speaking" },
    { value: "Verbal communication", label: "Verbal communication" },
    { value: "Writing skills", label: "Writing skills" },
    { value: "Networking", label: "Networking" },
    { value: "Persuasion", label: "Persuasion" },
    { value: "Interpersonal skills", label: "Interpersonal skills" },
    { value: "Teamwork", label: "Teamwork" },
    { value: "Multitasking", label: "Multitasking" },
    { value: "Time management", label: "Time management" },
    { value: "Punctuality", label: "Punctuality" }

];

//to get value
const handleChange = event => {
    setSelectedOptions(event.target.value);
    console.log(event.target.value);
  };
     

 //console.log(selectedOptions.value);

// Function triggered on selection
function handleSelect(data) {
    setSelectedOptions(data);
}

  const getValueforhard = () => {
    
  }
  return (
      <div>
      <h2>Choose your soft-skill</h2>
      <div>
        <Select
          options={optionList}
          placeholder="Select minimum five skill"
          value={selectedOptions}
          onChange={handleChange}
          isSearchable={true}
          isMulti
        />
      </div>
      <input type="submit" value="Continue" onClick={getValueforhard}/>
    </div>
  );
}
      
export default  Softskill;