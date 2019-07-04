export default employer => {
   if (employer == undefined) return;
   if (employer.logo_urls == undefined) return;
   return employer.logo_urls['240'];
};
