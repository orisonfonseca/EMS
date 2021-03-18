import React, { Component } from 'react';
import {onFetchUpraisal3} from './../../Redux/upraisal/Upraisalaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import {onFetchnoti2} from './../../Redux/noti/Notiaction';

class Eupraisal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
        
    }
    
    componentDidMount=()=>{
       //this.props.onFetchUpraisal3(this.state.id);
     
    }

    render() {
        const {upraisal}=this.props;
        
        const {success3,error3}=this.props.upraisal;
        console.log(this.props)
        if(upraisal.datastate3=="NOT_INITIALIZED" || upraisal.datastate3=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper mt-5">

        <div className="container p-3 ml-5">
            <div className="container row justify-content-center">

            </div>
            {success3?<p className="text-success">{success3}</p>:null}
            {error3?<p className="text-danger">{error3}</p>:null}
        <div className="col-md-12"></div>
        <h1 className="text-center text-info sticky-top"> Upraisal </h1>

            <div className="row center">
                 {upraisal.upraisal.map((el,index)=>(
                     <div className="col-md-4 mt-1">
                     <div className="card bg-teal lighten-1" key={el._id}>
                     <div className="mx-3">
                     <h5>Old salary: {el.old_salary}</h5>
                     <h5>Revised salary: {el.revised_salary}</h5>
                     <h5>Date: {el.date.slice(0,-14)}</h5>
                     </div>
                     </div>
                 </div>
                 ))}
                
                
            </div>
        </div>
        </div>

        );
        
        }
    }
}

const mapStateToProps=state=>({
    upraisal:state.upraisal,
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchUpraisal3,onFetchnoti2})(withRouter(Eupraisal));
