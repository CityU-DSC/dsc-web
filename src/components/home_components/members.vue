<template>
  <div class="wrapper">
    <b-card 
        style="max-width: 15rem; display:inline-block;" 
        class="m-1"
        v-for='contact in contacts'
        :key="contact.id"
        :img-src='contact.img'
    >
      <template v-slot:footer>
        <b-button variant="dark" block v-b-toggle.collapse-2>
          {{contact.name}}
        </b-button>
      </template>

      <b-collapse id="collapse-2">
        <b-card>
          <b-card-text>
            {{contact.info}}
          </b-card-text>
        </b-card>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contacts:[
                {
                    id: 1,
                    name: 'Lead - Ryan Yen',
                    img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 2,
                    name: '2 - Ryan Yen',
                    img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 3,
                    name: '3 - Ryan Yen',
                    img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 4,
                    name: '4 - Ryan Yen',
                    img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 5,
                    name: '5 - Ryan Yen',
                    img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },

            ]
        }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  align-items: center;
  padding: 4em;
  justify-content: center;
  background-color: black;
  border-top: 0;
  height: 100%;
  min-height: 30vh;
  width: 100%;
  text-align: center;
  overflow: hidden;
}
</style>
