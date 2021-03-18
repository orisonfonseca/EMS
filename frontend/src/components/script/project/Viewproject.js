import React, { Component } from 'react';
import {onFetchProject,onDeleteProject,OnDissappear} from './../../Redux/project/Projectaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewproject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }
    
    componentDidMount(){
        this.props.onFetchProject();
    }
    

    handle=(e)=>{
        this.setState({search: e.target.value});
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteProject(id);
        if(res){
            this.props.onFetchProject();
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {project}=this.props;
        const { search } = this.state;
        const {success7,error7}=this.props.project;

        console.log(this.props)
        if(this.props.project.success7 || this.props.project.error7){
            this.disappear();
        }
        if(project.datastate7=="NOT_INITIALIZED" || project.datastate7=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            const filteredCountries = project.project.filter(country => {
                return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
              }); 
       return (
        <div className="content-wrapper mt-5">

        <div className="container p-3 ">
             <NavLink className="btn btn-primary" to={'/add-project'}>Add Project</NavLink>

            <div className="container row justify-content-center">
            <input type="text" name="search" placeholder="search" value={search} onChange={this.handle}></input>
            </div>
            {success7?<p className="alert alert-success">{success7}</p>:null}
            {error7?<p className="alert alert-danger">{error7}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-teal lighten-1">
                     <div className="mx-3">
                     <p>{el.name}</p>
                     <p>{el.description}</p>
                     </div>
                     <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                     <NavLink className="btn btn-info btn-sm" to={`edit-project/${el._id}`}>Edit</NavLink></p>
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
})

export default connect(mapStateToProps,{onFetchProject,onDeleteProject,OnDissappear})(withRouter(Viewproject));
