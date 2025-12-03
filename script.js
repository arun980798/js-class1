class car {
  constructor (brand , speed){
    this.brand = brand ;
    this.speed = speed
  }
  drive(){
  console.log(this.brand ,"  ", this.speed )
  }
}


let a  = new car( "kia", "190")