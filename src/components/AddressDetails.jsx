const AddressDetails = ({register}) => {
  return (
    <div>
      <input placeholder="Street address" {...register("streetaddress")}/>
      <input placeholder="Apt, suite, etc" {...register("aptno")}/>
      <input placeholder="city" {...register("city")}/>
      <input placeholder="country" {...register("country")}/>
      <input placeholder="pincode" {...register("pincode")}/>
    </div>
  )
}

export default AddressDetails
