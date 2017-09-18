var view = {

  getForm: function getForm() {
    var busqueda = document.createElement('div');
    busqueda.id = 'buscar';
    busqueda.innerHTML = `
    <form action="buscar"><input type="text" id="buscar" placeholder="Buscar"></form>
    `;
    var that = this;
    var search = busqueda.querySelector('input');
    var album = document.getElementsByTagName('a');
    search.addEventListener('keyup', function(e) {
      var select = this.value;
      console.log(select);
      that.onBusqueda(album, select);
    }, false);
    return busqueda;
  },

  getAlbum: function getAlbum(albumes) {
    var album = document.createElement('div');
    album.className = 'album';
    album.innerHTML = `
      <a href="#">
      <img src="${albumes.cover}" alt="Avatar" class="image"><br>
      <span>${albumes.album}</span>
      <h3>${albumes.autor}</h3>
      <div class="overlay">
      <div class="play"></div>
      </div>
      </a>
    `;
    return album;
  },

  getBiblioteca: function getBiblioteca(albumes) {
    var biblio = document.createElement('div');
    biblio.id = 'biblioteca';
    var that = this;
    albumes.forEach(function(album) {
      var thisAlbum = that.getAlbum(album);
      biblio.appendChild(thisAlbum);
    });
    return biblio;
  },

  setEventsFilters: function setEventsFilters(e) {
    var filters = document.getElementById('filtros');
    var feel = filters.querySelector('#feeling');
    var many = filters.querySelector('#many');
    var where = filters.querySelector('#where');
    var long = filters.querySelector('#long');
    var popularity = filters.querySelector('#popularity');
    var that = this;

    var botones = document.getElementsByName('feel');
    var radioButtons = document.getElementsByName('many');
    var placed = where.querySelector('#where');
    var radioLong = document.getElementsByName('long');
    var popu = popularity.querySelector('#popul');

    feel.addEventListener('click', function () {
      that.onFeel(botones);
    });
    where.addEventListener('change', function() {
      that.onWhere(placed.value);
    });
    many.addEventListener('change', function() {
      that.onMany(radioButtons);
    });
    long.addEventListener('change', function() {
      that.onLong(radioLong);
    });
    popularity.addEventListener('change', function() {
      that.onPopu(popu.value);
    });
  },

  render: function(listaAlbumes) {
    var main = document.getElementById('container');
    var derecha = document.createElement('div');
    derecha.id = 'derecha';
    var biblioteca = this.getBiblioteca(listaAlbumes);
    var busqueda = this.getForm();
    derecha.appendChild(busqueda);
    derecha.appendChild(biblioteca);
    main.appendChild(derecha);
  }
};
