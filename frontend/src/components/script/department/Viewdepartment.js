import React, { Component } from 'react';
import {onFetchDepartment,onUpdateDepartment,OnDissappear} from './../../Redux/department/Departmentaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import Modal from 'react-awesome-modal';
const customStyles = {

     
    content : { 
        border                : 'none',  
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        outline               : '0',
        opacity               :'1',
       
      }
      
    

};
class ViewDepartment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             mod:false,
             department:"",
             image:"",
             image1:"",
        }
    }
    
    componentDidMount(){
        this.props.onFetchDepartment();
    }
    

    handle=(e)=>{
        this.setState({ search: e.target.value });
    }
    onmod1=(a,b,c)=>{
       

           this.setState({id:c,department:a,image:b});
            this.setState({mod:!this.state.mod});
    }
    onmod2=async()=>{
        const obj={
            department:this.state.department,
            image:this.state.image,
            id:this.state.id
        }
       const res = await this.props.onUpdateDepartment(obj)
       if(res){
        this.props.onFetchDepartment();
        this.setState({mod:!this.state.mod});
       }
        
    }
    onmod3=()=>{
                this.setState({mod:!this.state.mod});
 }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {department}=this.props;
        const { search } = this.state;
        const {success9,error9}=this.props.department;
        if(this.props.department.success9 || this.props.department.error9){
            this.disappear();
        }
        
        if(department.datastate9=="NOT_INITIALIZED" || department.datastate9=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            const filteredCountries = department.department.filter(country => {
                return country.department.toLowerCase().indexOf(search.toLowerCase()) !== -1;
              }); 
       return (
        <div className="content-wrapper">

        <div className="container p-3 mt-5">
            <div className="container row justify-content-center">
            <NavLink className="btn btn-primary" to={'/add-department'}>Add Department</NavLink>

            <input type="text" name="search" className="form-control-sm mt-2" placeholder="search" value={search} onChange={this.handle}></input>
            </div>
            {success9?<p className="text-success">{success9}</p>:null}
            {error9?<p className="text-danger">{error9}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-light">
                     <img className="card-img-top" height="150" width="150" src={`http://localhost:5000/${el.image}`}/>
                     <h2>Name: {el.department}</h2>
                     <button className="btn btn-info btn-sm" onClick={()=>this.onmod1(el.department,el.image,el._id)}>Edit</button>
                    
                     </div>
                 </div>
                 ))}
                
                
            </div>
            <Modal visible={this.state.mod} width="450" height="300" effect="fadeInUp" style={customStyles}  >
                            <div className="">
                                
                            <div class="card">
                                        <h5 class="card-header bg-dark">Featured</h5>
                                        <div class="card-body">
                                        <label>Edit Department Name</label>    
                                        <input type="text" className="form-control" name="department" value={this.state.department} onChange={this.onHandleChange}></input>
                                    
                                            <a href="#" class="btn btn-primary" onClick={this.onmod2}>Save</a>
                                            <a href="#" class="btn btn-warning" onClick={this.onmod3}>Cancel</a>

                                        </div>
                                        </div>
                            
                            </div>
        </Modal>
        </div>
        </div>

        );
        
        }
    }
}

const mapStateToProps=state=>({
    department:state.department,
})

export default connect(mapStateToProps,{onFetchDepartment,onUpdateDepartment,OnDissappear})(withRouter(ViewDepartment));
