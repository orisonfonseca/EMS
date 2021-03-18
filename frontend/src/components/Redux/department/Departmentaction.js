import axios from 'axios';

export const onAddDepartment=(data,history)=>{
console.log(data);
const fd=new FormData();
    fd.append("department",data.department);
    fd.append("image",data.image);
    

return(dispatch)=>{
    axios.post("http://localhost:5000/saveDepartment", fd)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-department");
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

export const onFetchDepartment=()=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewDepartment")
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

export const onDeleteDepartment=(id)=>{
    return (dispatch)=>{
       return  axios.get("http://localhost:5000/deleteDepartment/"+id)
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

export const getSingleDepartment=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editDepartment/"+id)
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

export const onUpdateDepartment=(data)=>{
    //console.log(data);
    const fd1=new FormData();
    fd1.append("department",data.department);
    fd1.append("image",data.image);
    fd1.append("id",data.id);

    return (dispatch)=>{
       return axios.post("http://localhost:5000/updateDepartment",fd1)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
            return true
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
        type:"ADD_SUCCESS9",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE9",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS9",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE9",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING9"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS9",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE9",
        payload:msg
    }
}
export const ondis=()=>{
    return {
        type:"DISSD",
    }
}

