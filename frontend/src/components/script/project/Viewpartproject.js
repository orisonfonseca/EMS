import React, { Component } from 'react';
import {onFetchProject, onDeleteProject} from './../../Redux/project/Projectaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewpartproject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchProject(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteProject(id);
        if(res){
            this.props.onFetchProject(this.props.match.params.id);
        }
    }


    render() {
        const {project}=this.props;
        
        const { search } = this.state;
        const {success7,error7}=this.props.project;
      
        if(project.datastate7=="NOT_INITIALIZED" || project.datastate7=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            );
       }
        else {
            
       return (
        <div className="container py-5 mr-5">
                <NavLink className="btn btn-dark" to={'/view-project'}>Back</NavLink>

                <h1 className="text-center text-info sticky-top"> Leave Application's</h1>
                {success7?<p className="text-success">{success7}</p>:null}
                {error7?<p className="text-danger">{error7}</p>:null}
                <table className="table">
                    <thead className="thead-dark">
                       <th>Name</th> 
                       <th>Description</th>
                       <th>Action</th>

                   </thead>
                    <tbody>
                    {project.project.map((el,index)=>(
                        <tr key={index}>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>
                            <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                             <NavLink className="btn btn-info btn-sm" to={`edit-project/${el._id}`}>Edit</NavLink></p>
                            </td>
                       </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
        
        }
    }
}

const mapStateToProps=state=>({
    project:state.project,
})

export default connect(mapStateToProps,{onFetchProject, onDeleteProject})(withRouter(Viewpartproject));
