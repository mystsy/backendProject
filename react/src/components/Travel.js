import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import products from './Data/product-data-travel.json';
import ShowProductTravel from './ShowProductTravel.js'

class Travel extends Component {

    render() {
        
        const item = products.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                    <a href="#"><img src={item.img} alt="" className="img-responsive" />
                        <div className="product-detail">
                            <p className="product-name">{item.name}</p>
                            <p className="product-desc">{item.description}</p>
                            <p className="price">${item.price}</p>
                        </div>
                    </a>
                </div>
            </li>
        </div>
      );

            return (
                <Link to="/ShowProductTravel">
                    <div className="product-items">
                        {item}
                    </div>
                    <div>
                        <Route path="/ShowProductTravel" component={ShowProductTravel}/>
                    </div>
                </Link>
            )
      }
}

export default Travel;