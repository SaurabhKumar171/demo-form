 import { useState } from 'react';
import './App.css';
  

function App() {
  const[formData , setFormData] = useState({
                                         firstName:"",lastName:"",email:"",country:"",streetAddress:"",city:"",state:"",zip:"",comments:false,candidates:false,offers:false,mode:""
                                                 });
  console.log(formData);
        function changeHandler(event){
              const {name,value,type,checked} = event.target;

              setFormData( (prevData)=>{ 
               return {
                ...prevData,
                [name]:type==='checkbox'? checked: value
               }
           });
        }

        function submitHandler (event){
               event.preventDefault();

          console.log('Final data');
          console.log(formData);
        }
        

  return (
    <div className='w-5/12 bg-{black}	'>

      <form onSubmit={submitHandler}>
      
        <label>First Name</label><br></br>
        <input type='text'
              placeholder='Enter first name'
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}/>
        
        <br></br><br></br>

        <label>Last Name</label><br></br>
        <input type='text'
              placeholder='Enter last name'
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}/>

        <br></br><br></br>
        
        <label>Email</label><br></br>
        <input type='email'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={changeHandler}/>    

        <br></br><br></br>
        
        <label htmlFor='country'>Country</label><br></br>  
        <select name='country'
                id='country'
                value={formData.country}
                onChange={changeHandler}>

           <option value='india'>India</option>
           <option value='unitedStates'>United States</option>
           <option value='canada'>Canada</option>
           <option value='mexico'>Mexico</option>
        </select> 


        <br></br><br></br>
        
        <label>Street address</label><br></br>
        <input type='streetAddress'
              placeholder='1234 Main St'
              name='streetAddress'
              value={formData.streetAddress}
              onChange={changeHandler}/>    


        <br></br><br></br>
        
        <label>City</label><br></br>
        <input type='city'
              placeholder='Asanol'
              name='city'
              value={formData.city}
              onChange={changeHandler}/>    


        <br></br><br></br>
        
        <label>State / Province</label><br></br>
        <input type='state'
              placeholder='Delhi'
              name='state'
              value={formData.state}
              onChange={changeHandler}/>   


      <br></br><br></br>
        
        <label>Zip / Postal code</label><br></br>
        <input type='zip'
              placeholder='713310'
              name='zip'
              value={formData.zip}
              onChange={changeHandler}/>   

       <br /> <br />

      <h3>By Email</h3>
      <br></br>
      <input type='checkbox'
              id='comments'
              name='comments'
              onChange={changeHandler}
              checked={formData.comments}/>
      <span>
         <label htmlFor='comments'>Comments</label> 
         <p>Get notified when someones posts a comment on a posting.</p>
      </span>  


       <input type='checkbox'
         id='candidates'
         name='candidates'
         onChange={changeHandler}
         checked={formData.candidates}/>
      <span>
         <label htmlFor='candidates'>Candidates</label> 
         <p>Get notified when a candidate applies for a job.</p>
      </span>  

       <input type='checkbox'
          id='offers'
          name='offers'
          onChange={changeHandler}
          checked={formData.offers}/>
      <span>
         <label htmlFor='offers'>Offers</label> 
         <p>Get notified when a candidate accepts or rejects an offer.</p>
      </span>   


      <h3>Push Notifications</h3>
      <p>These are delivered via SMS to your mobile phone.</p>

     <br /><br />
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='everything'
              value='everything'
              checked={formData.mode==='everything'}/>

      <label htmlFor='everything'>Everything</label>

      <br /><br />
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='sameAsEmail'
              value='sameAsEmail'
              checked={formData.mode==='sameAsEmail'}/>

      <label htmlFor='sameAsEmail'>Same as Email</label>
     

      <br /><br />
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='notifications'
              value='notifications'
              checked={formData.mode==='notifications'}/>

      <label htmlFor='notifications'>No push notifications</label>


      <br /><br />
      <input type='submit' value='Submit' />

      </form>
    </div>
  );
}

export default App;
