<template>
	<section id="content">
		<hr>
		<h1>Hola desde el nuevo componente</h1>
		<h2>{{ subtitulos }}</h2>
		<hr/>

		<h2>Reactividad</h2>
		<input type="text" v-model="nombre">
		Mi nombres es : <strong>{{nombre}}</strong>
		<br>
		<h2>V- condicionales</h2>
		<input type="number" v-model="edad">
		Mi edad es: <strong>{{edad}}</strong>

		<p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
			!! ERES MAYOR DE EDAD !!
		</p>
		<p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
			!! ERES DE AVANZADA EDAD !!
		</p>
		<p class="alert-danger-provisional" v-else>
			!! ERES MENOR DE EDAD !!
		</p>
		<br>
		<h2>V interativos</h2>
		<ol>
			<li v-for="film in films" :key="film">{{film}}</li>
		</ol>
	</section>
</template>

<script>
export default {
	name : 'myfirstcomponent',
	data() {
		return {
			subtitulos : 'Soy el subtitulo del componente',
			nombre: '',
			edad: 18,
			films: ['Superman vs Batman', 'Harry Potter', 'Kung fu Panda', 'Spiderman']
		}
	}
}
</script>