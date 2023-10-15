<template>
    <q-page class="flex flex-center column">
    <h3>About</h3>
    <h6>Мы старались сделать красиво
    но оно работает через одно место,
    pepehands
    </h6>
    </q-page>

    <div class="q-pa-md">
    <q-video
    :ratio="23/9"
    src="https://www.youtube.com/embed/QBvrPSJhCGQ?si=HkVtvPDupwab2ZS-"
    />
    </div>

    <div class="q-pa-md">
    <q-carousel
    v-model="slide"
    vertical
    transition-prev="slide-down"
    transition-next="slide-up"
    swipeable
    animated
    control-color="white"
    navigation-icon="radio_button_unchecked"
    navigation
    padding
    arrows
    height="400px"
    class="bg-purple text-white shadow-1 rounded-borders"
    >
    <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
        Сдесь могла быть ваша реклама
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <img src="../assets/cup_of_soup.jpg" alt="">
    </q-carousel-slide>
    <q-carousel-slide name="style1" class="column no-wrap flex-center">
        <q-icon name="paid" size="56px" />
        <div class="q-mt-md text-center">
        Сдесь могла быть ваша реклама X2
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv1" class="column no-wrap flex-center">
        <img src="../assets/cup_of_soup.jpg" alt="">
    </q-carousel-slide>
    <q-carousel-slide name="style2" class="column no-wrap flex-center">
        <q-icon name="visibility" size="200px" />
        <div class="q-mt-md text-center">
        Сдесь могла быть ваша реклама X3
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv2" class="column no-wrap flex-center">
        <img src="../assets/cup_of_soup.jpg" alt="">
    </q-carousel-slide>
    </q-carousel>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  data () {
    return {
      slide: ref('style')
    }
  }
}
</script>
