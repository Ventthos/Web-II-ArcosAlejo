export function RedirectToLogin(){
    const hasNoToken = localStorage.getItem("token") !== null;
    
    if(!hasNoToken){
        window.location.href = "/login"
    }
}