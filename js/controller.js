var controller = function controller(albumes) {
  view.render(albumes);
  view.onBusqueda = function onBusqueda(album, select) {
      forEach = Array.prototype.forEach;
      forEach.call(album, function(f) {
        if (f.innerHTML.toLowerCase().search(select.toLowerCase()) == -1) {
          f.parentNode.style.display = "none";
        } else {
          f.parentNode.style.display = "inline-flex";
        }
      });
    },

    view.manySelected = function manySelected(radioButtons) {
      //console.log(albumes);
      filter = Array.prototype.filter;
      for (var x = 0; x < radioButtons.length; x++) {
        if (radioButtons[x].checked) {
          var listaMany;
          // if (listaFeel == null) {
          //   var listaMany = albumes.filter(function(many) {
          //     return many == true;
          //   });
          // } else {
            var listaMany = albumes.filter(function(albumes) {
              return albumes.many == radioButtons[x].value;
            });

          console.log(listaMany);
        }
      }
    }
}



controller(albumes);
