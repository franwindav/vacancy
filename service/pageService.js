import mainService from './mainService';

class PageService extends mainService {
   constructor() {
      super();
      this.pageCount = 0;
   }

   changeCountPage(newPageCount) {
      this.pageCount = newPageCount;

      return this.emit('changeCountPage', newPageCount);
   }
}

const SERVICE = new PageService();

export default SERVICE;
