
import React, { Component } from 'react';
import { Tabs, Tab ,Grid ,Cell,Card,CardTitle,CardActions,Button,CardMenu,
IconButton,CardText } from "react-mdl";
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }
    toggleCategories(){ 
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth : "450",margin : "auto"}}>
                      <CardTitle style={{color:"#fff" ,height : "176px",background : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyy5c2T1K4-sTzzqGSEDOF1gOWTzsm3Fr1-tSGYe-K9geHLBU) center /cover"}}>
                           
                      </CardTitle>
                      <CardText>React is a JavaScript library for building user interfaces</CardText>
                      <CardActions border>
                          <Button colored>Github</Button>
                          <Button colored>CodePen</Button>
                          
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                          <IconButton name = "share"/>
                      </CardMenu>
                    </Card>
                </div>

            )

        }
        else if (this.state.activeTab===1){
            return (
                <div><h1>This in nodejs</h1></div>

            )
        }
        else if (this.state.activeTab===2){
            return (
                <div><h1>This in Express</h1></div>

            )
        }
        else if (this.state.activeTab===3){
            return (
                <div><h1>This in MongoDB</h1></div>

            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
                    this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Nodejs</Tab>
                    <Tab>Express</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="project-grid">
                    <Grid >
                        <Cell col = {12}>
                          <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                      </Grid>  
                    
                </section>
            </div>

        )
    }
}

export default Projects;
