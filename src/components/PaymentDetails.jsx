const PaymentDetails = ({register}) => {
  return (
    <div>
      <input placeholder="Card No" {...register("cardno")}/>
      <input placeholder="Cardholder Name" {...register("holdername")}/>
      <input placeholder="expiry" {...register("expiry")}/>
      <input placeholder="cvv" {...register("cvv")}/>
    </div>
  )
}

export default PaymentDetails
