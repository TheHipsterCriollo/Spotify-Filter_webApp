var view = {
  getMenu: function getMenu() {
    var izquierda = document.createElement('div');
    izquierda.id = 'izquierda';
    izquierda.innerHTML = `
<img id="logo" src="source/Crescendo_logo.png" alt="Crescendo_logo" width="50" height="50">
<div id="filtros"></div>
`;
    var filtros = izquierda.querySelector('#filtros');
    filtros.appendChild(this.getFeel());
    filtros.appendChild(this.getMany());
    filtros.appendChild(this.getPlace());
    filtros.appendChild(this.getLong());
    filtros.appendChild(this.getPopularity());
    return izquierda;
  },

  getForm: function getForm() {
    var busqueda = document.createElement('div');
    busqueda.id = 'buscar';
    busqueda.innerHTML = `
    <form action="buscar"><input type="text" id="buscar" placeholder="Buscar"></form>
    `;
    var that = this;
    var search = busqueda.querySelector('input');
    var album = document.getElementsByTagName("span");
    search.addEventListener('keyup', function(e){
      var select = this.value;
      console.log(select);
      that.onBusqueda(album, select);
    }, false);
    return busqueda;
  },

  getAlbum: function getAlbum(albumes) {
    var album = document.createElement('li');
    album.innerHTML = `
    <div class="album">
      <a href="#">
      <img src="${albumes.cover}" alt="Avatar" class="image">
      <span>${albumes.album}</span>
      <h3>${albumes.autor}</h3>
      <div class="overlay">
        <div class="play"></div>
      </div>
      </a>
    </div>
    `;
    return album;
  },

  getBiblioteca: function getBiblioteca(albumes) {
    var biblio = document.createElement('div');
    biblio.id = 'biblioteca';
    var biblioteca = document.createElement('ul');
    var that = this;
    albumes.forEach(function(album) {
      var thisAlbum = that.getAlbum(album);
      biblioteca.appendChild(thisAlbum);
      biblio.appendChild(biblioteca);
    });
    return biblio;
  },

  getFeel: function getFeel() {
    var feel = document.createElement('div');
    feel.id = 'feeling';
    feel.innerHTML = `
    <h3> I feel: </h3>
    <button> Happy </button>
    <button> Nostalgic </button>
    <button> Rock that </button>
    <button> Concentrated </button>
    <button> Party all night </button>
    <button> Raise my power </button>
    `;
    return feel;
  },

  getMany: function getMany() {
    var many = document.createElement('div');
    many.id = 'many';
    many.innerHTML = `
    <h3> How Many: </h3>
    <form>
    <input type="radio" name="many" value="me"> Just Me <br>
    <input type="radio" name="many" value="couple"> Couple <br>
    <input type="radio" name="many" value="party"> Party-4-Three <br>
    <input type="radio" name="many" value="cares"> Who Cares? <br>
    </form>
    `;
    return many;
  },

  getPlace: function getPlace() {
    var place = document.createElement('div');
    place.id = 'where';
    place.innerHTML = `
    <h3> Where: </h3>
    <select id="where" name="where">
       <option value="1">My Room</option>
       <option value="2">Living</option>
       <option value="3">Beat the House</option>
       <option value="4">Street</option>
       <option value="5">The Gym</option>
       <option value="6">Turn on the Disco</option>
    </select>
    `;
    return place;
  },

  getLong: function getLong() {
    var long = document.createElement('div');
    long.id = 'long';
    long.innerHTML = `
    <h3> How long: </h3>
    <form>
    <input type="radio" name="long" value="30"> For a while <br>
    <input type="radio" name="long" value="45"> Around and Hour <br>
    <input type="radio" name="long" value="50"> Three hours <br>
    <input type="radio" name="long" value="60"> Time is infinity <br>
    </form>
    `;
    return long;
  },

  getPopularity: function getPopularity() {
    var range = document.createElement('div');
    range.id = 'popularity';
    range.innerHTML = `
    <h3> How popular: </h3>
    <form>
    <input type="range" min="1" max="5" list="popu">
    <datalist id="popu">
    <option value="1">
    <option value="2">
    <option value="3">
    <option value="4">
    <option value="5">
    </datalist>
    <p id="popularidad"> Rango </p>
    </form>
    `;
    return range;
  },

  render: function(listaAlbumes) {
    var main = document.getElementById('container');
    var derecha = document.createElement('div');
    derecha.id = 'derecha';
    var biblioteca = this.getBiblioteca(listaAlbumes);
    var izquierda = this.getMenu();
    var busqueda = this.getForm();
    derecha.appendChild(busqueda);
    derecha.appendChild(biblioteca);
    main.appendChild(izquierda);
    main.appendChild(derecha);
  }
};
