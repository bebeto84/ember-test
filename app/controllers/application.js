
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // needs: 'application',
  constantService: service('constant'),
  routeText: '',
  init(){
    this._super(...arguments);
    this.set('routes', this.constantService.routes)
  },
  currentPathDidChange: function() {
    const currentRoute = this.constantService.routes
      .find((r) => r.path  === this.get('currentPath'));
    this.set('routeText',  currentRoute === null ? '' : currentRoute.text)
  }.observes('currentPath'),

	actions: {
    // linkClicked(route) {
    //   this.transitionToRoute(route.path);
    // },
    isActive(route) {
      return route.path === this.currentPath ? 'active' : '';
    }
  }
});


