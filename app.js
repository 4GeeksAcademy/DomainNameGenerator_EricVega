// Listas de palabras para generar combinaciones de dominio
let pronombres = ['el', 'nuestro'];
let adjetivos = ['gran', 'enorme'];
let sustantivos = ['corredor', 'mapache'];
let extensiones = ['.com', '.net', '.us', '.io'];

// Generación de dominios estándar
for (let i = 0; i < pronombres.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let k = 0; k < sustantivos.length; k++) {
      for (let l = 0; l < extensiones.length; l++) {
        // Imprimir la combinación estándar con extensión
        console.log(pronombres[i] + adjetivos[j] + sustantivos[k] + extensiones[l]);
      }
    }
  }
}

// Lista adicional para "domain hacks" específicos
let domainHacks = [
  { base: 'pued', extension: '.es' }, // Crea "pued.es"
];

// Generación de "domain hacks" utilizando hacks específicos
for (let i = 0; i < pronombres.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let hack of domainHacks) {
      // Imprimir el "domain hack"
      console.log(pronombres[i] + adjetivos[j] + hack.base + hack.extension);
    }
  }
}
