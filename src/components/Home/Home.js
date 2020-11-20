import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import headingImg from '../../images/Mask Group 1.png';
import About from '../About/About';
import Dental from '../Dental/Dental';
import Review from '../Reviews/Review';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    const history = useHistory();
    const handleAppointment = () => {
         history.push('/get-appointment');
    }
    return (
       <div>
         <div className="container">
            <div className="row">
                <div className="col-md-4">
                   <h1>Your New Smile Starts Here</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus suscipit et, corrupti fuga error culpa iure officia debitis maiores.</p>
                  <button className="btn btn-warning" onClick={handleAppointment}>GET APPOINTMENT</button>
                </div>
                <div className="col-md-8">
                    <img className="img-fluid img-thumbnail" src={headingImg} alt=""/>
                </div>
            </div>
         </div>
         <About/>
         <Dental/>
         <Review/>
         <Blog/>
         <Contact/>
         <Footer/>
       </div>
    );
};

export default Home;