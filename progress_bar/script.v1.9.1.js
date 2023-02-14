let divC = document.createElement("div");
divC.classList = "progress";
divC.id = "PreLoaderBar";
  divC.innerHTML = "<div class='indeterminate'/>";
  document.body.appendChild(divC);
document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                console.log(document.readyState);
                document.getElementById("PreLoaderBar").id = "";
                divC.classList = "";
                divC.innerHTML = "";
          }
        }
