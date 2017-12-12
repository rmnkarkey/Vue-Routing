<template>
<div>
	<h1>Welcome</h1>
	<ul>
      <li><router-link :to="{name: 'message'}">one</router-link></li>
      <li><router-link :to="{name: 'anMessage'}">two</router-link></li>
      </ul>

	<router-view></router-view>
</div>
</template>

<script>
	export default{
		name:'routingPage'
	}
</script>