import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import products from './Data/product-data-accessories.json';
import ShowProductAccessories from './ShowProductAccessories.js'

class Accessories extends Component {

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
                <Link to="/ShowProductAccessories">
                    <div className="product-items">
                        {item}
                    </div>
                    <div>
                        <Route path="/ShowProductAccessories" component={ShowProductAccessories}/>
                    </div>
                </Link>
            )
      }
}

export default Accessories;