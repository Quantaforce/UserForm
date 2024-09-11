const PersonalDetails = ({register}) => {
  return (
    <div className="flex flex-col ">
      <div className="flex">
        <select className="" {...register('title')}>
          <option value="" selected disabled={true}>Title</option>
          <option value="Mr.">Mr.</option>
          <option value="M/s">M/s</option>
          <option value="Mrs.">Mrs.</option>
        </select>
        <input className="w-full" placeholder="First Name" {...register("firstname",{required:true})}/>
      </div>
      <div>
        <input className="w-full" placeholder="Last Name" {...register("lastname",{required:true})}/>
      </div>
      <div >
        <input className="w-full" type="number" placeholder="Phone no" {...register("phone",{required:true})}/>
      </div>

    </div>
  )
}

export default PersonalDetails
