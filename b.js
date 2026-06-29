 function additem(){
            var it= document.getElementById("in").value;
                 if (it.trim() === ""){
                    return;
                 }
            var ele= document.createElement("li");

            ele.innerHTML=`<div class="item-row"><h2>${it}</h2> <button onclick="this.parentElement.parentElement.remove()">delete</button></div>`;

            document.getElementById("list").append(ele);
            document.getElementById("in").value="";
        }

        function exportpdf(){
            window.print()
        }