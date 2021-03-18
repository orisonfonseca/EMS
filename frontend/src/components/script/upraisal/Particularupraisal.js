import React, { Component } from 'react';
import {onFetchUpraisal, onDeleteUpraisal,OnDissappear} from './../../Redux/upraisal/Upraisalaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';


class Particularupraisal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchUpraisal(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteUpraisal(id);
        if(res){
            this.props.onFetchUpraisal(this.props.match.params.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }

    render() {
        const {upraisal}=this.props;
        console.log(this.props);
        const { search } = this.state;
        const {success3,error3}=this.props.upraisal;

        console.log(this.props)
        if(this.props.upraisal.success3 || this.props.upraisal.error3){
            this.disappear();
        }
        if(upraisal.datastate3=="NOT_INITIALIZED" || upraisal.datastate3=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper">

        <div className="container p-3 mt-5">
              <NavLink className="btn btn-dark" to={'/view-upraisal'}>Back</NavLink>
        <div className="col-md-12"></div>
        <h1 className="text-center text-info sticky-top"> Upraisal </h1>
        {success3?<p className="alert alert-success">{success3}</p>:null}
            {error3?<p className="alert alert-danger">{error3}</p>:null}
                    <div className="row">
                 {upraisal.upraisal.map((el,index)=>(
                     <div className="col-md-4 mt-1">
                     <div className="card bg-teal lighten-1">
                         <div className="mx-3">
                    <p key={el._id}></p>
                     <h5>Old salary: {el.old_salary}</h5>
                     <h5>Revised salary: {el.revised_salary}</h5>
                     <h5>Date: {el.date.slice(0,-14)}</h5>
                    </div>
                    <p><button className="btn btn-danger btn-sm ml-2" onClick={()=>this.onDelete(el._id)}>Delete</button>
                    <NavLink className="btn btn-info btn-sm" to={`edit-upraisal/${el._id}`}>Edit</NavLink></p>
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
})

export default connect(mapStateToProps,{onFetchUpraisal,onDeleteUpraisal,OnDissappear})(withRouter(Particularupraisal));
