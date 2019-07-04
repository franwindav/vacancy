class mainService {
   store = {};

   on(event, func, context) {
      if (!this.store[event]) this.store[event] = [];
      this.store[event].push({
         func,
         ctx: context,
      }) - 1;
      return {
         remove: () => {
            this.store[event] = this.store[event].filter(e => e.ctx != context);
         },
      };
   }

   emit(event, args) {
      if (!this.store[event] || !this.store[event].length) return false;
      const _store = this.store;
      setTimeout(() => {
         const subs = _store[event];
         let i = subs.length;
         while (i--) {
            subs[i].func.call(subs[i].ctx, args);
         }
      });
      return true;
   }
}
export default mainService;
