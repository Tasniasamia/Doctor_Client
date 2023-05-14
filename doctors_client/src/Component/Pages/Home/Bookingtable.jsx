import React from 'react';

const Bookingtable = (props) => {
    
    const propsdata=props.indexdata;
    const deletefunction=(id)=>{
        fetch(`https://doctor-server-beryl.vercel.app/book/${id}`,{method:"DELETE"})
        .then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.deletedCount){
            const filterdata=(props.books).filter(index=>index._id!=id);
            props.setbook(filterdata);
        }})


    }
    // const updatedata=(id)=>{
    //     console.log(id);
    //     fetch(`http://localhost:8900/book/${id}`,{
    //         method:"PATCH",
    //         headers:{
    //             "content-type":"application/json"
    //         },
    //         body:JSON.stringify({status:"confrim"})
    //     }).then(res=>res.json()).then(data=>{console.log(data);
    //     if(data.modifiedCount>0){
    //         const filterdata=props.books.filter(index=>index._id!==id);
    //         const finddata=props.books.find(index=>index._id==id);
    //         finddata.status="Confrim";
    //         const newarray=[finddata,...filterdata];
    //         props.setbook(newarray);
    //     }
      
        
    //     })
           
    // }
    return (
  
              <tr>
        <th>
        <button className="btn btn-circle"onClick={()=>deletefunction(propsdata._id)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={propsdata.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
          {propsdata.name}
         
        </td>
        <td>{propsdata.title}</td>
        <td>{propsdata.email}</td>
        
            {propsdata.status==="confrim"?<td >Confrimed</td>: <td onClick={()=>props.updatedata(propsdata._id)}>Please Confrim</td>}
         
     
      </tr>
    
    );
};

export default Bookingtable;