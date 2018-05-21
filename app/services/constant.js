import Service from '@ember/service';

export default Service.extend({
	routes: [ 
		{	path: 'real-time', text: 'Real Time'}, 
		{ path: 'normal-chart', text: 'Normal Chart'}, 
		{ path: 'service-call', text: 'Service Chart'}
	]
});
