import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class Products extends Component {

    constructor() {
        super();
        this.state={ products:[] }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/products")
        .then ((res) => {console.log(res);
        this.setState({
            products:res.data
        })})
    }

    render() {

        const item = this.state.products.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                <a><img src={item.img} alt="" className="img-responsive" />
                    <div className="product-detail">
                        <p className="product-name">{item.productName}</p>
                        <p className="product-desc">{item.description}</p>
                        <p className="price">${item.price}</p>
                    </div>
                </a>
                </div>
            </li>
        </div>
      );

        return (
            <div>
                <div class="new-arrival"> {/* Collection Display */}
                    <center>
                        <h2>Products</h2>
                    </center>
                    <div class="product-new-arrival">{item}</div>
                </div>
            </div>
        )
    }
}

export default Products;
