import mainService from './mainService';

class pageService extends mainService {
   constructor() {
      super();
      this.pageCount = 0;
   }

   changeCountPage(newPageCount) {
      this.pageCount = newPageCount;

      return this.emit('changeCountPage', newPageCount);
   }
}

const SERVICE = new pageService();

export default SERVICE;
