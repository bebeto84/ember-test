import Controller from '@ember/controller';

export default Controller.extend({
	ajax: Ember.inject.service(),
	numberPosts: 40,
	posts: [],
	chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Posts done by user'
    },
    xAxis: {
      categories: ['userId']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Posts'
      }
    }
	},
	init() {
		this.sendRequest()
			.then((posts) => {
				this.set('posts', posts);
					// Get unique User ids
				const uniqueUsers = [...(new Set(posts.map(({ userId }) => userId)))];
				this.set('users', uniqueUsers);
				this.refreshData();
			})
		
	},
	sendRequest() {
		return this.get('ajax').request('/posts', {
			method: 'GET'
		});
	},
	actions: {
		refresh: function(event){ 
			this.refreshData();
		}
	},
	refreshData() {
		const dataGroupedBy = [];
		const numberPosts = this.get('numberPosts');
		const randomPosts = this.getRandomPosts(this.get('posts'));
		const uniqueUsers = this.get('users');
			uniqueUsers
				.forEach((userId) => {
					const newItem = { data: 0, id: userId};
					newItem.data = randomPosts
						.filter((post) => post.userId === userId).length;
					dataGroupedBy.push(newItem);
			});	
		this.set('chartData', dataGroupedBy);
	},
	getRandomPosts(posts) {
		const randomPosts = [];
		const numberPosts = this.get('numberPosts');
		for(let i = 0; i< numberPosts; i++) {
			randomPosts.push (posts [Math.floor(Math.random()*posts.length)]);
		}
		return randomPosts;
	}
});
