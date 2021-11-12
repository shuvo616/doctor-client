import React, { useContext } from 'react';
import './Login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import loginImage from '../../images/Group 140.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';

import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";





const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handelGoogleSignIn = () => {
        // var provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(provider)
        //     .then((result) => {
        //         var credential = result.credential;
        //         var token = credential.accessToken;
        //         const { displayName, email } = result.user;
        //         const signedInUser = { name: displayName, email }
        //         setLoggedInUser(signedInUser);
        //         history.replace(from);
        //     }).catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         var email = error.email;
        //         var credential = error.credential;
        //         console.log(errorCode,errorMessage,email,credential)
        //     });

        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode,errorMessage,email,credential)
        });
    }

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
                            <button type="submit" class="btn btn-outline-danger" onClick={handelGoogleSignIn}>SignIn With Google Account</button>
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