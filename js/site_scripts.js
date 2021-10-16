var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i = 0; i < 6; i++) {
  fileNames.push("partner" + (i + 1));
  photos.push("<img src='images/partners/" + fileNames[i] + ".png'>");
  image = openList + photos[i] + closeList;
  imageList.push(image);
}
// document.getElementById("partners").innerHTML = imageList.join(" ");

/*----Random Codes----*/
var code = " ";
var getCode = " ";
var btnvalue; //for button boolean value
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
//determine when to able or disable button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue;
  if (btnvalue == true) {
    //set  button and label color translucent
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209,1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}
disableButton(btnvalue);
//Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode);

//run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; //get character entered
  var charset1 = getCode.trim(); //remove any hidden characters entered
  var charset2 = code.trim(); //remove any hidden characters generated
  //test if code entered matches the number of generated characters
  if (charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false); //if match, run the function to enable button
  }
}
evaluateCode();
