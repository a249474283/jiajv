export function loginIn(){
    sessionStorage.setItem('userName','aaa')
}

export function isLogined(){
    if(sessionStorage.setItem('userName')){
        return true
    }else{
        return false
    }
}