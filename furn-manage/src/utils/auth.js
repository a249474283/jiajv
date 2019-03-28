
export function loginIn(token) { 
  sessionStorage.setItem('token', token);
}

/**
 * 是否登录(isLogined) 通过存储的token内容判断用户名是否已经登录
 *   通过sessionStorage.getItem(获取sessionStorage的信息) 做为判断条件, 如果存在返回true, 反之返回false
 */
export function isLogined() { 
  if(sessionStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

/**
 * 清除本地存储
 */
export function logOut() {
  sessionStorage.removeItem('token');
}
