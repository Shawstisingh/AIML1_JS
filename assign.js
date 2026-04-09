document.getElementById("myButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

//increase font size
document.getElementById("increaseFont").addEventListener("click", function() {
 
    fontSize +=2;
    paragraph.style.fontSize = fontSize + "px";

});
//show or hide paragraph
document.getElementById("toggleParagraph").addEventListener("click", function() {
    if(paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
        else{
            paragraph.style.display = "none";
        }
});

//reset page
document.getElementById("resetPage").addEventListener("click", function() {
    HTMLHeadingElement.innerHTML = "Welcome To JavaScript Lab";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    document.body.style.backgroundColor = "white";
    input.value  ="";
    fontSize = 16;
}); 