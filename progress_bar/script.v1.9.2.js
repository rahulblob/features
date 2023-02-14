let jqueryC = document.createElement("script");
jqueryC.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
document.head.appendChild(jqueryC);
let divC = document.createElement("div");
divC.classList = "progress";
divC.id = "PreLoaderBar";
  divC.innerHTML = "<div class='indeterminate'/>";
  document.body.appendChild(divC);
document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                console.log(document.readyState);
                divC.remove();
          }
        }
