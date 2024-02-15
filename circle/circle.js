class Circle{
  constructor(a,b){
    this.radius=a;
    this.color=b;
  }
color(){
    return `1this circle color is ${this.color}`
  }
  radius(){
    return `this circle radius is ${this.radius}`
  }
  cirecleinfo(){
    return  `this circle color is ${this.color}
    and radius is ${this.radius}`
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter (diameter){
return this.radius= diameter/2;
  }
   get area(){
    return Math.PI*this.radius*this.radius
   } 
    
  }
  
  var c1 = new Circle(1.0,"red")
  console.log(c1)
  console.log(c1.color())
  console.log(c1.radius())
  console.log(c1.cirecleinfo())
  console.log(c1.diameter)
  console.log(c1. area)