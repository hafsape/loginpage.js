const login=()=>{
   if(inputuname.value && inputpsw.value){
          sessionStorage.setItem("username",inputuname.value)
          sessionStorage.setItem("password",inputpsw.value)
          window.location="dashboard.html"

   }
   else{
        alert("please enter valid credentials")
        console.log("nhgrdbnjydesderjkj")
   }
}