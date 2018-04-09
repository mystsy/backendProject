import React, { Component } from 'react';

import craftmanship from '../img/fe1e0ad84699df12bf4921da574cc6f3.jpg'

class About extends Component {

    render() {
        return (
            <div className="craftmanship">
                <center>
                    <h3>Our Story</h3>
                    <br/>
                    <img src={craftmanship} alt="" className="img-responsive" />
                    <br/>
                    <p>
                    Slim Jo is the ultimate personal companion to the urban sophisticate. Whether Slim Jo is in your hand or your pocket, it’s always on the move, protecting your valuable personal belongings and facing the myriad challenges of a vibrant lifestyle. Slim Jo supports and accentuates individual style and personal expression across the spectrum, from laid-back to sophisticated.
                    <br/><br/>
                    Slim Jo represents straightforward, functional and durable design that showcases only what is strictly necessary - nothing more, nothing less. Behind our products is the philosophy that real luxury arises from the choices made - about what to subtract, and what should remain. The tactile qualities of the materials. And in the synergy created between aesthetics and function.
                    <br/><br/>
                    Firmly based in the Danish design tradition and appreciation for the values of classic craftsmanship, Slim Jo unites natural materials with simple yet refined details to create products of true style. Leather constitutes the backbone of our design, and only the best materials of premium quality are used. In Slim Jo bags, functionality and detail are meticulously harmonised with versatility and durability to strike exactly the right balance.
                    <br/><br/>
                    Slim Jo signifies contemporary chic that is rooted in the virtues of classic design. Slim Jo is the style-savvy choice with a unique patina that only grows more resplendent with the passage of time.
                    </p>
                    </center>
            </div>
        )
    }

}

export default About;
