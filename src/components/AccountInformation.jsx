const AccountInformation = ({register}) => {
  return (
    <div>
      <input placeholder="Username" {...register("username")}/>
      <input placeholder="Email" {...register("email")}/>
      <input placeholder="Password" type="password" {...register("password")}/>
    </div>
  )
}

export default AccountInformation
