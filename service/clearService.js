import mainService from './mainService';
import PAGE_SERVICE from './pageService';
import SEARCH_SERVICE from './searchService';

class clearService extends mainService {
   clearAll(props) {
      if (props.page) PAGE_SERVICE.pageCount = 0;
      if (props.search) SEARCH_SERVICE.searchText = '';
      if (props.areas) SEARCH_SERVICE.areasID = 'def';
      this.emit('Clear', props);
      return this.emit('Clear', props);
   }
}

const SERVICE = new clearService();

export default SERVICE;
