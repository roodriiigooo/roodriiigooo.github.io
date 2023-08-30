import React, { Component } from 'react';
import data from './../Json/data';

const jsonData = data.resume;
class Resume extends Component {
  render() {

    if(jsonData){
      var skillmessage = jsonData.skillmessage;
      var skillmessage1 = jsonData.skillmessage1;

      var education = jsonData.education.map(function(education){
        return <div name={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="text-adjust">{education.description}</p></div>
      })
      var work = jsonData.work.map(function(work){
        return <div name={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="text-adjust">{work.description}</p>
        </div>
      })
      var skills = jsonData.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li name={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li> 
        //return  <li class="tag" style="color: #61dafb;"><a href="#">{skills.name}</a></li>
      })
      var tagskills = jsonData.skills.map(function(skills){
        return <div className="chip"><div alt={skills.name} className="chip-content">{skills.name}</div></div>
      })
      var certification = jsonData.certification.map(function(certification){
        return <div name={certification.degree}><h3>{certification.degree}</h3>
        <p className="info">{certification.school} <span>&bull;</span><em className="date">{certification.graduated}</em></p>
        <p className="text-adjust">{certification.description}</p></div>
      })
      var exp = jsonData.exp.map(function(exp){
        return <div name={exp.title}><h3>{exp.title}</h3>
            <p className="text-adjust">{exp.description}</p>
        </div>
      })
    }

    return (
      <div>
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Formação</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">

          <div className="three columns header-col">
            <h1><span>CERTIFICADOS</span></h1>
          </div>

          <div className="nine columns main-col">
          {certification}
          </div>
      </div>
    {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>CARREIRA</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}
      <section id="skill">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>TECNOLOGIAS</span></h1>
          </div>

            <div className="nine columns main-col">
            {/* {exp} */}
            </div>
        

          {/* <div className="row"> */}
            <div className="three columns header-col">
              <h1><span></span></h1>
            </div>
            <div className="nine columns main-col">
              <p className="text-center hidden">{skillmessage}</p>
                {/* <h3>Conhecimento</h3> */}
                  {tagskills}

                  {/* <div className="bars">
                    <ul className="skills">
                      {skills}
                    </ul>
                  </div> */}
            {/* </div> */}
            {/* <p className="text-center hidden">{skillmessage1}</p> */}
          </div>
        </div>
      </section>
      </section>

    </div>
    );
  }
}

export default Resume;
