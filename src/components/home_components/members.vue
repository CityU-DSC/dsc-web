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
                    name: 'Ankolika',
                    img: 'https://i.imgur.com/p7mWrrs.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 2,
                    name: 'Eugene',
                    img: 'https://i.imgur.com/tKEJq3B.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 3,
                    name: 'Ilias',
                    img: 'https://i.imgur.com/eWOoYcv.png',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 4,
                    name: 'Leon',
                    img: 'https://i.imgur.com/0xFprG3.png',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 4,
                    name: 'Luke',
                    img: 'https://i.imgur.com/Gi4ECTp.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 6,
                    name: 'Michelle',
                    img: 'https://i.imgur.com/nYImXq8.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 7,
                    name: 'Alan',
                    img: 'https://i.imgur.com/CTvs13f.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 8,
                    name: 'Rishabh',
                    img: 'https://i.imgur.com/FiCHl0M.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 9,
                    name: 'Ryan',
                    img: 'https://i.imgur.com/UQutBa1.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 10,
                    name: 'Shawn',
                    img: 'https://i.imgur.com/9SAYR6s.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 11,
                    name: 'Su Jin',
                    img: 'https://i.imgur.com/DGG504Q.png',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 12,
                    name: 'Theresa',
                    img: 'https://i.imgur.com/A8U3bY0.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 13,
                    name: 'Varun',
                    img: 'https://i.imgur.com/N6jaKDu.jpg',
                    intro: 'Hello, My name is Ryan yen~ nice to meet you!!',
                },
                {
                    id: 14,
                    name: 'Xavier',
                    img: 'https://i.imgur.com/S01Uo1g.jpg',
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
