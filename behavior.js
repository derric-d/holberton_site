
window.onload = function(){

  const thumbnailElement = document.getElementById("smart_thumbnail");

  thumbnailElement.addEventListener("click", function(event) {
    if (thumbnailElement.className == "small") {
      thumbnailElement.className = "big";
    }else if (thumbnailElement.className == "big"){
      thumbnailElement.className = "small"
    }
  });
}

