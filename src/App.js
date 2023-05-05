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
    <div className='w-6/12 bg-indigo-100 flex justify-center items-center'>

      <form className='w-full p-8' onSubmit={submitHandler}>
      
        <label>First Name</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='text'
              placeholder='Enter first name'
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}/>
        
        <br></br><br></br>

        <label>Last Name</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='text'
              placeholder='Enter last name'
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}/>

        <br></br><br></br>
        
        <label>Email</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='email'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={changeHandler}/>    

        <br></br><br></br>
        
        <label htmlFor='country'>Country</label><br></br>  
        <select className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' name='country'
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
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='streetAddress'
              placeholder='1234 Main St'
              name='streetAddress'
              value={formData.streetAddress}
              onChange={changeHandler}/>    


        <br></br><br></br>
        
        <label>City</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='city'
              placeholder='Asanol'
              name='city'
              value={formData.city}
              onChange={changeHandler}/>    


        <br></br><br></br>
        
        <label>State / Province</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='state'
              placeholder='Delhi'
              name='state'
              value={formData.state}
              onChange={changeHandler}/>   


      <br></br><br></br>
        
        <label>Zip / Postal code</label><br></br>
        <input className='w-full rounded-md h-[3rem] outline-[0.2px] outline-blue-400 placeholder:px-3' type='zip'
              placeholder='713310'
              name='zip'
              value={formData.zip}
              onChange={changeHandler}/>   

       <br /> <br />

      <h3 className='font-semibold'>By Email</h3>
      <br></br>

      <span className='flex items-baseline gap-3 -mt-2 '>
          <input type='checkbox'
              id='comments'
              name='comments'
              onChange={changeHandler}
              checked={formData.comments}/>
         <span>
           <label htmlFor='comments'>Comments</label> 
           <p>Get notified when someones posts a comment on a posting.</p>
         </span>
      </span>  



      <span  className='flex items-baseline gap-3 pb-2'>
        <input type='checkbox'
          id='candidates'
          name='candidates'
          onChange={changeHandler}
          checked={formData.candidates}/>
        <span>
         <label htmlFor='candidates'>Candidates</label> 
         <p>Get notified when a candidate applies for a job.</p>
         </span>
      </span>  


      <span className='flex items-baseline gap-3 pb-2'>
         <input type='checkbox'
          id='offers'
          name='offers'
          onChange={changeHandler}
          checked={formData.offers}/>

          <span>
         <label htmlFor='offers'>Offers</label> 
         <p>Get notified when a candidate accepts or rejects an offer.</p>
         </span>
      </span>   


      <h3 className='font-semibold pt-2'>Push Notifications</h3>
      <p>These are delivered via SMS to your mobile phone.</p>

     <br /><br />

     <div className='-mt-6 flex gap-3'>
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='everything'
              value='everything'
              checked={formData.mode==='everything'}/>

      <label htmlFor='everything'>Everything</label>
      </div>

      <br /><br />

      <div className='flex gap-3 -mt-8'>
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='sameAsEmail'
              value='sameAsEmail'
              checked={formData.mode==='sameAsEmail'}/>

      <label htmlFor='sameAsEmail'>Same as Email</label>
      </div>

      <br /><br />

      <div  className='flex gap-3 -mt-8'>
      <input type='radio'
              onChange={changeHandler}
              name='mode'
              id='notifications'
              value='notifications'
              checked={formData.mode==='notifications'}/>

      <label htmlFor='notifications'>No push notifications</label>
      </div>

      <br /><br />
      <input type='submit' value='Save' className='bg-blue-500 text-white font-bold p-2 w-[4rem] rounded-md hover:bg-blue-700'/>

      </form>
    </div>
  );
}

export default App;
