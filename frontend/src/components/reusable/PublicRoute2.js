import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
const PublicRoute2=({component:Component, eauth, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            eauth.isLoggedIn===true?(
                <Redirect to="/edetails"/>
            ):(
                <Component {...props } /> 
            )
        }
    />
)

PublicRoute2.propTypes={
    eauth:propTypes.object.isRequired,
}

const mapStateToProps=state=>({
    eauth:state.eauth
})

export default connect(mapStateToProps)(PublicRoute2);