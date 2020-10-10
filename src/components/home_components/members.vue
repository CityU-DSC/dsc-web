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
            {{contact.intro}}
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
                    intro: 'Reading books, watching shows!',
                },
                {
                    id: 2,
                    name: 'Eugene',
                    img: 'https://i.imgur.com/tKEJq3B.jpg',
                    intro: 'I like playing indie games, and watching movies!',
                },
                {
                    id: 3,
                    name: 'Ilias',
                    img: 'https://i.imgur.com/eWOoYcv.png',
                    intro: 'History, Poetry, and a little bit of Machine Learning are my cup of tea :D',
                },
                {
                    id: 4,
                    name: 'Leon',
                    img: 'https://i.imgur.com/0xFprG3.png',
                    intro: 'Robotics lover, Frontend engineer/learner, avid gamer\nLoves bringing virtual, unrealistic ideas to the ground through software and hardware engineering',
                },
                {
                    id: 4,
                    name: 'Luke',
                    img: 'https://i.imgur.com/Gi4ECTp.jpg',
                    intro: 'Coding and Hiking, two of my favorite things',
                },
                {
                    id: 6,
                    name: 'Michelle',
                    img: 'https://i.imgur.com/nYImXq8.jpg',
                    intro: 'I like live music and stand-up comedy',
                },
                {
                    id: 7,
                    name: 'Alan',
                    img: 'https://i.imgur.com/CTvs13f.jpg',
                    intro: 'A newbie in tech, likes to brainstorm ideas a lot',
                },
                {
                    id: 8,
                    name: 'Rishabh',
                    img: 'https://i.imgur.com/FiCHl0M.jpg',
                    intro: 'Constantly challenging myself to learn and grow. Passionate Coder and an amature Guitarist',
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
                    intro: 'Professional incel',
                },
                {
                    id: 11,
                    name: 'Su Jin',
                    img: 'https://i.imgur.com/DGG504Q.png',
                    intro: 'I always strive for improvement, but not perfection',
                },
                {
                    id: 12,
                    name: 'Theresa',
                    img: 'https://i.imgur.com/A8U3bY0.jpg',
                    intro: 'Tech gadgets, productivity apps, cats and coffee!',
                },
                {
                    id: 13,
                    name: 'Varun',
                    img: 'https://i.imgur.com/N6jaKDu.jpg',
                    intro: 'Cricket. Gamer. Beleiver',
                },
                {
                    id: 14,
                    name: 'Xavier',
                    img: 'https://i.imgur.com/S01Uo1g.jpg',
                    intro: 'A novice delving into the realm of deep learning',
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
