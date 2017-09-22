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

    view.onFeel = function onFeel(botones) {
      for (var i = 0; i < botones.length; i++) {
        var listaFeel = albumes.filter(function(albumes) {
          return albumes.feel == botones[i].value;
        });
        console.log(listaFeel);
        view.render(listaFeel);
      }
    },

    view.onMany = function onMany(radioButtons) {
      //console.log(albumes);
      filter = Array.prototype.filter;
      for (var x = 0; x < radioButtons.length; x++) {
        var listaMany;
        if (radioButtons[x].checked) {
          var listaMany = albumes.filter(function(albumes) {
            return albumes.many == radioButtons[x].value;
          });
          console.log(listaMany);
          view.render(listaMany);
        }
      }
    },

    view.onWhere = function onWhere(placed) {
      var listaWhere = albumes.filter(function(albumes) {
        return albumes.where == placed;
      });
      console.log(listaWhere);
      view.render(listaWhere);
    },

    view.onLong = function onLong(radioLong) {
      filter = Array.prototype.filter;
      for (var x = 0; x < radioLong.length; x++) {
        if (radioLong[x].checked) {
          var listalong = albumes.filter(function(albumes) {
            return albumes.long == radioLong[x].value;
          });
          console.log(listalong);
          view.render(listalong);
        }
      }
    },

    view.onPopu = function onPopu(popularity) {
      var listaPopu = albumes.filter(function(albumes) {
        return albumes.popularity == popularity;
      });
      console.log(popularity);
      view.render(listaPopu);
    },

    // view.onModal = function onModal(modal, img, modalImg, captionText){
    //   modal.style.display = "block";
    //   modalImg.src = this.src;
    //   captionText.innerHTML = this.alt;
    //   console.log(modal);
    // },
    //
    // view.closeModal = function (modal) {
    //   modal.style.display = "none";
    // }

  //view.render(albumes);
  view.setEventsFilters();
}

controller(albumes);
