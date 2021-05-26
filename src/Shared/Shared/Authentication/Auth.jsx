class Auth{

  authenticated=false;

  login(data){


    const user=JSON.stringify(data)

    localStorage.setItem("_userdetail" , user )

    if(data){
      this.authenticated=true;

      console.log("you are logged in")

    }else{
      this.authenticated=false;
      
      console.warn('Check your Credentials')
    }
  }

  logout(){

    localStorage.removeItem("_userdetail");
    localStorage.removeItem("_userdetail");
    this.authenticated=false;

  }

  user(){

    let user=localStorage.getItem("_userdetail")

    return JSON.parse(user);
  }

  isUserAuthenticated(){

    if(localStorage.getItem("_userdetail")){

      return true;

    }else{
      
      return false;

    }
  }
}

export default new Auth();