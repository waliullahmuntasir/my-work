
// function loginbtn(event){
    
//     console.log('suii')
//     var phonnumber = document.getElementById('phone-number').value;
//     console.log(phonnumber)
//     var pincode = document.getElementById('pin-code').value;
//     console.log(pincode)
//     if(phonnumber === '5' && pincode === '1234'){
//         console.log('ur logg in');
//         window.location.href = "/html.html";

//     }
//     else{
//         alert('euhf')
//     }

// }
function loginbtn(event) {
    event.preventDefault();

    var phoneNumber = document.getElementById('phone-number').value;
    var pinCode = document.getElementById('pin-code').value;

  
    console.log("Phone Number:", phoneNumber);
    console.log("PIN Code:", pinCode);

    
    
    if (phoneNumber === '5' && pinCode === '1234') {
        console.log('You are logged in!');
        window.location.href = "/html.html"; 
    } else {
        alert('Invalid phone number or PIN. Please try again.');
    }
}


document.getElementById('btnaddmoney').addEventListener('click', loginbtn);
