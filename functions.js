var actualLocation = document.getElementById('actualLoc');

function changeLoc(newLoc) {
    let newLocValue = newLoc.innerText;
    actualLocation.innerText=newLocValue;
}

function activeSubMenu(item) {
    let y = document.querySelectorAll('#laCarte li');
    y=y.length+1;
    for (i=1; i<y; i++){
        let x = "eleMenu"+i;
        let ele = document.getElementById(x);
        ele.style.color = "#373737";
        ele.style.fontWeight = "normal";
    }
    item.style.color= " #d68538";
    item.style.fontWeight= "bold";
}

function closeRemove(button){
    let block = button.parentNode;
    console.log(block);
    block.style.display="none";
}

function displayChoiceDetails(){
    if (document.getElementById('deliveryRadio').checked) 
	{
        document.getElementById('deliveryBlock').style.display="block";
        document.getElementById('pickUpBlock').style.display="none";
	} else {
		document.getElementById('pickUpBlock').style.display="block";
        document.getElementById('deliveryBlock').style.display="none";
    }
}

function displayPayRecapBlocks(button){
    if (button.innerText =="Valider" || button.getAttribute("id") == "info"){
        document.getElementById("recapBlock").style.display="none";
        document.getElementById("paymentBlock").style.display="block";
    }
    else{
        document.getElementById("paymentBlock").style.display="none";
        document.getElementById("recapBlock").style.display="block";        
    }
}

function addToCart(menuItem){
    let code =menuItem.innerHTML;
    document.getElementById("selectedItem").innerHTML = code;
}

function plus(){
    let field = document.querySelector("#quantity span").innerText;
    document.querySelector("#quantity span").innerText = parseInt(field)+1;
}

function minus(){
    let field = document.querySelector("#quantity span").innerText;
    if (field==0)
    {
        ocument.querySelector("#quantity span").innerText =0;
    }
    else{
        document.querySelector("#quantity span").innerText = parseInt(field)-1;
    }
    
}

function waitReset()
{
 setTimeout(resetQuantity, 1000);
}

function resetQuantity(){
    document.querySelector("#quantity span").innerText = 1;
}