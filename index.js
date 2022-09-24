var json ='{"nombre":"axel","edad":23,"nacionalidad":"Mexicana","hobbies":["musica","video juegos","anime"],"mascota":{"especie":"perro","nombre":"soloregreso","edad":12}}';
var obj =  JSON.parse(json);
var nombreMascota = obj.mascota.nombre;
console.log(nombreMascota);