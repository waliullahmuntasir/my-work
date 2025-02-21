//  2nd js for 2nd js html.html \
var addmoney = document.getElementById('addmoremoney');

addmoney.addEventListener('click', function(event) {
    event.preventDefault();
    

    
 
    var pinCodetwoooo = document.getElementById('pin-code-two').value;

    if ( pinCodetwoooo === '1234') {
        
    var takingTheMobilNumberINput = document.getElementById('phone-number-sec').value;
    var covert = parseInt(takingTheMobilNumberINput); 
    
 
    var mypresenttaka = document.getElementById('mainAmaut').innerText;
    var coverttwo = parseInt(mypresenttaka); 
    
    var newAmount = covert + coverttwo;
    
    console.log(newAmount);
    document.getElementById('mainAmaut').innerText = newAmount;
        console.log('cash go');

    } else {
        alert('Invalid phone number or PIN. Please try again.');
    }

});
document.getElementById('iwillcashout').addEventListener('click',function(){
    
    window.location.href = "/cashout.html"; 
})
