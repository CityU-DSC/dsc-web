<template>
	<v-dialog v-model="show" persistent max-width="500px">
		<v-card>
			<v-img :src="eventItem.image" max-height="200px"></v-img>
			<v-list-item>
				<v-list-item-avatar
					style="background-color: white; margin-right: 1rem; "
					color="grey"
					><v-img :src="eventItem.organizerImage"></v-img>
				</v-list-item-avatar>
				<v-list-item-content
					style=""
				>
					<v-list-item-title
						class="headline"
						style="white-space: pre-wrap;"
						>by {{ eventItem.organizer }}</v-list-item-title
					>
				</v-list-item-content>

				<v-list-item-icon>
					<v-btn icon>
						<v-icon>mdi-share-variant</v-icon>
					</v-btn>
				</v-list-item-icon>
			</v-list-item>

			<v-card-title class="headline">{{ eventItem.title }}</v-card-title>

			<v-card-text>
				{{ eventItem.description }}
			</v-card-text>

			<v-card-actions>
				<v-btn text v-show="eventItem.canRegister">
					<a
						style="text-decoration: none; color: black"
						v-bind:href="eventItem.registerUrl"
						target="_blank"
						>Register</a
					>
				</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="green darken-1" text @click="show = false">
					Back
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'EventDialog',
		props: {
			value: Boolean,
			eventItem: Object,
		},

		computed: {
			show: {
				get() {
					return this.value;
				},
				set(value) {
					// if (!value) this.$emit("close");
					this.$emit('input', value);
				},
			},
		},
	};
</script>

<style scoped>
	.v-dialog__container {
		display: block;
	}
	.v-dialog__content {
		background: #00000088;
	}
  .v-dialog > .v-card > .v-card__title{
    padding-top: 0;
  }
</style>
