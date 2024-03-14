window.addEventListener("load", function() {
  const leftButton = document.getElementById("leftButton");
  const rightButton = this.document.getElementById("rightButton");
  const upButton = document.getElementById("upButton");
  const downButton = this.document.getElementById("downButton");
  const centerButton = document.getElementById("centerButton");
  //const panel = document.getElementById("panel");
  let someName = "this";
  this.document.getElementById("P1").innerHTML=someName;
  
// Buttons
  leftButton.addEventListener("click", function() {
          panel.style.transform += "rotateY(10deg)";
      });

  rightButton.addEventListener("click", function() {
    panel.style.transform += "rotateY(-10deg)";
  });

  upButton.addEventListener("click", function() {
    panel.style.transform += "rotateX(10deg)";
  });

  downButton.addEventListener("click", function() {
    panel.style.transform += "rotateX(-10deg)";
  });

// hover function
// leftButton.addEventListener("mousemove", function() {
//      panel.style.transform += "rotateY(10deg)"; 
//   });

// rightButton.addEventListener("mousemove", function() {
//     panel.style.transform += "rotateY(-10deg)";
//   });

//   upButton.addEventListener("mousemove", function() {
//     panel.style.transform += "rotateX(10deg)";
//   });

//   downButton.addEventListener("mousemove", function() {
//     panel.style.transform += "rotateX(-10deg)";
//   });

// center button
  centerButton.addEventListener("click", function() {
    panel.style.transform = "rotateY(0deg) rotateX(0deg) rotateZ(0deg)";
  });
  
  
});