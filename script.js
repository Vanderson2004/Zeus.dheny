document.getElementById("sim-button").addEventListener("click", function() {
  window.location.href = "https://youtu.be/A-0e5gaa_w4"; // Substitua o URL pelo vídeo do YouTube desejado
});

document.getElementById("nao-button").addEventListener("click", function() {
  var naoButton = document.getElementById("nao-button");
  naoButton.classList.toggle("positioned-button");
  
  if (naoButton.classList.contains("positioned-button")) {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    
    naoButton.style.left = x + "px";
    naoButton.style.top = y + "px";
  } else {
    naoButton.style.left = "";
    naoButton.style.top = "";
  }
});
