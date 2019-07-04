import mainService from './mainService';
import PAGE_SERVICE from './pageService';

class searchService extends mainService {
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
      this.areasName = name;
      return this.emit('changeAreas', id);
   }
}

const SERVICE = new searchService();

export default SERVICE;
