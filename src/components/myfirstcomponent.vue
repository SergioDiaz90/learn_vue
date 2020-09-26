<template>
	<div id="content-wrapper">
		<hr>
		<h1>Hola desde el nuevo componente</h1>
		<h2>{{ subtitulos }}</h2>
		<hr/>
	</div>
</template>

<script>
export default {
	name : 'myfirstcomponent',
	data() {
		return {
			subtitulos : 'Soy el subtitulo del componente'
		}
	}
}
</script>