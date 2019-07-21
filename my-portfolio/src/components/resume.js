import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl";
import Experience from "./experience";
import Education from "./education"
import Skills from "./Skill";
 
class Resume extends Component {
    render() { 
        return (
           <div>
               <Grid>
                   <Cell col={4}>
                       
                       <div style={{textAlign: "center"}}>
                           <img 
                           src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                           alt="avatar"
                           style={{height : "200px"}}
                           />
                       </div>
                       <h2 style={{paddingTop:"2em"}}>Ali Raza</h2>
                       <h4 style={{color : "grey"}}>Programmer</h4>
                       <hr style ={{borderTop : "3px solid #833fb2",width : "50%"}}/>
                       <p>A Full Stack Developer </p>
                       <h5>Email</h5>
                       <p>aaliraza007@hotmail.com</p>
                       <h5>+92333943967</h5>
                       
                   </Cell>
                   <Cell className="resume-right-col" col = {8}>
                       <h2>Education</h2>

                       <Education
                       startYear="2016"
                       endYear="2017"
                       schoolName="university of karachi"
                       
                       />
                       <hr style={{borderTop : "3px solid #e22947"}}/>
                       <h2>Experience</h2>
                       <Experience  

                       jobName= "Full stack developer"
                       JobDescription = "fronted end + backend Developer"
                       />
                        <hr style={{borderTop : "3px solid #e22947"}}/>
                        <h2>Skills</h2>
                        <Skills
                        skill="JavaScript ES6"
                        progress = {75}/>
                         <Skills
                        skill="React"
                        progress = {75}/>
                         <Skills
                        skill="Node"
                        progress = {50}/>
                         <Skills
                        skill="Express"
                        progress = {50}/>

                   </Cell>
               </Grid>

           </div>
        );
    }
}
 
export default Resume;