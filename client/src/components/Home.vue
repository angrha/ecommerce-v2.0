<template>
<div class="flex-ca">
  <div class="container-fluid col-md-9">
    <div id="cssSlider">
      <div id="sliderImages">
        <img v-for="c in carousel" :key="c.id" :src="c.img" alt="paint"/>
        <div style="clear:left;"></div>
      </div>
    </div>
    <PaintList/>
  </div>
  <Sidebar/>
</div>
</template>

<script>
import PaintList from '@/components/PaintList'
import Sidebar from '@/components/Sidebar'
import { mapActions } from 'vuex'
export default {
  components: {
    PaintList,
    Sidebar
  },
  data () {
    return {
      carousel: [
        {
          id: 'si_1',
          img: 'http://www.skratch.design/bac/Art/slide3.jpg'
        },
        {
          id: 'si_2',
          img: 'http://www.sunnie.co.uk/wp-content/slider/SK_4/data1/images/1000_20130525173148.jpg'
        },
        {
          id: 'si_3',
          img: 'https://www.moymackaygallery.com/wp-content/uploads/2013/03/moy-book-slider.jpg'
        },
        {
          id: 'si_4',
          img: 'https://shariblaukopf.files.wordpress.com/2012/09/atthetop1.jpg'

        },
        {
          id: 'si_5',
          img: 'https://static1.squarespace.com/static/57dabcd7bebafb63eb64e790/t/57e5c3e1d2b857a31e0c0d72/1474675687014/FullSizeRender+%286%29_2.jpg?format=1000w'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getAllPaints'
    ]),
    created () {
      this.getAllPaints()
    }
  }
}
</script>

<style scoped>
.flex-ca {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}

#cssSlider {
  overflow: hidden;
  border: 5px solid #666;
  border-radius: 3px;
  flex: 3;
}

#sliderImages {
  width : 5000px;
  height: 300px;
  overflow: hidden;
  /* animation duration: 16s : 5x ~3s display image + 5x ~0.2s slide */
  animation: slide 16s infinite;
  -moz-animation: slide 16s infinite;
  -webkit-animation: slide 16s infinite;
  -o-animation: slide 16s infinite;
}

#sliderImages img {
  float: left;
}

@keyframes slide{
  0%{margin-left: 0px;}
  17%{margin-left: 0px;}
  20%{margin-left: -1000px;}
  37%{margin-left: -1000px;}
  40%{margin-left: -2000px;}
  57%{margin-left: -2000px;}
  60%{margin-left: -3000px;}
  77%{margin-left: -3000px;}
  80%{margin-left: -4000px;}
  97%{margin-left: -4000px;}
  100%{margin-left: 0px;}
}

@-moz-keyframes slide{
  0%{margin-left: 0px;}
  17%{margin-left: 0px;}
  20%{margin-left: -1000px;}
  37%{margin-left: -1000px;}
  40%{margin-left: -2000px;}
  57%{margin-left: -2000px;}
  60%{margin-left: -3000px;}
  77%{margin-left: -3000px;}
  80%{margin-left: -4000px;}
  97%{margin-left: -4000px;}
  100%{margin-left: 0px;}
}

@-webkit-keyframes slide{
  0%{margin-left: 0px;}
  17%{margin-left: 0px;}
  20%{margin-left: -1000px;}
  37%{margin-left: -1000px;}
  40%{margin-left: -2000px;}
  57%{margin-left: -2000px;}
  60%{margin-left: -3000px;}
  77%{margin-left: -3000px;}
  80%{margin-left: -4000px;}
  97%{margin-left: -4000px;}
  100%{margin-left: 0px;}
}

@-o-keyframes slide{
  0%{margin-left: 0px;}
  17%{margin-left: 0px;}
  20%{margin-left: -1000px;}
  37%{margin-left: -1000px;}
  40%{margin-left: -2000px;}
  57%{margin-left: -2000px;}
  60%{margin-left: -3000px;}
  77%{margin-left: -3000px;}
  80%{margin-left: -4000px;}
  97%{margin-left: -4000px;}
  100%{margin-left: 0px;}
}
</style>
