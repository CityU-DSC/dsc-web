<template>
  <section id="two" class="wrapper">
    <div class="box">
      <b-card 
        v-for="card in cards"
        :key="card.id"
        img-alt="Card image"
        :img-right= card.rightBoolean
        :img-left = card.leftBoolean
        :img-src = card.image
        img-width= 40%
        class="mb-3"
      >
        <b-card-text>
            <h2>{{card .title}}</h2>
            <p>{{card.text}}</p>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return{
            cards:[
                {
                    id: 1,
                    image: 'https://wallpapercave.com/wp/wp5315781.jpg',
                    text: 'this is the first',
                    title: 'Hello First',
                    leftBoolean: false,
                    rightBoolean: false,
                },
                {
                    id: 2,
                    image: 'https://mocah.org/uploads/posts/503030-advice-advise.jpg',
                    text: 'this is the second',
                    title: 'Second',
                    leftBoolean: true,
                    rightBoolean: false,
                },
                {
                    id: 3,
                    image: 'https://images2.alphacoders.com/698/698137.jpg',
                    text: 'this is the third',
                    title: 'Third',
                    leftBoolean: false,
                    rightBoolean: true,
                },
            ],
        }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.wrapper {
  padding: 6em 0;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("../../assets/images/banner3.jpg");
  border-top: 0;
  height: auto;
  text-align: center;
  overflow: hidden;
}

.box {
  min-width: 80%;
  max-height: auto;
  height: auto;
  background-color: rgba($color: white, $alpha: 0);
  display: block;
  overflow: hidden;
  width: 50%;
  margin: auto;
}

.embeded-video {
  margin: 2em 0 2em 0;
}
</style>
