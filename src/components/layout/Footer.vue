<template>
    <div>
    <div class="footer py-5">
        <div class="container mb-0 mt-0 mb-md-3 mt-md-4">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3 text-center text-md-left mb-5 mb-md-0 position-relative">
                    <div><img src="../../assets/img/bauradyo-footer-logo.png" class="footer-logo"></div>
                </div>
                <div class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5 mb-sm-0">
                    <div class="footer-column">
                        <h4 class="mb-3 color-second fs-14 fw-600">ADRES</h4>
                        <div class="color-third">
                            <div class="mb-2 pb-1">
                             Çırağan Cd. Osmanpaşa Mektebi
                            Sokak No: 4 - 6, 34353
                            Beşiktaş, İSTANBUL / TÜRKİYE
                            </div>
                            <div>444 2864 (BUNİ)</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="footer-column">
                        <h4 class="mb-3 color-second fs-14 fw-600">BİZİ TAKİP EDİN</h4>
                        <div class="menu-link">
                            <a href="#"><span class="color-second">facebook/</span>bauradyo</a>
                            <a href="#"><span class="color-second">instagram/</span>bauradyo</a>
                            <a href="#"><span class="color-second">twitter/</span>bauradyo</a>
                        </div>
                    </div>
                </div>
                 <div class="col-12 col-lg-3 mt-5 mt-lg-0">
                      <div class="footer-column">
                        <h4 class="mb-3 color-second fs-14 fw-600">HEMEN İNDİRİN</h4>
                        <div class="menu-link">
                            <a href="#" class="d-flex mb-3"><i class="ri-apple-fill apple mr-3"></i>Appstore’dan İndir</a>
                            <a href="#" class="d-flex"><img src="../../assets/img/android-icon.svg" class="android mr-3">PlayStore’dan İndir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom py-4">
      <div class="color-third text-center">
                        <i class="ri-copyright-line copyright mr-2"></i>{{ new Date().getFullYear() }} BauRadyo <span class="mx-2">|</span> Tüm Hakları Saklıdır.</div>
    </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    components: {
  }
,
}
</script>

