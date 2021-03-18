import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
const PrivateRoute2=({component:Component,eauth, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            eauth.isLoggedIn===true?(
                <Component {...props } />
            ):(
                <Redirect to="/elogin"/>
            )
        }
    />
)

PrivateRoute2.propTypes={
    eauth:propTypes.object.isRequired,

}

const mapStateToProps=state=>({
    eauth:state.eauth,
})

export default connect(mapStateToProps)(PrivateRoute2);