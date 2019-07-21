
import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl";
 
class Experience extends Component {
    render() { 
        return (
            <Grid className="demo-grid-3">
             <Cell col={4}>{this.props.startYear}-{this.props.endYear}</Cell>
             <Cell col={8}>
                 <h4 style={{marginTop : "0px"}}>{this.props.schoolName}</h4>
                 <p>{this.props.jobName}</p>
                 <p>{this.props.jobDescription}</p>
             </Cell>
             
            </Grid>
            
        );
    }
}
 
export default Experience;