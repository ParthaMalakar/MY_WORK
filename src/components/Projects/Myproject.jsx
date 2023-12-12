import React from 'react';
import Project from './MyWork'; // Make sure to provide the correct path
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='pt-5 bg-green-100'><section className=" space-y-3">
    <h3 className="section-title pb-4 pt-3">My Projects</h3>
    </section>
    <div className="portfolio-container grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
         
      <div className="card  glass">
  <figure><img src="https://i.ibb.co/B2rKVZv/Screenshot-2023-12-12-134517.png" alt="car!"/></figure>
  <div className="card-body">
  <h1>SWIFTPARCELHUB</h1>
    <h2 className="card-title">A parcel management website.</h2>
    <p>• Users and deliverymen can sign up and log in to this website using Google. Deliverymen can 
deliver or cancel the parcel. <br></br>
• Users can book a parcel, cancel their parcel if the status is pending, see their parcel list, and 
give a review when the parcel is delivered. They can change their profile picture and make 
payment for their added parcel using their card.<br></br>
• The admin can see all the users, Deliverymen. Admin can assign Delivery Men and make a 
user admin or Delivery Men. </p>
<p><b>Technology:</b> React.js, React-Router, React Bootstrap, Font Awesome, NodeJS, ExpressJS, 
MongoDB, Mongoose, firebase</p>
    <div className="card-actions justify-end">
      <Link to={"https://parcel-management-system-6a6dc.web.app/"}><button className="btn btn-primary">Live Link</button></Link>
      <Link to={"https://github.com/ParthaMalakar/Parcel-Management-Client"}><button className="btn btn-primary">Code Link</button></Link>

    </div>
  </div>
</div>

<div className="card  glass">
  <figure><img src="https://i.ibb.co/bXm1WQW/Screenshot-2023-12-12-141121.png" alt="car!"/></figure>
  <div className="card-body">
  <h1>FOODIEFLEET</h1>
    <h2 className="card-title">A restaurant management website </h2>
    <p>• The user can see all food items and top-sell food. They can search for food-by-food name. 
They can see the details of the food.<br></br>
• After logging in, the user can order food and see their order history by clicking their profile.<br></br>
• Logging User can Delete their order from the order list. Can add a new food item but cannot 
order own added food. </p>
<p><b>Technology:</b> React.js, React-Router, React Bootstrap, Font Awesome, NodeJS, ExpressJS, 
MongoDB, Mongoose, firebase</p>
    <div className="card-actions justify-end">
      <Link to={"https://projectfood-43ce6.web.app/"}><button className="btn btn-primary">Live Link</button></Link>
      <Link to={"https://github.com/ParthaMalakar/Restaurant-Management-Client"}><button className="btn btn-primary">Code Link</button></Link>

    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Portfolio;
