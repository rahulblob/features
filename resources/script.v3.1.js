let popCreate = document.createElement("div");
popCreate.classList = "popupC";
popCreate.innerHTML = `<div class="span"><div class="popC">&#10005</div><span id="popT"></span></div>`;
document.body.appendChild(popCreate);
function popupToggle(message){document.querySelector("#popT").innerHTML = message;document.querySelector(".popupC").style.opacity = "1";document.querySelector(".popupC").style.visibility = "visible";}
document.querySelector(".popC").addEventListener("click",function(){document.querySelector(".popupC").style.opacity = "0";document.querySelector(".popupC").style.visibility = 'hidden'});
function progressHide(){document.querySelector(".progress").style.display = "none";};
function toast(content){let toastD = document.createElement("div");toastD.classList = "toast";document.body.appendChild(toastD);document.querySelector('.toast').innerHTML = `<span>${content}</span>`;}
function rotaSettings(colour,hideIn){document.querySelector(".rota").style.borderColor = colour;document.querySelector(".rota").style.borderLeft = "3px solid rgba(255,255,255,.0)";setTimeout(()=>{document.querySelector(".rota").style.opacity = "0";document.querySelector(".rota").style.visibility = "hidden";},hideIn || none)}
document.onreadystatechange = function () {
if(document.readyState === "complete") {
console.log(document.readyState);
document.getElementById("PreLoaderBar").style.display = "none";
}}
