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
  var birthDateObj = new Date(birthDate);
  var currentDate = new Date();
  var differenceMs = currentDate - birthDateObj;
  var ageDate = new Date(differenceMs); 
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  return age;
}
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
                    <h2>Age Calculator</h2>
                    <div className='mb-2'>
                        <label htmlFor="dateOfBirthInput">Enter Your Date of Birth</label>
                        <br>
                        </br>
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
