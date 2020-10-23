<template>
	<section id="content">
		<h2 class="subheader">Peliculas</h2>
		<div id='articles'>
			<article class="article-item">
				<!---  -->
				<div v-for="film in films" v-bind:key="film.title">
					<Pelicula :film="film"></Pelicula>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
import Pelicula from './pelicula.vue';
export default {
	name : 'Peliculas',
	components: {
		Pelicula
	},
	data() {
		return {
			films: [
				{title: 'Superman vs Batman', year: 2017, image: 'https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.filmaffinity.com%2Fes%2Ffilm300113.html&psig=AOvVaw0epEH27n11XJsjw0yyBIEe&ust=1601448667574000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDgwqvjjewCFQAAAAAdAAAAABAD'},
				{title: 'Harry Potter', year: 2001, image: 'https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fcinefilosoficial.com%2F2020%2F07%2F31%2Fcrecer-con-harry-potter-una-experiencia-magica%2F&psig=AOvVaw00NHXvfVMyrIya1jRtVsH1&ust=1601448745316000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjF-tnjjewCFQAAAAAdAAAAABAD'}, 
				{title: 'Kung fu Panda', year: 2010, image: 'https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fredcoomeva.com%2Fblog%2Fgeneral%2Feres-un-kung-fu-panda-del-liderazgo&psig=AOvVaw0OMa_Nk-d9PLw48jDqih4D&ust=1601448876627000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjavI7kjewCFQAAAAAdAAAAABAD'}, 
				{title: 'Spiderman', year: 2017, image: 'https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.entrepreneur.com%2Farticle%2F340117&psig=AOvVaw355LlDmNL9dzXjRqnv95OH&ust=1601448931889000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDuzKrkjewCFQAAAAAdAAAAABAD'}
			]
		}
	}
}
</script>