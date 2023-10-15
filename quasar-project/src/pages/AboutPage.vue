<template>
    <q-page class="flex flex-center">
    <h5>About</h5>
    <h3>Мы старались сделать красиво
    но оно работает через одно место,
    так что дропнули
    pepehands
    </h3>
    </q-page>

    <div class="q-pa-md">
    <q-video
    :ratio="16/9"
    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
    </div>

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
    height="300px"
    class="bg-purple text-white shadow-1 rounded-borders"
    >
    <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
        lorem
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
        lorem
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
        lorem
        </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
        lorem
        </div>
    </q-carousel-slide>
    </q-carousel>
</template>

<script>
export default {

}
</script>
