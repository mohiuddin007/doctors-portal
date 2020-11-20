import React, { useState } from 'react';
import headingImg from '../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const GetAppointment = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
         setDate(date);
    }
    return (
        <div>
         <div className="container">
            <div className="row">
                <div className="col-md-4">
                   <h1>Appointment</h1>
                   <div>
                   <Calendar onChange={onChange} value={date}/>
                   </div>
                </div>
                <div className="col-md-8">
                    <img className="img-fluid img-thumbnail" src={headingImg} alt=""/>
                </div>
            </div>
         </div>
           <h1 className="text-center">Available Appointments {date.toString()}</h1>
           <div className="container">
               <div className="row">

               </div>
           </div>
        </div> 
    );
};

export default GetAppointment;