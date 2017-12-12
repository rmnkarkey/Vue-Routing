import Vue from 'vue';
import Router from 'vue-router';
import message from './components/message.vue';
import anMessage from './components/anothermessage.vue';

Vue.use(Router);

export default new Router({

	routes:[
		{
			path:'/',
			name:'message',
			component:message
		},
		{
			path:'/anothermessage',
			name:'anMessage',
			component:anMessage
		}
	]
})