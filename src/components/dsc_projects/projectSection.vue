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
            <div style="padding: 0 10% 0 10%"><p>{{card.text}}</p></div>
            <div style="display: flex; justify-content: center">
                <v-btn color='primary' v-if="card.githubLink" style="margin: auto;bottom:0"><a v-bind:href="card.githubLink">GitHub link</a></v-btn>
                <v-btn v-if="card.youtubeLink" style="margin: auto;bottom:0"><a v-bind:href="card.youtubeLink">YouTube link</a></v-btn>
            </div>
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
                    image: 'https://blogs.sas.com/content/graphicallyspeaking/files/2020/02/coronavirus_covid19_dashboard.png',
                    text: 'In light of the recent impact of the novel rocona virus, we created an app that allows users to keep track of real-time COVID-19 statistics accross the world.',
                    title: 'Flutter: Covid-19 App',
                    githubLink: 'https://github.com/CityU-DSC/covid19app',
                    youtubeLink: 'https://www.youtube.com/watch?v=gbIX8AJ4DXA',
                    leftBoolean: false,
                    rightBoolean: false,
                },
                {
                    id: 2,
                    image: 'https://media-exp1.licdn.com/dms/image/C511BAQGTeYNHljkt6A/company-background_10000/0?e=2159024400&v=beta&t=7v2Mz6JhYS6SczYHeI0Y2YzNNW5S7Qu_Yao-hiw7AuU',
                    text: 'In order to promote our organization and introduce what we do, we came up with this website. It provides information of our core members, our past projects, and oncoming events.',
                    title: 'DSC website',
                    githubLink: 'https://github.com/CityU-DSC/dsc-web',
                    leftBoolean: true,
                    rightBoolean: false,
                },
                {
                    id: 3,
                    image: 'https://myusf.usfca.edu/sites/default/files/images/arts%20%26%20sciences/cas-banner-computer-science-02.jpg',
                    text: 'This website aims to provide a platform for communications between tech-savvy students and future entrepreneurs. It is a central website where people can share technological ideas, information on upcoming competitions, and cultivate uses of technology in entrepreneurship.',
                    title: 'CityU Tech Hub',
                    leftBoolean: false,
                    rightBoolean: true,
                },
            ],
        }
  }
};
</script>

<style lang="scss" scoped>

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
img {
  object-fit: cover;
}
</style>
