export function loginIn(key,value){
    sessionStorage.setItem(key,value);
}



export function isLogined(){
    if(sessionStorage.setItem('userName')){
        return true
    }else{
        return false
    }
}