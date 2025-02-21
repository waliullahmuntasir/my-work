
document.getElementById('cashouttttttttt').addEventListener('click',function(event){
    event.preventDefault();
    var cash = document.getElementById('phone-number-thired').value
var cashoutsec = parseInt(cash)
var cashPaindocument = document.getElementById('pin-code-cash-out').value;
if(cashPaindocument === '1234'){
    var balancr = document.getElementById('mainAmaut-sec').innerText;
    var balancrnumber = parseInt(balancr)
    var newamount = balancrnumber - cashoutsec;
    document.getElementById('mainAmaut-sec').innerText = newamount;
    console.log(newamount)
    document.getElementById('phone-number-thired').value = ""

    
}
else{
    alert('suiiii')
}
})
document.getElementById('cashouuttt').addEventListener('click',function(){
    
    window.location.href = "/html.html"; 
})
