const student = { 
     id:150,
     name:'rabin',
     major:'Mathematise',
     blance:5000,
     isRich: true ,
     subject:['bangla','english', 'physics', 'chemstry', 'biology'],
     skils: {
      
        progmaing:'js'
     },

     takeExam: function () {
    console.log(this.major);
     },

     treatDey: function (expensise) {
         this.blance = this.blance- expensise;
         return this.blance;
     }
    }

// const remaing = student.treatDey(1000);
// console.log(remaing);
console.log(student.subject);