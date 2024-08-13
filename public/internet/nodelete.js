var textArea = document.getElementById("text-area");

getWordCount(textArea);

textArea.addEventListener("keydown", (e) => {
  if(e.keyCode == 8){
    e.preventDefault();
    return false;
  }
  getWordCount(e.target);
  return true;
});

document.getElementById("reset").addEventListener("click", (e) => {
  textArea.value = "";
  getWordCount(textArea);
});

function getWordCount(target){
  var words = target.value.split(" ").filter((s) => s !== "").length;
  document.getElementById('word-count').innerHTML = words + " words";
}

var download = document.getElementById("download")
download.addEventListener("click", (e) => {
  var file = new Blob([textArea.value], {type: "text/plain"});
      url = URL.createObjectURL(file);
  download.href = url;

  var today = new Date();
  download.download = today.toDateString().replace(/\s/g, "_") + "_writing.txt";

  textArea.value = "";
  getWordCount(textArea);
  return true;
});