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

    /*
    *======LOS FILTROS FUNCIONAN POR SEPARADO======*
    */

    view.onFeel = function onFeel(botones) {
      for (var i = 0; i < botones.length; i++) {
        var listaFeel = albumes.filter(function(albumes) {
          return albumes.feel == botones[i].value;
        });
        console.log(listaFeel);
        view.render(listaFeel);
      }
    },

    view.onMany = function onMany() {
      var listaMany = albumes.filter(function(albumes) {
        return albumes.many == document.querySelector('#fMany').many.value;;
      });
      console.log(listaMany);
      view.render(listaMany);
    },

    view.onWhere = function onWhere(placed) {
      var listaWhere = albumes.filter(function(albumes) {
        return albumes.where == placed;
      });
      console.log(listaWhere);
      view.render(listaWhere);
    },

    view.onLong = function onLong() {
      var listalong = albumes.filter(function(albumes) {
        return albumes.long == document.querySelector('#howLong').long.value;
      });
      console.log(listalong);
      view.render(listalong);
    },

    view.onPopu = function onPopu(popularity) {
      var listaPopu = albumes.filter(function(albumes) {
        return albumes.popularity == popularity;
      });
      console.log(popularity);
      view.render(listaPopu);
    },

    view.setEventsFilters();
}

controller(albumes);
