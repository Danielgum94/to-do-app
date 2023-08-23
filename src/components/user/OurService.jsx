import React from 'react'
import '../CSS/ourservises.css'
import { Link } from 'react-router-dom';

export default function OurService() {
  return (
    <div className="our-service">
      <h2 className="section-title">Our Services</h2>
      <div className="service-card">
        <img src="service-1.png" alt="Service 1" className="service-image" />
        <h3 className="service-title">Service 1</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consequat massa.
        </p>
      </div>
      <div className="service-card">
        <img src="service-2.png" alt="Service 2" className="service-image" />
        <h3 className="service-title">Service 2</h3>
        <p className="service-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
      <div className="service-card">
        <img src="service-3.png" alt="Service 3" className="service-image" />
        <h3 className="service-title">Service 3</h3>
        <p className="service-description">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <div>
          <Link to='/dashboard'>
          Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
