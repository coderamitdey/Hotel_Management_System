// all global variable declarations
let userInfo;
let navBrand = document.querySelector('.navbar-brand');
let logoutBtn = document.querySelector('.logout-btn')

// check user login or not
if(sessionStorage.getItem('__am__') == null){
    window.location = '../index.html'
}
userInfo = JSON.parse(sessionStorage.getItem('__am__'));
navBrand.innerHTML = userInfo.hotelName;

// logout coding
logoutBtn.onclick = () =>{
    logoutBtn.innerHTML = 'Please Wait...';
    setTimeout(() => {
        logoutBtn.innerHTML = 'Logout';
        sessionStorage.removeItem('__am__');
        window.location = '../index.html';
    }, 3000);
}