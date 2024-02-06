function PopWinHome()
{
    window.open("index.html","width=100%", "_parent");
}


function PopWinA1()
{
    window.open("popA1.html","width=100%", "_parent");
}

function PopWinAs1()
{
    window.open("popAs1.html","width=100%", "_self");
}
function PopWinAs1_1()
{
    window.open("popAs1_1.html","width=100%", "_self");
}

function PopWinAs1_2()
{
    window.open("popAs1_2.html","width=100%", "_self");
}

function PopWinAs1_2w1()
{
    window.open("popAs1_2w1.html","","height=400,width=400,scrollbars=yes");
}

function PopWinAs1_2w2()
{
    window.open("popAs1_2w2.html","","height=400,width=400,scrollbars=yes");
}


function PopWinAr1()
{
    floatingWindow = window.open("popAr1.html","","height=400,width=400,scrollbars=yes");
}

function PopWinAe2()
{
    floatingWindow = window.open("popAe2.html","","height=300,width=300,scrollbars=no");
}

function PopWinAe3()
{
    floatingWindow = window.open("popAe3.html","","height=300,width=300,scrollbars=no");
}





const btn = document.getElementById("buttonPrintAs1_2w1");

btn.addEventListener("click", function(){
var element = document.getElementById('bodyAs1_2w1');
html2pdf().from(element).save('filename.pdf');
});

function printFunction() {
        window.print();
      }