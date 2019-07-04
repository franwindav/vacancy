export default experience => {
   let str = 'Требуемый опыт работы: ';
   switch (experience.id) {
      case 'noExperience': {
         str += 'без опыта работы';
         break;
      }
      case 'between1And3': {
         str += '1-3 лет';
         break;
      }
      case 'between3And6': {
         str += '3-6 лет';
         break;
      }
      case 'moreThan6': {
         str += 'более 6';
         break;
      }
      default: {
         str += experience.name;
      }
   }
   return str;
};
