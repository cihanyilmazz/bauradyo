<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Anasayfa</router-link> |
      <router-link to="/about">Sayfa</router-link>
    </div> -->
    <router-view/>
    <Footer/>
  <div class="bottom-bar-wrapper">
       <div class="bottom-bar">
      <div class="top-light-bottom overflow-hidden">
        <div class="top-light"></div>
      </div>
      <div class="container">
           <div class="row">
       <div class="col-6 d-flex align-items-center">
          <audio ref="Players" class="video-js vjs-default-skin" controls preload="auto" data-setup='{}'>
  <source src="https://ssl120.radyotelekom.com.tr/8106/stream" type='audio/mp3'/>
  <!-- <track src="https://ssl120.radyotelekom.com.tr/8106/stream"> -->
</audio>
       </div>
       <div class="col-6 d-flex justify-content-end">
         <div class="app-wrapper">
           <div class="apple-wrapper"><a href="#"><i class="ri-apple-fill apple"></i></a></div>
           <div class="android-wrapper"><a href="#"><img src="./assets/img/android-icon.svg" class="android"></a></div>
           </div>
       </div>
     </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
   import videojs from 'video.js'
    window.videojs = videojs

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
     mounted() {
          videojs(this.$refs.Players, {controlBar: {fullscreenToggle: false, "pictureInPictureToggle": false}});
           $('body:contains("Bau")').html(function(_, html){
    return html.split('-').join("<span>-</span>");
  });
        }
}
</script>
