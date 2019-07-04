import mainService from './mainService';
import PAGE_SERVICE from './pageService';

class SearchService extends mainService {
   constructor() {
      super();
      this.searchText = '';
      this.areasID = 'def';
      this.areasName = 'Все';
   }

   changeSearchFilter(newSearchFilter) {
      PAGE_SERVICE.pageCount = 0;
      this.searchText = newSearchFilter;
      return this.emit('changeSearchFilter', newSearchFilter);
   }

   changeAreasID(id, name) {
      PAGE_SERVICE.pageCount = 0;
      this.areasID = id;
      this.areasNameS = name;
      return this.emit('changeAreas', id);
   }
}

const SERVICE = new SearchService();

export default SERVICE;
