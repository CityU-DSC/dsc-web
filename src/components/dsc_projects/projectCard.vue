<template>
    <v-card>
        <p>id: {{project.id}}</p>
        <p>title: {{project.title}}</p>
        <p>Github: {{project.githubUrl}}</p>
    </v-card>
</template>

<script>

   export default {
		name: 'ProjectCard',
		props: {
			project: {
				type: Object,
				// Object or array defaults must be returned from
				// a factory function
				default: function() {
					return {
						id: '123',
						title: '123',
                        githubUrl: 'Url for 123',
					};
				},
			},
		},
	};
</script>