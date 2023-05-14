import React from 'react';

const Carusal = () => {
    return (
        <div className="carousel w-full my-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/computer-with-covid19-illustration-screen-standing-desk-empty-office-room-during-global-pandemic-modern-hospital-room-equipped-with-professional-medical-instruments-virus-cell-image_482257-38407.jpg?w=1060&t=st=1683839064~exp=1683839664~hmac=664b13b129341b245c5cc9cee140da6f5773c02cff29ae4a14c3978c3c2506be" className="w-full" />
    <div className="absolute  h-full  right-0 bottom-0 w-full  md:space-y-7 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
      
   <h1 className='text-5xl font-extrabold text-white md:w-1/2 w-full'>There are many different medical services that doctors may offer. </h1>
   <p className='text-xl text-white w-full md:w-1/2'>These are the basic healthcare services that most people need on a regular basis, such as annual check-ups, vaccinations, and treatment of common illnesses like colds and flu</p>
   <div>
   <button className="btn bg-blue-900 text-white me-2">Discover More </button>
   
<button className="btn btn-outline btn-primary">Latest Project</button>
   </div>
    </div> 
    <div className="absolute flex justify-end transform -translate-y-1/2 right-0 bottom-0">
      <a href="#slide4" className="btn btn-circle me-2">❮</a> 
      <a href="#slide2" className="btn btn-circle me-2">❯</a>
    </div>
    </div>
 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/clinic-registration-counter-waiting-room-lobby-computer-make-checkup-appointments-with-healthcare-report-papers-empty-hospital-reception-desk-with-medical-forms-insurance-support_482257-50666.jpg?w=1060&t=st=1683839116~exp=1683839716~hmac=bc4167cdc0c6ab1317c72a79b5bc1b905c3815ebc27bea0445785e24c6d540a5" className="w-full" />
    <div className="absolute  h-full  right-0 bottom-0 w-full  md:space-y-7 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
      
      <h1 className='text-5xl font-extrabold text-white md:w-1/2 w-full'>There are many different medical services that doctors may offer. </h1>
      <p className='text-xl text-white w-full md:w-1/2'>These are the basic healthcare services that most people need on a regular basis, such as annual check-ups, vaccinations, and treatment of common illnesses like colds and flu</p>
      <div>
      <button className="btn bg-blue-900 text-white me-2">Discover More </button>
      
   <button className="btn btn-outline btn-primary">Latest Project</button>
      </div>
       </div> 
    <div className="absolute flex justify-end transform -translate-y-1/2 right-0 bottom-0">
      <a href="#slide1" className="btn btn-circle me-2">❮</a> 
      <a href="#slide3" className="btn btn-circle me-2">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/hospital-recovery-room-with-beds_258219-323.jpg?w=1380" className="w-full" />
    <div className="absolute  h-full  right-0 bottom-0 w-full  md:space-y-7 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
      
      <h1 className='text-5xl font-extrabold text-white md:w-1/2 w-full'>There are many different medical services that doctors may offer. </h1>
      <p className='text-xl text-white w-full md:w-1/2'>These are the basic healthcare services that most people need on a regular basis, such as annual check-ups, vaccinations, and treatment of common illnesses like colds and flu</p>
      <div>
      <button className="btn bg-blue-900 text-white me-2">Discover More </button>
      
   <button className="btn btn-outline btn-primary">Latest Project</button>
      </div>
       </div> 
    <div className="absolute flex justify-end transform -translate-y-1/2 right-0 bottom-0">
      <a href="#slide2" className="btn btn-circle me-2">❮</a> 
      <a href="#slide4" className="btn btn-circle me-2">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/long-hospital-corridor-with-empty-seats_117023-1679.jpg?w=1380" className="w-full" />
    <div className="absolute  h-full  right-0 bottom-0 w-full  md:space-y-7 p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
      
      <h1 className='text-5xl font-extrabold text-white md:w-1/2 w-full'>There are many different medical services that doctors may offer. </h1>
      <p className='text-xl text-white w-full md:w-1/2'>These are the basic healthcare services that most people need on a regular basis, such as annual check-ups, vaccinations, and treatment of common illnesses like colds and flu</p>
      <div>
      <button className="btn bg-blue-900 text-white me-2">Discover More </button>
      
   <button className="btn btn-outline btn-primary">Latest Project</button>
      </div>
       </div> 
    <div className="absolute flex justify-end transform -translate-y-1/2 right-0 bottom-0">
      <a href="#slide3" className="btn btn-circle me-2">❮</a> 
      <a href="#slide1" className="btn btn-circle me-2">❯</a>
    </div>
  </div>
</div>
    );
};

export default Carusal;