import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="demo-grid-ruler">
                    <Cell col={12}></Cell>
                    <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="portfolio" className="portfolio_images" />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | ES6 | React | Redux | NodeJS | Express | MongoDB</p>
                    </div>

                </Grid>

            </div>
        );
    }
}

export default Landing;