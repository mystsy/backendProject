import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

import banner1 from '../img/banner1.png'
import banner2 from '../img/banner2.png'
import banner3 from '../img/banner3.png'

class Home extends Component {

    constructor() {
        super();
        this.state={ season:[] }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/")
        .then ((res) => {console.log(res);
        this.setState({
            season:res.data
        })})
    }

    render() {

        const item = this.state.season.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                    <a href="#"><img src={item.img} alt="" className="img-responsive" />
                        <div className="product-detail">
                            <p className="product-desc">{item.seasonalCategory}</p>
                        </div>
                    </a>
                </div>
            </li>
        </div>
      );

        return (
            <div>
                <div className="carousel slide" id="iniCarousel" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#iniCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#iniCarousel" data-slide-to="1"></li>
                        <li data-target="#iniCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div class="item active">
                            <img src={banner1} alt=""/>
                        </div>
                        <div class="item">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="item">
                            <img src={banner3} />
                        </div>
                    </div>

                    <a href="#iniCarousel" class="left carousel-control" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a href="#iniCarousel" class="right carousel-control" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>

                <div class="new-arrival"> {/* Collection Display */}
                    <center>
                        <h2>Collections</h2>
                    </center>
                    <Link to="/Categories"><div class="product-new-arrival">{item}</div></Link> 
                </div>
            </div>
        )
    }
}

export default Home;
