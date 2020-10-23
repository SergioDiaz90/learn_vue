<template>
	<article class="article-item">
		<!-- v-for="film in films" v-bind:key="film.title" -->
		<div class="image-wrap">
			<img 
				:src="film.image" 
				:alt="film.title"
				:title="film.title"
			>
		</div>
		<h2>{{film.title}}</h2>
		<span class="date" :class="{
			// aplicar condicionales a los componentes
			yeargreen: film.year >= 2015,
			yearred: film.year < 2015,
		}">
			{{film.year}}
		</span>
		<a href="#">Leer mas</a>
		<div class="clearfix"></div>
	</article>
</template>

<script>
	export default {
		name: 'pelicula',
		props: ['film'],
		mounted(){
			console.log(this.film);
		}
	}
</script>

<style>

</style>