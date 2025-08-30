import React from 'react'
import './prog.css'
import program_1 from '../../assets/program-1-DA_EvTPy.png'
import program_2 from '../../assets/program-2-DRqwF0EM.png'
import program_3 from '../../assets/program-3-C0g4YULi.png'
import program_icon1 from '../../assets/Graduation degree.png'
import program_icon2 from '../../assets/Master degree.png'
import program_icon3 from '../../assets/Post Graduation.png'


const Prog = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program_1}></img>
            <div className="caption">
                <img src={program_icon1}alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2}></img>
            <div className="caption">
                <img src={program_icon2}alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3}></img>
            <div className="caption">
                <img src={program_icon3}alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
      
    </div>
  )
}

export default Prog;