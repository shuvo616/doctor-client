import React from 'react';
import './Login.css';
import loginImage from '../../images/Group 140.png';

const Login = () => {
    return (
        <div className="LoginSection m-5 p-5">
            <div className="container bg-warning">
                <div className="row p-5">
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Password"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary me-3">Login</button>
                            <button type="submit" class="btn btn-outline-danger">SignIn With Google Account</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid customImage" src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;