import Vue from 'vue'
import Router from 'vue-router';
import anMessage from './components/anothermessage.vue';
import message from './components/message.vue';
import routingP from './components/routingPage.vue'
Vue.use(Router);

const router = new Router({

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

new Vue({
  el: '#app',
  router,
  template:'<routingP/>',
  components:{routingP}
})
