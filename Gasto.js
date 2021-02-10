class Gasto{
  constructor(id, monto, descripcion, dia, mes, año){
    this.setId(id)
    this.setMonto(monto)
    this.setDescripcion(descripcion)
    this.setFecha(dia, mes, año)
  }
  setId(id){
    if(!isNaN(id)){
      this.id = id
    }else{
      throw "la id no es un numero"
    }
  }
  setMonto(monto){
    if(monto > 0){
      this.monto = monto
    }else{
      throw "el monto no puede ser negativo"
    }
  }
  setDescripcion(descripcion){
    if(descripcion.length<128){
      this.descripcion = descripcion
    }else{
      throw "descripcion muy larga"
    }
  }
  setFecha(dia, mes, año){
    try{
      this.fecha = new Date(año, mes-1, dia)
    }catch(e){
      throw "fecha invalida"
    }
  }
}
var d = "este texto si es valido"
var g = new Gasto(69, 69, d, 9, 12, 2021)
g = {
  "hola": 69
}
console.log(g)
console.log(Gasto)
module.exports = Gasto
