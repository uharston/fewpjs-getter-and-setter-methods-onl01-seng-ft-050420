// Add your Circle class he
const pi = Math.PI
class Circle {  


   constructor(radius) {  this.radius = radius
     
   }
  
  get diameter() {
    return this.radius *2 }   
  set diameter(diameter)  {
    this.radius = diameter / 2 
  }
}