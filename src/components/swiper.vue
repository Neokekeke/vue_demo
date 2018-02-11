<template>
 <div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
 </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
      setInterval(() => {
        //console.log('simulate async data')
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>

<style>

 
</style>
