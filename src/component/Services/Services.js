import React from 'react'
import "../Services/Services.css";
import list from "..//..//assets/data-list/services-data"
import aeroimg from "..//..//assets/images/img1.jpg"
function Services() {
  return (
    <div>
      <div className="services" id='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {list.map((list,index)=>{
                return <div keys={index} className="services-format">
                    <h3>{list.s_no}</h3>
                    <h2>{list.s_name}</h2>
                    <p>{list.S_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={aeroimg} alt="" />
                    </div>
                </div>

            })}
        </div>
      </div>
    </div>
  )
}

export default Services;
