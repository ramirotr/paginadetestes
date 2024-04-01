function applyInsaneStyles(element) {
    element.style.backgroundColor = getRandomColor();
  }
  
  function resetInsaneStyles(element) {
    element.style.backgroundColor = "#fff";
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  