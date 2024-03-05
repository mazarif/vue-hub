<template>
	<div>
		
		
		<!-- <h2>PokeApi : {{ PokeApiPackages }}</h2> -->
	</div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'PokeApi',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
			PokeApiPackages:null,
			
		};
	},
	created() {

		fetch("https://pokeapi.co/api/v2/pokemon/")
		.then(response => response.json())
		.then(data => (this.pokeApiPackages = data.results))
		.catch((e)=>(console.log(e)))
		console.log('results')

	},

	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
	},
});
</script>

<style scoped lang="css">
</style>