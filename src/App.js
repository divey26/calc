import React,{useState} from 'react';
import './App.css';

function App() {
const[datebirth,setDatebirth]=useState('');
const [age, setAge] = useState(null);


const handleSubmit=(e)=>{
  e.preventDefault();
  var age=calculateAge(datebirth)
  setAge(age)

}

  const calculateAge=(birthDate)=> {
  var birthDateTemp = new Date(birthDate);
  var currentDate = new Date();
  var difference = currentDate - birthDateTemp;
  var ageDate = new Date(difference); 
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  return age;
}
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
                   <div className='label'><h1>Age Calculator</h1></div> 
                    <div >
                        <label htmlFor="dateOfBirthInput">Enter Your Date of Birth</label>
                        <br/>
                        <br/>

                        <input type="date" id="dateInput"className='form-control-new'
                            value={datebirth} onChange={(e) => setDatebirth(e.target.value)} />
                    </div>

                   
                    <button className='btnw btn1' type="submit">Submit</button>                
                </form>
                <div className='background2'>
                    <h3>Your age is: {age} years old</h3>
                </div>
    </div>
  );
}

export default App;
