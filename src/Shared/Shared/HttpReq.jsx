function getToken(){
    const token=localStorage.getItem("_userItem")

    if(token){
        return{
            'x-token':`${localStorage.getItem("_userItem")}`,
            Accept:'application/json',
            'Content-type':'application/json'
        };
    }else{

        return{
            Accept:'application/json',
            'Content-type':'application/json'
        }
    }
}

async function get(){

    return{
        headers:await getToken(),
        method:'GET',
    }
}

async function post(data){

    return{
        headers:await getToken(),
        method:"POST",
        body:JSON.stringify(data)
    }
}

async function put(data){
    return{
        headers:await getToken(),
        method:'PUT',
        body:JSON.stringify(data)

    }
}

async function remove(){

    return{
        headers:await getToken(),
        method:"DELETE",
    }
}

async function handleError(data){
    let status=data.status;

    if (data.status >400  &&  data.status <= 500){
        data=await data.JSON();

        return{
            status:status || 500,
            message:data.message || "Internal Server Error",
            errors:data.errors || "Internal Server Error"
        }
    }else{

        let res= await data.JSON();
        res.status=status;

        return res;

    }
}

export { get , put , post , remove , handleError }