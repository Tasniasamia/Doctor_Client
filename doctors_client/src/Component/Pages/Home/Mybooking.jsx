import React, { useContext, useEffect, useState } from 'react';
import { authdataall } from '../Shared/AuthProvider';
import Bookingtable from './Bookingtable';
import { useNavigate } from 'react-router-dom';

const Mybooking = () => {
    const navigate=useNavigate();
   const[book,setBook]=useState([])
    const receivedata=useContext(authdataall);
    useEffect(()=>{
        fetch(`https://doctor-server-beryl.vercel.app/book?email=${receivedata.user.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearers ${localStorage.getItem('doctor-token')}`
            }
        })
        .then(res=>res.json())
    .then(data=>{console.log(data);
        if(!data.error){
            setBook(data);
        }
        else{
            receivedata.logout();
            navigate('/')
        }
      
   })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigate])
    console.log(book);

    const updatedata=(id)=>{
        console.log(id);
        fetch(`https://doctor-server-beryl.vercel.app/book/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status:"confrim"})
        }).then(res=>res.json()).then(data=>{console.log(data);
        if(data.modifiedCount>0){
            const filterdata=book.filter(index=>index._id!==id);
            const finddata=book.find(index=>index._id==id);
            finddata.status="confrim";
            const newarray=[finddata,...filterdata];
            setBook(newarray);
        }
      
        
        })
           
    }
    return (

        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          Remove
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
book.map(index=><Bookingtable key={index._id} indexdata={index} books={book}setbook={setBook}updatedata={updatedata}></Bookingtable>)
      }
    
      
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
    );
};

export default Mybooking;