<template>
  <div class="home">
     <div class="container">
        <div class="home-slider">
            <template>
              <VueSlickCarousel v-bind="settings" ref="carousel" :arrows="false">
                <div class="slider-wrapper" >
                  <!-- <div class="slide bg-image"> -->
                 <div class="slide bg-image" 
                  v-bind:style="{'backgroundImage': 'url(\'https://imgyukle.com/f/2021/09/28/feHsS.jpg\')'}">
                        <!-- <div class="container">
                            <div class="slide-content">
                            <div class="row px-0 px-lg-5 mx-0 mx-lg-5">
                              <div class="col-12 col-lg-6">
                                <h2>BAURadyo<br>Yeni Stüdyosunda<br>Yayında</h2>
                              </div>
                            </div>
                            </div>
                        </div> -->
                  </div>
                </div>
                  <div class="slider-wrapper" >
                  <div class="slide bg-image">
                        <!-- <div class="container">
                            <div class="slide-content">
                            <div class="row px-5 mx-5">
                              <div class="col-12 col-lg-6">
                                <h2>BAURadyo<br>Yeni Stüdyosunda<br>Yayında</h2>
                              </div>
                            </div>
                            </div>
                        </div> -->
                  </div>
                </div>
                   <div class="slider-wrapper" >
                  <div class="slide bg-image">
                        <!-- <div class="container">
                            <div class="slide-content">
                            <div class="row px-5 mx-5">
                              <div class="col-12 col-lg-6">
                                <h2>BAURadyo<br>Yeni Stüdyosunda<br>Yayında</h2>
                              </div>
                            </div>
                            </div>
                        </div> -->
                  </div>
                </div>
            </VueSlickCarousel>
            </template>
    </div>
   <section class="py-5 my-3">
              <div class="pb-4">
                <h2 class="mb-0 pr-5 page-title">Haberler</h2>
                <div class="pt-seperator mt-3 mb-4"></div>
                 <VueSlickCarousel v-bind="CoruselSettings">
                   <div class="mb-3">
                      <div class="card card-hover">
                        <div class="card-img-top">
                        <img src="https://picsum.photos/600/300/?image=1">
                      </div>
                        <div class="card-body d-flex flex-column">
                              <div class="ellipsis-4 mb-3">4.Müzik On Air Gazete Bültenleri</div>
                              <div class="fs-14 color-second fw-600 mt-auto mb-0">20 Ağustos 2021</div>
                            </div>
                      </div>
                   </div>
                   <div class="mb-3">
                      <div class="card card-hover">
                        <div class="card-img-top">
                        <img src="https://picsum.photos/600/300/?image=1">
                      </div>
                        <div class="card-body d-flex flex-column">
                              <div class="ellipsis-4 mb-3">Karma Türkiye & BAU Ortaklığındaki Akustik Performans Yarışmasında Ödüller Sahiplerini Buldu!</div>
                              <div class="fs-14 color-second fw-600 mt-auto mb-0">20 Ağustos 2021</div>
                            </div>
                      </div>
                   </div>
                   <div class="mb-3">
                      <div class="card card-hover">
                        <div class="card-img-top">
                        <img src="https://picsum.photos/600/300/?image=1">
                      </div>
                        <div class="card-body d-flex flex-column">
                              <div class="ellipsis-4 mb-3">Power FM Chatzone Canlı Yayını BAU Radyo Stüdyosu’nda Gerçekleşti!</div>
                              <div class="fs-14 color-second fw-600 mt-auto mb-0">20 Ağustos 2021</div>
                            </div>
                      </div>
                   </div>
                   <div class="mb-3">
                      <div class="card card-hover">
                        <div class="card-img-top">
                        <img src="https://picsum.photos/600/300/?image=1">
                      </div>
                        <div class="card-body d-flex flex-column">
                              <div class="ellipsis-4 mb-3">Karma Türkiye & BAU Ortaklığındaki Akustik Performans Yarışmasında Ödüller Sahiplerini Buldu!</div>
                              <div class="fs-14 color-second fw-600 mt-auto mb-0">20 Ağustos 2021</div>
                            </div>
                      </div>
                   </div>
                   <div class="mb-3">
                      <div class="card card-hover">
                        <div class="card-img-top">
                        <img src="https://picsum.photos/600/300/?image=1">
                      </div>
                        <div class="card-body d-flex flex-column">
                              <div class="ellipsis-4 mb-3">Power FM Chatzone Canlı Yayını BAU Radyo Stüdyosu’nda Gerçekleşti!</div>
                              <div class="fs-14 color-second fw-600 mt-auto mb-0">20 Ağustos 2021</div>
                            </div>
                      </div>
                   </div>
                 </VueSlickCarousel>
                 <div class="slide-more color-third position-relative d-flex justify-content-end mt-2">TÜM HABERLER</div>
              </div>
   </section>
   </div>
     <section class="py-4 py-md-5 about-section position-relative">
        <div class="container">
            <div class="row">
            <div class="col-10 col-md-8 offset-1 offset-md-2">
              <div class="subtitle mb-30 mt-4"><span class="brand-color">BAU</span>Radyo</div>
              <p>Bahçeşehir Üniversitesi Radyo ve İletişim Kulübü, 2006 yılında bir öğrenci tarafından kurulmuş ve birçok başarı elde etmiş okulun bir birimidir. Kulübümüzün amacı hem okulumuzun öğrencilerine hem de ulaşabildiğimiz herkese radyo kültürünün hiç unutulmamak üzere benimsenmesi ve yeni nesil olarak geçmişten gelen radyo ile iletişimin gelişerek geleceğe doğru ilerleyecek olmasını ve radyo kültürünün her nesilden haberleşme aracı olarak kalacağını aşılamaktır.</p>
              <p>BAU Radyo ve İletişim Kulübü olarak okulumuz öğrencilerinden fazlasıyla ilgi görmekteyiz. Üye sayımız yıllara göre değişiklik göstermek ile birlikte, ortalama olarak 650- 700 kişi sayısı civarında oluşmaktadır. Yönetim kurulu üyelerimizle beraber kulübümüzün alt birimlerinde sponsorluk, medya ve sosyal sorumluluk ekibi gibi ekiplerimiz de bulunmaktır.</p>
              <p>Bahçeşehir Üniversitesi Radyo ve İletişim Kulübü olarak 2017 ve 2018 yılında aldığımız “En iyi üniversite radyosu” ödülleri ile kulübümüzün başarılarını taçlandırmış olduk. Halen daha bu ünvanımızla projelerimize devam etmekteyiz.</p>
            </div>
          </div>
        </div>
   </section>
     
  </div>

  
