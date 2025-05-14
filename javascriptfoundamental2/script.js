 const mark = {
  fullName: 'markMiller',
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.Bmi =this.mass/this.height**2
    return this.Bmi
  }
 };


 const john = {
  fullName: 'johnSmith',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.Bmi = this.mass/this.height**2
    return this.Bmi
  }
 }

 mark.calcBmi()
 john.calcBmi()
 console.log(mark.Bmi,john.Bmi)

 if (mark.Bmi > john.Bmi){
  console.log(`${mark.fullName} ${mark.Bmi}) is greater than (${john.fullName}) (${john.Bmi})`)
 }else if(john.Bmi > mark.Bmi){
  console.log(`${john.fullName} (${john.Bmi}) is greater than (${mark.fullName}) ({mark.Bmi})`)
 }
 
