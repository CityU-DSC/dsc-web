<template>
	<div class="event_page">
		<v-carousel
			cycle
			height="400"
			hide-delimiter-background
			:show-arrows="false"
		>
			<div v-for="event in events" :key="event.id">
				<v-carousel-item v-if="event.isHighlighted">
					<v-sheet :style="{ 'background-color': 'black' }" height="100%">
						<v-row
							style="align-items: center; justify-content:center; display:flex; overflow:hidden; text-align: center; font-family: 'Courier New'"
							class="fill-height"
						>
							<div style="font-size:40px; width:80%">{{ event.title }}</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>
			</div>
		</v-carousel>
		<div>
			<h1>
				~ Events<v-btn
					icon
					v-on:click="showBookmarkedOnly = !showBookmarkedOnly"
				>
					<v-icon :style="{ color: showBookmarkedOnly ? 'pink' : 'grey' }"
						>mdi-heart</v-icon
					>
				</v-btn>
				~
			</h1>
		</div>
		<b-container md-mv="4">
			<b-row>
				<b-col xs="12" sm="6" lg="4" v-for="event in events" :key="event.id">
					<MatCardAdvance
						class="MatCardAdvance"
						:event="event"
						v-if="
							!showBookmarkedOnly || (showBookmarkedOnly && event.bookmarked)
						"
					/>
				</b-col>
			</b-row>
		</b-container>

		<div style="height: 100vh"></div>
	</div>
</template>

<script>
	import MatCardAdvance from './matCardAdvance';
	export default {
		name: 'ShowEvents',

		components: {
			MatCardAdvance,
		},
		props: {
			events: {
				type: Array,
				default: function() {
					return [
						{
							id: '1',
							canRegister: true,
							createdDate: new Date(),
							title:
								'VERY LONG TITLEEEEEEEEEEEEE EEEasdasd asd asdas dasd asdas',
							authorName: 'Eugene Low',
							authorImage: '',
							bookmarked: false,
							image:
								'https://images-na.ssl-images-amazon.com/images/I/81Vr0-VQhOL._AC_SX425_.jpg',
							description:
								'RYANYEN IS VEasdovqnuoeb vojq vjoasbnjonajsodnasl dkas jdansodnalsdkasodno RY HANDSOME asdjajivqnoebqojnqeo lqbojbeqjbeqjnoeqopjnbopneqneoqjnpjkqevqp j jpfepj onqpnqvpnkpq	pqvkns ',
							registerUrl: 'https://www.google.com',
							isHighlighted: true,
						},
						{
							id: '2',
							canRegister: true,
							createdDate: new Date(),
							title: 'VERY LONG sd asdas dasd',
							authorName: 'Theresa Yip',
							bookmarked: false,
							image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: false,
						},
						{
							id: '3',
							canRegister: false,
							createdDate: new Date(),
							title: 'VERY LONG  asd asdas dasd',
							authorName: 'Theresa Yip',
							bookmarked: true,
							image:
								'https://images-na.ssl-images-amazon.com/images/I/81Vr0-VQhOL._AC_SX425_.jpg',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: true,
						},
						{
							id: '4',
							canRegister: false,
							createdDate: new Date(),
							title: 'VERY LONG  asd asdas dasd',
							authorName: 'Theresa Yip',
							bookmarked: true,

							image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: false,
						},
					];
				},
			},
		},
		data: () => ({
			showBookmarkedOnly: false,
		}),
	};
</script>

<style>
	.event_page {
		margin-top: 7rem;
	}
	.event_page h1 {
		text-align: center;
		font-family: 'Courier New';
		font-weight: 0;
		margin-top: 10px;
	}
	.event_page b-container {
		display: flex; /* or inline-flex */
		flex-wrap: wrap;
	}
	.event_page .MatCardAdvance {
		transition: 0.2s ease;
	}
	.event_page .MatCardAdvance:hover {
		transform: scale(1.05);
		z-index: 20;
	}
</style>