</template>

<script>
    // // Require http-streaming plugin..
    // require('@videojs/http-streaming/src/videojs-http-streaming.js');
// @ is an alias to /src
 import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Anasayfa',
  components: {
    VueSlickCarousel,
  },
   data() {
    return {
      value: 65,
      slideIndex:0,
       CardImage1: "https://picsum.photos/600/300/?image=1",
        CardImage2: "https://picsum.photos/600/300/?image=4",
        CardImage3: "https://picsum.photos/600/300/?image=48",
        CardImage4: "https://picsum.photos/600/300/?image=7",
        CardImage5: "https://picsum.photos/600/300/?image=48",
        CardImage6: "https://picsum.photos/600/300/?image=4",
        settings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "adaptiveHeight": true,
         "accessibility": false,
         "fade": true
    },
     CoruselSettings: {
      "dots": true,
      "infinite": false,
      "speed": 500,
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1100,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "infinite": true,
            "dots": true
          }
        },
          {
          "breakpoint": 992,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "initialSlide": 1
          }
        },
        {
          "breakpoint": 576,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    },
     CourseCoruselSettings: {
      "dots": true,
      "infinite": false,
      "speed": 500,
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1100,
          "settings": {
            "slidesToShow": 4,
            "slidesToScroll": 4,
            "infinite": true,
            "dots": true
          }
        },
          {
          "breakpoint": 992,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "initialSlide": 1
          }
        },
        {
          "breakpoint": 576,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    }
    };
  },
}
</script>
<style lang="scss">
.video-js.vjs-audio {
    /* Reset the height of the player to the height of the controller */
    height: 3em;

    /* Who needs this ? */
    .vjs-big-play-button {
        display: none;
    }
    /* Make the controlbar visible by default */
    .vjs-control-bar {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    /* The spinner is useless when there is just the controller only mode */
    .vjs-loading-spinner {
        display: none;
    }
    /* Add another way to indicate waiting by using the progress slider */
    &.vjs-waiting .vjs-progress-holder:not( .vjs-seeking ) {
        height: .5em;
        background-image: repeating-linear-gradient(
            -45deg,
            #73859f,
            #73859f 11px,
            #eee 10px,
            #eee 20px
        );
        border-radius: 3px;
        background-size: 28px 28px;

        transition: height .5s;
        animation: vjs-slider-indeterminate .5s linear infinite;

        .vjs-play-progress {
            display: none;
        }
    }
}
@keyframes vjs-slider-indeterminate {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 28px 0;
    }
}
/* Audio: Remove big play button (leave only the button in controls). */
.video-js.vjs-audio .vjs-big-play-button {
  display: none;
}
/* Audio: Make the controlbar visible by default */
.video-js.vjs-audio .vjs-control-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
/* Make player height minimum to the controls height so when we hide video/poster area the controls are displayed correctly. */
.video-js.vjs-audio {
  min-height: 3em;
}

</style>