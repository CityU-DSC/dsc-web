TODO: Theresa this is the base of event page, take those CSS out of their inline
and put it nicely at the bottom of the page.

<template>
	<div class="event_page">
		<EventCarousel :events="events" />
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
				<b-col xs="12" sm="6" lg="4" v-for="event in events" :key="event.id" :style='{'display': (!showBookmarkedOnly || (showBookmarkedOnly && event.bookmarked)?'block':'none') }'>
					<EventCard
						class="MatCardAdvance"
						:event="event"
						v-if="
							!showBookmarkedOnly || (showBookmarkedOnly && event.bookmarked)
						"
					/>
				</b-col>
			</b-row>
		</b-container>

		<EventDialog :showDialog='showDialog' :dialogDetails='dialogDetails'/>
		<div style="height: 100vh"></div>
	</div>
</template>

<script>
	import EventCard from './eventCard';
	import EventDialog from './eventDialog';
	import EventCarousel from './eventCarousel';

	export default {
		name: 'ShowEvents',
		components: {
			EventCard,
			EventCarousel,
			EventDialog,
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
							isHighlighted: true,
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
		method: {
			
		}
	};
</script>

<style scoped>
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
