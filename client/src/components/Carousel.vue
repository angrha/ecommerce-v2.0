<template>
<div class="container-fluid col-md-9">
  <div id="cssSlider">
    <div id="sliderImages">
      <img v-for="c in carousel" :key="c.id" :src="c.img" alt="paint"/>
      <div style="clear:left;"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
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
          img: 'https://www.incollect.com/sites/uploads/Mural,-The-Dream-Garden,-1916.-Tiffany-Studios_._.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-fluid {
float: left;
}
#cssSlider {
overflow: hidden;
border: 5px solid #666;
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
