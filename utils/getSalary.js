export default salary => {
   if (salary == undefined) {
      return '';
   }
   if (salary.from != undefined && salary.to != undefined) {
      return salary.from == salary.to ? `${salary.from} руб` : `${salary.from}-${salary.to} руб.`;
   } else if (salary.from != undefined) {
      return `от ${salary.from} руб.`;
   } else {
      return `до ${salary.to} руб.`;
   }
};
