<template>
	<!--TODO: Theresa please add Media Query to make the high slighly more responsive, otherwise can consider using vw, vh-->
	<v-carousel
		cycle
		height="50vh"
		hide-delimiter-background
		:show-arrows="false"
	>
		<div v-for="event in events" :key="event.id">
			<v-carousel-item v-if="event.isHighlighted">
				<v-sheet
					:style="{ 'background-image': `url(${event.image})` }"
					style="background-size: cover;"
					height="100%"
				>
					<v-row
						style="align-items: center; justify-content:center; display:flex; overflow:hidden; text-align: center; font-family: 'Courier New'"
						class="fill-height"
					>
						<p style="font-size:40px; width:80%; color: black; text-shadow: 0px 0px 2px white;">{{ event.title }}</p>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</div>
	</v-carousel>
</template>

<script>
	export default {
		name: 'EventCarousel',
		props: {
			events: {
				type: Array,
				default: function() {
					return [];
				},
			},
		},
	};
</script>

<style></style>
