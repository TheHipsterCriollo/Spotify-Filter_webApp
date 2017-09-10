var controller = function controller(albumes) {
  view.render(albumes);

  view.onBusqueda = function onBusqueda(album, select) {
    forEach = Array.prototype.forEach;
    forEach.call(album, function(f) {
      if (f.innerHTML.toLowerCase().search(select.toLowerCase()) == -1) {
        f.parentNode.style.display = "none";
      } else{
        f.parentNode.style.display = "block";
      }
    });
  }
}

controller(albumes);
