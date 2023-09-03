import { useState } from 'react';
import './App.css'

function App() {

  /**
   * {
   *    show: false/true,
   *    msg : "Error message..."
   * }
   */
  const [error, setError] = useState(null)

  const handleForm = (xyz) => {
    xyz.preventDefault();
    let form = xyz.target;
    let formData = new FormData(form)
    let formDataObj = Object.fromEntries(formData.entries())
    if(formDataObj.email.length == 0) {
      let obj = {
        show: true,
        msg: "Email field is required..."
      }
      setError(obj)
      return;
    }
    if(formDataObj.fullname.length == 0) {
      let obj = {
        show: true,
        msg: "Fullname field is required..."
      }
      setError(obj)
      return;
    }

    console.log(JSON.stringify(formDataObj))


   }

   function handleFormFields(e) {
    
   }


  return (
    <>
      <h1>Signup Form</h1>
      <form onSubmit={handleForm}>
          <div>
            <label>Fullname: </label>
            <input type="text" placeholder='Enter your name...' name="fullname" onChange={handleFormFields}/>
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder='Enter your email...' name="email" onChange={handleFormFields}/>
          </div>
          <div>
            <label>Gender: </label>
            <input type="radio" name="gender" value="male"/> Male
            <input type="radio" name="gender" value="female"/> Female
          </div>
          <div>
            <label>Country: </label>
            <select name="country">
              <option value="">Select...</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
      </form>
      { error?.show ? <div className='error'>{error?.msg}</div> : ""}
    </>
  );
  
}

export default App