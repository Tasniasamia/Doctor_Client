import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { authdataall } from '../Shared/AuthProvider';
import Loadingbtn from '../Shared/Loading';

const Booking = () => {
    const loaddata=useLoaderData();
    const{img,title,service_id,_id}=loaddata;
    const receivedata=useContext(authdataall)
    const navitgation2=useNavigation();
    if(navitgation2.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
   
   
    const getdata=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const date=event.target.date.value;
        const price=event.target.price.value;
const user={
    name,email,date,price,img,title,service_id
}
fetch('https://doctor-server-beryl.vercel.app/book',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(user)
}).then(res=>res.json()).then(data=>console.log(data))
    }
    return (
        <div className='my-20'>
        <h2 className='text-xl text-center font-bold'>Book Service:{loaddata.title}</h2>






<form className="grid md:grid-cols-2 grid-cols-1 gap-6 my-10"onSubmit={getdata}>



<div className="form-control  w-full">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" placeholder="Name"name='name' className="input input-bordered"defaultValue={receivedata?.user?.displayName} />
</div>



<div className="form-control l w-full">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="text" placeholder="email"name='email' className="input input-bordered"defaultValue={receivedata?.user?.email} />
</div>












<div className="form-control  w-full">
<label className="label">
<span className="label-text">Date</span>
</label>
<input type="date" placeholder="date"name="date" className="input input-bordered" />

</div>
<div className="form-control  w-full">
<label className="label">
<span className="label-text">Price</span>
</label>
<input type="text" placeholder="price"name="price" className="input input-bordered"defaultValue={loaddata?.price} />

</div>

<div className="form-control mt-6 col-span-2">
<button className="btn btn-primary block">Order Confrim</button>
</div>
</form>

</div>



    );
};

export default Booking;