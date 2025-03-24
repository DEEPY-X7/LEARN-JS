document.cookie = "username = Deepu yadav; expires=Fri, 31 Dec 2025 23:59:59 GMT";
//or
document.cookie = 'username = Deepu yadav; max-age=3600'

//Reading Cookies
console.log(document.cookie);

function getCookie(){
    let cookie =  document.cookie.split("; ")
    for(let cookie of cookies){
        let [key, value] = cookie.split("=");
        if(key  === name )return value
    }
    return null;
}
console.log(getCookie("username"))

//Updating a Cookie
document.cookie = "username=deepuji; expires=Fri, 31 Dec 2025 23:59:59 GMT";

//Deleting a Cookie
document.cookie = "username=; expires=Thu, 01 Jan 2026 00:00:00 GMT";

// Secure & HttpOnly Cookies
document.cookie = "auth tocen secret; secure"

//Setting Path & Domain
document.cookie = 'theme-dark; path=/; domain=deepu.com'

//Using Cookies in Modern Web Apps
//npm install js-cookie
import Cookies from 'js-cookie';
Cookies.set('user', 'deepu', { expires: 7 }); // Expires in 7 days
console.log(Cookies.get('user')); // deepu
Cookies.remove('user'); // Delete cookie

