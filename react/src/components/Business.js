import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import products from './Data/product-data-business.json';
import ShowProductBusiness from './ShowProductBusiness.js'


class Business extends Component {

    render() {
        
        const item = products.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                    <a><img src={item.img} alt="" className="img-responsive" />
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
                <Link to="/ShowProductBusiness">
                    <div className="product-items">
                        {item}
                    </div>
                    <div>
                        <Route path="/ShowProductBusiness" component={ShowProductBusiness}/>
                    </div>
                </Link>
            )
      }
}

export default Business;