function upDate(previewPic) {
  console.log("upDate event triggered");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
  imageDiv.style.borderColor = "#38bdf8";
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.style.borderColor = "rgba(148, 163, 184, 0.25)";
  imageDiv.textContent = "Hover over an image below to display here.";
}