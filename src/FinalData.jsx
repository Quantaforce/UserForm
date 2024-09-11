const FinalData = ({data}) => {

  return (
    <div className="text-left border-white">
      <span className="font-bold">Name: </span>{`${data.title } ${data.firstname } ${data.lastname}`}
      <div>
        <span className="font-bold">Phone: </span>{data.phone}
      </div>
      <div>
        <span className="font-bold">Username: </span>{data.username}
      </div>
      <div>
        <span className="font-bold">email: </span>{data.email}
      </div>
      <div>
        <span className="font-bold">address: </span>{`${data.aptno}, ${data.streetaddress}, ${data.city}-${data.pincode}`}
      </div>
      <div>
        <span className="font-bold">Card Number: </span>{data.cardno}
      </div>
      <div>
        <span className="font-bold">Card holdername: </span>{data.holdername}
      </div>
    </div>
    
  )
}

export default FinalData
