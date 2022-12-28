const fecha = new Date()
console.log(fecha);
const fechaNac= new Date(1985,12,18)

const comp= fecha > fechaNac;
console.log(comp);


const fechaDia= fechaNac.getDate();
const fechaMes= fechaNac.getMonth();
const fecha_Año=fechaNac.getFullYear();
console.log(fechaDia);
console.log(fechaMes);
console.log(fecha_Año);
