let popCreate = document.createElement("div");
popCreate.classList = "popupC";
popCreate.innerHTML = `<div class="span"><div class="popC">&#10005</div><span id="popT"></span></div>`;
document.body.appendChild(popCreate);
function popupToggle(message){document.querySelector("#popT").innerHTML = message;document.querySelector(".popupC").style.opacity = "1";document.querySelector(".popupC").style.visibility = "visible";}
document.querySelector(".popC").addEventListener("click",function(){document.querySelector(".popupC").style.opacity = "0";document.querySelector(".popupC").style.visibility = 'hidden'});

