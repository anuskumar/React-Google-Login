import React, { useState, Fragment } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import M from 'materialize-css/dist/js/materialize.min.js';

const Google = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        image: '',
        isAuthenticated: false
    })

    const { name, email, image, isAuthenticated } = userData;

    let googleContent;

    const responseGoogle = response => {

        const { profileObj: { email, name, imageUrl } } = response;

        setUserData({
            name: name,
            email: email,
            image: imageUrl,
            isAuthenticated: true
        })
    }

    const failureGoogle = e => {
        console.log(e);
    }

    const logout = e => {
        setUserData({
            name: '',
            email: '',
            image: '',
            isAuthenticated: false
        })
        M.toast({ html: 'Logged Out' })
    }

    if(isAuthenticated){
        googleContent = <Fragment>
            <div className="container">
                <img src={image} alt="..." className='responsive-img'/>
                <p className="flow-text">
                   { email === 'shivanibarhelass@gmail.com' ? <Fragment>
                       <span className="red-text">Welcome Moti</span>
                   </Fragment> : <Fragment>
                   Welcome {name}
                   </Fragment> }
                   <br/>
                   { email }
                </p>
                <br/>
                <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText='Logout' onLogoutSuccess={logout} />
            </div>
        </Fragment>
    }

    else{
        googleContent = <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} 
        buttonText='Login With Google'
        onSuccess={responseGoogle}
        onFailure={failureGoogle}
        cookiePolicy={ 'single_host_origin' } />
    }

    return (
        <div className="container center" style={{'marginTop': '10rem'}}>
            { googleContent }
        </div>
    )
}

export default Google;
