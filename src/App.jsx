import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import { useForm } from 'react-hook-form'
import AccountInformation from './components/AccountInformation';
import AddressDetails from './components/AddressDetails';
import PaymentDetails from './components/PaymentDetails';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import FinalData from './FinalData';
const schema1=z.object({
  firstname:z.string().min(1,{message:'first name is required'}),
  lastname:z.string().min(1,{message:'last name is required'}),
  phone:z.coerce.number().min(6,{message:'phone no is required '}),
})
const schema2=z.object({
  username:z.string().min(1,{message:'username is required'}),
  email:z.string().email({message:'valid email is required'}),
  password:z.string().min(7,{message:'password should be min 6 letters'}),

})
const schema3=z.object({
  streetaddress:z.string().min(1,{message:'street address is required'}),
  aptno:z.string().min(1,{message:'apt no is required'}),
  city:z.string().min(1,{message:'city is required'}),
  country:z.string().min(1,{message:'country is required'}),
  pincode:z.coerce.number().min(1,{message:'pincode is required'}),
})
const schema4=z.object({
  cardno:z.coerce.number().min(1,{message:'card no is required to be of length 16'}),
  holdername:z.string().min(1,{message:'chardholder name is required'}),
  expiry:z.coerce.number().min(1,{message:'expiry is required '}),
  cvv:z.coerce.number().min(1,{message:'cvv is required'}).max(3,{message:'cvv cannot be greater than 3'}),

})
const schema=[schema1,schema2,schema3,schema4];
function App() {
  const [formData,setFromData]=useState({});
  const [step, setStep] = useState(0);
  const {register,getValues,formState:{errors},trigger}=useForm({
    resolver:zodResolver(schema[step]),
    mode:'onChange'
  });
  const steps=[
    "Personal Details",
    "Account Information",
    "Address Details",
    "Payment Details"
  ]
  const showStep=()=>{
      switch (step) {
      case 0:
        return <PersonalDetails register={register}/> ;
      case 1:
        return <AccountInformation register={register}/> 
      case 2:
        return <AddressDetails register={register}/> 
      case 3:
        return <PaymentDetails register={register}/> 
      default:
        return <div></div>
    }
  }
  const next=async()=>{
    const valid=await trigger();
    console.log(errors);
    if(valid){
      setStep(step+1);
      setFromData({
        ...formData,
        ...getValues()
      })
    }
  }
  if(step==4){

      return (
        <div className='h-full w-full flex justify-center items-center'>
          <FinalData data={formData}/> 
      </div>
      )
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
      <div className='max-w-[400px] '>
        <h1>{steps[step]}</h1>
        {showStep()}
        <div>
          <button onClick={()=>{setStep(step-1)}} className={`${step==0?'bg-gray-300 text-gray-500 hover:cursor-not-allowed':'bg-blue-500 hover:cursor-pointer'} m-3 px-3 py-2 rounded`} disabled={step==0?true:false}>Prev</button>
          {step<3 
            ?
          <button className={`${step==3?'bg-gray-300 text-gray-500 hover:cursor-not-allowed':'bg-blue-500 hover:cursor-pointer'} px-3 py-2 rounded m-3`}  onClick={()=>{next()}} disabled={step==3?true:false}>Next</button>
            :
          <button onClick={()=>{next()}} className={`bg-green-500 px-3 py-2 rounded m-3`} >Submit</button>
        }
        </div>
      </div>
      {
        Object.keys(errors).map((key,idx)=>{
          return <p className='bg-red-800 my-0.5 px-4 py-1 w-[300px] rounded-sm' key={idx}>
            {errors[key].message}
          </p>
        })
      }
    </div>
    
  )
}

export default App
