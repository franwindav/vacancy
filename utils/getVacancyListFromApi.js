import fetch from 'node-fetch';

export default async (searchFilter, page, areas) => {
   const result = await fetch(
      `https://api.hh.ru/vacancies?currency=RUR&text=${searchFilter}&page=${page}${
         areas == 'def' ? '' : `&area=${areas}`
      }`,
   );
   const text = await result.text();
   const data = JSON.parse(text);
   const res = {
      data: data.items,
      count: data.found,
      pages: data.pages,
   };
   return res;
};
