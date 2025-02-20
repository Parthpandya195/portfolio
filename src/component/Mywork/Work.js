import React from 'react'
import "./Work.css";
import list from '../../assets/data-list/work-data'
function Work() {
  return (
    <div>
      <div className="work" id='work'>
        <div className="work-title">
            <h1>MY Work</h1>

        </div>
        <div className="work-container-title">
            <h1>ROYAL-AROMA</h1>
            <h1>JALARAM-INTERIOR</h1>
            <h1>SELF-PORTFOLIO</h1>
            </div>
        <div className="work-container">
            
            
            {list.map((list,index)=>{
                return <img key={index} src={list.w_img} alt='hello'/>
            })}

        </div>
      </div>
    </div>
  )
}

export default Work
