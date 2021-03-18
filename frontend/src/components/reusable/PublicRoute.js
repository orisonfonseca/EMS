import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
const PublicRoute=({component:Component, auth, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            auth.isLoggedIn===true?(
                <Redirect to="/view-employee"/>
            ):(
                <Component {...props } /> 
            )
        }
    />
)

PublicRoute.propTypes={
    auth:propTypes.object.isRequired,
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PublicRoute);