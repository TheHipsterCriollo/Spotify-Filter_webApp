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
      that.onBusqueda(album, select);
    }, false);
    return busqueda;
  },

  getAlbum: function getAlbum(albumes) {
    var album = document.createElement('div');
    album.className = 'album';
    album.innerHTML = `
      <a href="#">
      <img src="${albumes.cover}" id="albums" alt="Avatar" class="image"><br>
      <span>${albumes.album}</span>
      <h3>${albumes.autor}</h3>
      <div class="overlay">
      <div class="play"></div>
      </div>
      </a>
    `;
    var that = this;
    album.querySelector('a').onclick = function() {
      var modal = that.getModalAlbum(albumes);
      album.appendChild(modal);
    };
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

  getModalAlbum: function getModalAlbum(infoAlbum) {
    var div = document.createElement('div');

    div.innerHTML = `
      <div class="modal-backdrop fade"></div>
      <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h1 class="modal-title" align="center">${infoAlbum.album}</h1>
            </div>
            <div class="modal-body">
              <img src="${infoAlbum.cover}" width="300" height="300">
              <h3 align="center">${infoAlbum.autor}</h3>
              <input type="button" class="btn_play" align="center" value="REPRODUCIR">
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
    `;

    // seleccionamos el elemento con la clase modal
    var modal = div.querySelector('.modal');
    // seleccionamos el elemento con la clase modal-backdrop
    var backdrop = div.querySelector('.modal-backdrop');

    var boton = div.querySelector('input');
    boton.onclick = function() {
      location.href = 'https://open.spotify.com/browse/featured';
    };

    // display = 'block' debe suceder antes
    modal.style.display = 'block';

    setTimeout(function() {
      // pasamos ambos opacity al setTimeout
      modal.style.opacity = 1;
      backdrop.style.opacity = .5;
      div.querySelector('.modal-dialog').style.transform = 'translate(0,0)';
    });

    var remove = function() {
      // pasamos opacity a 0 inmediatamente para iniciar la animación
      modal.style.opacity = 0;
      backdrop.style.opacity = 0;
      setTimeout(function() {
        // eliminamos el elemento después de 300 milisegundos
        div.remove();
      }, 300);
    };
    modal.addEventListener('click', function(e) {
      if (e.target == modal) remove();
    });
    div.querySelector('button').addEventListener('click', remove);

    return div;
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

    feel.addEventListener('click', function() {
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
    var derecha = document.getElementById('derecha');
    derecha.innerHTML = ``;

    var biblioteca = this.getBiblioteca(listaAlbumes);
    var busqueda = this.getForm();
    derecha.appendChild(busqueda);
    derecha.appendChild(biblioteca);

  }
};
