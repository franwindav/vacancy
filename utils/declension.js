//one: вакансий
//two: вакансия
//three: вакансии
//
export default (count, one = '', two = '', three = '') => {
   let x = count + '';
   let y = Number(x[x.length - 2] + x[x.length - 1]);
   if (y > 4 && y < 21) return one;
   y = Number(x[x.length - 1]);
   switch (true) {
      case y == 1: {
         return two;
      }
      case y < 5: {
         return three;
      }
      case y < 10 || y == 0: {
         return one;
      }
   }
};
