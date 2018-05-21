import Controller from '@ember/controller';

export default Controller.extend({
	title: 'Example of usage of Hightchart 1 - with componitization',
	chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [
    {
      name: 'Jane',
      data: [5, 0, 20]
    },
    {
      name: 'John',
      data: [25, 30, 15]
    }
	],
});
