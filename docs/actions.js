var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        for (var j = 0; j < images.length; j++) {
            if (i != j) {
                images[j].style.transform = "scale(1)";
            }
          }
        this.style.transform = "scale(1.3)";
        this.style.margin='40px'
    });
}

function PopWindowOne()
{
    floatingWindow = window.open("PopIt1.html","","height=400,width=400,scrollbars=yes");
}

function PopWindowTwo()
{
    floatingWindow = window.open("PopIt2.html","","height=400,width=300,scrollbars=no");
}