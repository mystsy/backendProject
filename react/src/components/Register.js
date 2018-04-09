import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    register(obj) 
    {
      axios.post('http://localhost:3001/register', 
      { 
        name: obj.name.value, 
        email: obj.email.value,
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
                            <label htmlFor="username">Name</label>
                            <input type="text" className="form-control" id="name" ref="name" placeholder="Name"/>
                        </div>
                        <div className="onehalf">
                            <label htmlFor="text">E-mail</label>
                            <input type="email" className="form-control" id="email" ref="email" placeholder="E-mail Address"/>
                        </div>
                    </div>
                    <div className="form-row clearfix">
                        <div className="onehalf first">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" ref="username" placeholder="Username"/>
                        </div>
                        <div className="onehalf">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" ref="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="btn-submit">
                        <input type="submit" onClick={() => this.register(this.refs)}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default Register;
