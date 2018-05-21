import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('real-time', { path: '/real-time' });
  this.route('normal-chart', { path: '/normal-chart' });
  this.route('service-call');
});

export default Router;
