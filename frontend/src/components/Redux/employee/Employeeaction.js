import axios from 'axios';

export const onAddEmployee=(data,history)=>{
console.log(data);
const fd=new FormData();
    fd.append("name",data.name);
    fd.append("email",data.email);
    fd.append("image",data.image);
    fd.append("gender",data.gender);
    fd.append("address",data.address);
    fd.append("position",data.position);
    fd.append("reportto",data.reportto);
    fd.append("employmenttype",data.employmenttype);
    fd.append("startdate",data.startdate);
    fd.append("dob",data.dob);
    fd.append("password",data.password);
    fd.append("d_id",data.d_id);
    fd.append("mobile",data.mobile);
    fd.append("noti",Number(0));


return(dispatch)=>{
    axios.post("http://localhost:5000/saveEmployee", fd)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-employee");
        }
        else{
            dispatch(onAddFailure(res.msg));
        }
    }).catch(err=>{
        //console.log(err);
        dispatch(onAddFailure(err.response.msg));
    })
}
}

export const onFetchEmployee=()=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewEmployee")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}
export const onFetchEmployee2=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewEmployee2/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}
export const onDeleteEmployee=(id)=>{
    return (dispatch)=>{
       return  axios.get("http://localhost:5000/deleteEmployee/"+id)
        .then(res=>{
            if(res.status==200){
                console.log(res);
                return true;
               
            }else{
                console.log(res);
                return false;
            }
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

/*export const onFetchnoti=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/noti/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess2(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure2(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure2(err))
        })
    }
}*/

export const getSingleEmployee=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editEmployee/"+id)
        .then(res=>{
            //console.log(res);
            return res.data;
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const onUpdateEmployee=(data,history)=>{
    //console.log(data);
    const fd1=new FormData();
    fd1.append("name",data.name);
    fd1.append("email",data.email);
    fd1.append("image",data.image);
    fd1.append("gender",data.gender);
    fd1.append("address",data.address);
    fd1.append("position",data.position);
    fd1.append("reportto",data.reportto);
    fd1.append("employmenttype",data.employmenttype);
    fd1.append("startdate",data.startdate);
    fd1.append("dob",data.dob);
    fd1.append("id",data.id);
    fd1.append("d_id",data.d_id);
    fd1.append("mobile",data.mobile);

    //console.log(fd1);
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateEmployee",fd1)
        .then(res=>{
            //console.log(res);
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
            history.push("/view-employee");
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            //console.log(err);
            dispatch(onUpdateFailure(err.response.msg));
        })
}
}

export const OnDissappear=()=>{
 
    return (dispatch)=>{
        setTimeout(function(){
            dispatch(ondis());
        }, 4000);
            
}
}

export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS1",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE",
        payload:msg,
    }
}

export const onFetching=()=>{
    return{
        type:"ON_FETCHING1"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE",
        payload:msg
    }
}
export const ondis=()=>{
    return {
        type:"DISSE",
    }
}
