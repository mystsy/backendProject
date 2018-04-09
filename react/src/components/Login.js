import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class Login extends Component {

    login(obj) 
    {
      axios.post('http://localhost:3001/login', 
      { 
        username: obj.username.value,
        password: obj.password.value
      })
      .then(function(response){
        console.log('saved successfully')
      });
    }

    render()
    {
      axios.get('http://localhost:3001/')
      .then((ambilData) =>
      {
        console.log(ambilData);
      })

        return (
            <div>
                <form>
                    <div className="form-row clearfix">
                        <div className="onehalf first">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" ref="username" placeholder="Username"/>
                        </div>
                        <div className="onehalf">
                            <label htmlFor="password">Password</label>
                            <input type="passwrod" className="form-control" id="password" ref="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="btn-submit">
                        <input type="submit" onClick={() => this.login(this.refs)}/>
                    </div>
                </form>
            Don't have account? Register <span className="register-href"><Link to="/Register">here</Link></span>
            </div>
        )
    }

}

export default Login;
