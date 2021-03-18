import React, { Component } from 'react';
import {onFetchProject} from './../../Redux/project/Projectaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Eproject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
        //this.props.onFetchProject();
    }

    render() {
        const {project}=this.props;
        console.log(project);
        const {success7,error7}=this.props.project;

        if(project.datastate7=="NOT_INITIALIZED" || project.datastate7=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper mt-5">

        <div className="container p-3 ">

            <div className="container row justify-content-center">
            </div>
            <h1 className="text-center text-info sticky-top">Project</h1>

            {success7?<p className="text-success">{success7}</p>:null}
            {error7?<p className="text-danger">{error7}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {project.project.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-teal lighten-1">
                     <div className="mx-3">
                     <p>Name:       {el.name}</p>
                    <p>Description: {el.description}</p>
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
    project:state.project,
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchProject})(withRouter(Eproject));
