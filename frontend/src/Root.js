import React, { useState } from 'react'
import {connect} from 'react-redux';
import App from './App';

function Root(props,location) {

  if(props.auth.isLoggedIn==false && props.eauth.isLoggedIn==false){
      const t = props.auth.isLoggedIn
    return t;
  }
else {
  return null;
}
  
  
}
const mapStateToProps=state=>{return{
  auth:state.auth,
  eauth:state.eauth
}}

export default connect(mapStateToProps)(Root);
