import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class Categories extends Component {

    constructor() {
        super();
        this.state={ categories:[] }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/categories")
        .then ((res) => {console.log(res);
        this.setState({
            categories:res.data
        })})
    }

    render() {

        const item = this.state.categories.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                    <a href="#"><img src={item.img} alt="" className="img-responsive" />
                        <div className="product-detail">
                            <p className="product-desc">{item.productCategory}</p>
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
                        <h2>Categories</h2>
                    </center>
                    <Link to="/Products"><div class="product-new-arrival">{item}</div></Link>
                </div>
            </div>
        )
    }
}

export default Categories;
