<template>
  <section id="content">
		<h2 class="subheader">Pagina de pruebas</h2>
		<h3>{{id_url}}</h3>
		<button @click="updatedName()">Update_name</button>
		<h4>{{name}}</h4>
		<button @click="redirections()">redirection</button>
  </section>
</template>

<script>
export default {
	name: 'Pagina',
	/*method for use in the creation of the component*/
	created(){
		console.log('Component created');
	},
	/*method of vue for obtain parameter by URL */
	mounted(){
		this.id_url = this.$route.params.id;
	},
	data(){
		return {
			id_url: null,
			name: 'Sergio Diaz'
		};
	},
	updated(){
		console.log('Component updated');
	},
	destroyed(){
		console.log('Component deleted');
	},
	methods: {
		updatedName(){
			this.name = 'SERGIO DIAZ AQUI';
			console.log(this.name);
		},
		redirections(){
			this.$router.push('/blog');
		}
	}
};
</script>

<style>

</style>