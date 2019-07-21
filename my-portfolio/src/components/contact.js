import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, ListItem, List } from "react-mdl";
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}><h1>AlI RAZA</h1>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="imag"
                            style={{ height: "250px" }} />
                        <p style={{ width: " 75%", margin: "auto", paddingTop: "1em" }}><b>Full Stack Developer</b></p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px",fontFamily:"Anton"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>(021)03333943967</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px",fontFamily:"Anton"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>aaliraa007@hotmail.com</ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                    
                </Grid>
            </div>
        );
    }
}

export default Contact;