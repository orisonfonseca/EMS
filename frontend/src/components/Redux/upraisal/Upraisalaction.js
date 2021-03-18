import axios from 'axios';
import { Route, Redirect } from 'react-router'

export const onAddUpraisal=(data,history)=>{

return(dispatch)=>{
    axios.post("http://localhost:5000/saveUpraisal", data)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-upraisal");

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

export const onFetchUpraisal=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewUpraisal/"+id)
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

export const onFetchUpraisal2=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewUpraisalrep")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onFetchUpraisal3=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/viewUpraial2/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                return res.data;
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}


export const onDeleteUpraisal=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.get("http://localhost:5000/deleteUpraisal/"+id)
        .then(res=>{
            if(res.status==200){
                return true;
            }else{
                return false;
            }
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const getSingleUpraisal=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editUpraisal/"+id)
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

export const onUpdateUpraisal=(data,trek,history)=>{
    //console.log(data);
    

    //console.log(fd1);
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateUpraisal",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
           // <Redirect to={`view-particular/${trek}`}/>
            history.push("/view-particular/"+trek);
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

export const onUpdateUpraisal2=(data,trek,history)=>{
  
    return (dispatch)=>{
       return axios.post("http://localhost:5000/updateUpraisal",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
                    return true
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            
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
        type:"ADD_SUCCESS3",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE3",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS3",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE3",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING3"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS3",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE3",
        payload:msg
    }
}
export const ondis=()=>{
    return {
        type:"DISSU",
    }
}
