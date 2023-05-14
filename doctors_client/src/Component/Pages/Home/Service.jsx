import React, { useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Service_card from './Service_card';
import Loadingbtn from '../Shared/Loading';

const Services = () => {
    const [load,setLoad]=useState(false);
    const [data,setData]=useState([]);
    
   
    useEffect(()=>{
        fetch('https://doctor-server-beryl.vercel.app/Services')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const navitgation2=useNavigation();
    if(navitgation2.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
    return (
        <div className='py-16'>
            <div className='text-center'>
                <Link to="/"className='text-orange-400 font-bold text-2xl'>Service</Link>
                <h3 className='text-5xl font-extrabold'>Our Service Area</h3>
                <p className='p-5'>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which do not look even slightly believable. </p>
            </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 py-5'>
            {
                data.slice(0,load?6:3).map(index=><Service_card key={index._id} indexdata={index}></Service_card>)
            }
        </div>
        <div onClick={()=>setLoad(!load)}>
    {load?"":<div className='text-center my-10'>
       <button className="btn btn-outline btn-error">More Services</button></div>}  </div>
        </div> 
    );
};

export default Services;