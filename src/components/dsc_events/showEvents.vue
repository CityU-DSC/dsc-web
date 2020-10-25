<template>
	<div class="event_page">
		<EventCarousel :events="events" />
		<EventDialog v-if='eventItemIsSelected' v-model="eventItemIsSelected" :eventItem="eventItemSelected" />
		<div>
			<h1>
				~ Events
				<v-btn icon v-on:click="showBookmarkedOnly = !showBookmarkedOnly">
					<v-icon :style="{ color: showBookmarkedOnly ? 'pink' : 'grey' }"
						>mdi-heart
					</v-icon>
				</v-btn>
				~
			</h1>
		</div>
		<b-container md-mv="4">
			<b-row>
				<b-col xs="12" sm="6" lg="4" v-for="event in events.filter(e => !showBookmarkedOnly || (showBookmarkedOnly && e.bookmarked))" :key="event.id">
					<EventCard
						class="MatCardAdvance"
						:event="event"
						@selectEvent="setEventItemSelected"
					/>
				</b-col>
			</b-row>
		</b-container>

		<!-- <EventDialog :showDialog="showDialog" :dialogDetails="dialogDetails" /> -->
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
							title: 'Title 1',
							authorName: 'Eugene Low',
							authorImage: 'https://blogs.sas.com/content/graphicallyspeaking/files/2020/02/coronavirus_covid19_dashboard.png',
							bookmarked: false,
							image:
								'https://blogs.sas.com/content/graphicallyspeaking/files/2020/02/coronavirus_covid19_dashboard.png',
							description: 'RYANYEN IS very handsome de eff e rfefefef	pqvkns ',
							registerUrl: 'https://www.google.com',
							isHighlighted: true,
						},
						{
							id: '2',
							canRegister: true,
							createdDate: new Date(),
							title: 'Title 2',
							authorName: 'Theresa Yip',
							authorImage: 'https://media-exp1.licdn.com/dms/image/C511BAQGTeYNHljkt6A/company-background_10000/0?e=2159024400&v=beta&t=7v2Mz6JhYS6SczYHeI0Y2YzNNW5S7Qu_Yao-hiw7AuU',
							bookmarked: false,
							image:
								'https://media-exp1.licdn.com/dms/image/C511BAQGTeYNHljkt6A/company-background_10000/0?e=2159024400&v=beta&t=7v2Mz6JhYS6SczYHeI0Y2YzNNW5S7Qu_Yao-hiw7AuU',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: true,
						},
						{
							id: '3',
							canRegister: false,
							createdDate: new Date(),
							title: 'AWSome Day at CityU',
							authorName: 'Theresa Yip',
							authorImage:
								'https://www.base2services.com/images/events/aws-2019@2x.jpg',
							bookmarked: true,
							image:
								'https://www.base2services.com/images/events/aws-2019@2x.jpg',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: true,
						},
						{
							id: '4',
							canRegister: false,
							createdDate: new Date(),
							title: 'GDG DevFest',
							authorName: 'Theresa Yip',
							authorImage:
								'https://www.gdghk.org/wp-content/uploads/2020/10/highres_4926381061-1772x800.png',
							bookmarked: true,

							image:
								'https://www.gdghk.org/wp-content/uploads/2020/10/highres_4926381061-1772x800.png',
							description:
								'Visit ten places on our planet that are undergoing the biggest changes today.',
							registerUrl: 'https://www.google.com',
							isHighlighted: false,
						},
					];
				},
			},
		},

		data() {
			return {
				showBookmarkedOnly: false,
        eventItemSelected: undefined,
        eventItemIsSelected: false,
			};
		},
		methods: {
			setEventItemSelected(eventId) {
        this.eventItemSelected = this.events.filter(event => event.id == eventId)[0];
        this.eventItemIsSelected = true;
			},
		},
	};
</script>

<style scoped>
	.event_page {
		margin-top: 5rem;
	}

	.event_page h1 {
		text-align: center;
		/* font-family: 'Courier New'; */
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
</style>
