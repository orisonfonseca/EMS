import React, { Component } from 'react'
import {onFetchSalary2, onDeleteSalary,onUpdateSalary2,OnDissappear} from './../../Redux/salary/Salaryaction';
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

class Salaryrep extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             mod:false,
             basic:"",
             allowance:"",
             id:"",
             netsal:""
        }
    }
    componentDidMount=()=>{
        this.props.onFetchSalary2();
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteSalary(id);
        if(res){
            this.props.onFetchSalary2();
        }
    }
    onmod1=(a,b,c)=>{
        this.setState({basic:a,allowance:b,id:c});
        this.setState({mod:!this.state.mod});
    }
    onmod2=()=>{
        var neti= Number(this.state.basic) + Number(this.state.allowance);
    var res = "";
        setTimeout(() => {
            this.setState({netsal:neti},
           async function (){
                const obj={
                    basic:this.state.basic,
                    allowance:this.state.allowance,
                    net:this.state.netsal,
                    id:this.state.id,
                }

           res = await this.props.onUpdateSalary2(obj);
           if(res){
            this.props.onFetchSalary2();
            this.setState({mod:!this.state.mod});
        }
            });
        }, 10)
    }
    onmod3=()=>{
        this.setState({mod:!this.state.mod});
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:Number(e.target.value)});
        
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {salary}=this.props;
        const {success5,error5}=this.props.salary;
        console.log(this.props)
        if(this.props.salary.success5 || this.props.salary.error5){
            this.disappear();
        }
        if(salary.datastate5=="NOT_INITIALIZED" || salary.datastate5=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
        return (
            <div className="content-wrapper">
            <div className="container-xxl ">
            <div className="container py-5 mr-5 mt-5">
            

            <h1 className="text-center text-info sticky-top"> Salary Report</h1>
            {success5?<p className="alert alert-success">{success5}</p>:null}
            {error5?<p className="alert alert-danger">{error5}</p>:null}
            <table className="table table-responsive">
                <thead className="thead-dark">
                   <th>Image</th> 
                   <th>Name</th>
                   <th>Basic</th>
                   <th>Allowance </th>
                   <th>Net</th>
                   <th>Action</th>

               </thead>
                <tbody>
                {salary.salary.map((el,index)=>(
                    <tr key={index}>
                        <td><img className="" height="100" width="100" src={`http://localhost:5000/${el.e_id.image}`}/></td>
                        <td>{el.e_id.name}</td>
                        <td>{el.basic}</td>
                        <td>{el.allowance}</td>
                        <td>{el.net}</td>
                        <td>
                        <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                        <button className="btn btn-info btn-sm" onClick={()=>this.onmod1(el.basic,el.allowance,el._id)}>Edit</button></p>
                        </td>
                   </tr>
                ))}
                </tbody>
            </table>
            <Modal visible={this.state.mod} width="400" height="300" effect="fadeInUp" style={customStyles}  >
                            <div className="">
                            <h5 class="card-header bg-dark">Edit Salary</h5>
                            <div class="mx-3 mb-3 mt-3">
                                        
                                        <label>Basic Salary </label>
                                        <input type="number" className="form-control" name="basic" value={this.state.basic} onChange={this.onHandleChange}></input>
                                        <label>Allowance</label>
                                         <input type="number" className="form-control" name="allowance" value={this.state.allowance} onChange={this.onHandleChange}></input>

                                            <a href="#" class="btn btn-primary" onClick={this.onmod2}>Save</a>
                                            <a href="#" class="btn btn-warning" onClick={this.onmod3}>Cancel</a>

                                        </div>
                            </div>
        </Modal>
        </div>
        
        </div>
        </div>

        )}
    }
}
const mapStateToProps=state=>({
    salary:state.salary,
})
export default connect(mapStateToProps,{onFetchSalary2,onDeleteSalary,onUpdateSalary2,OnDissappear})(withRouter(Salaryrep));
