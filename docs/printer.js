      const btn = document.getElementById("button");

btn.addEventListener("click", function(){
var element = document.getElementById('body');
html2pdf().from(element).save('filename.pdf');
});

function printFunction() {
        window.print();
      }







