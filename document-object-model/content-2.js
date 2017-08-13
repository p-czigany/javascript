const change = function changeFunction(classToChange, classToFillWith) {
  document.querySelector(classToChange).textContent
    = document.querySelector(classToFillWith).textContent;
};

change('.dog', '.cat');
change('.cat', '.balloon');
change('.balloon', '.apple');
