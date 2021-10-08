<template>
  <header class="header">
    <div class="top-light"></div>
<div class="container">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#"><img class="bauradyo-logo " src="../../assets/img/bauradyo-logo.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-auto w-100 justify-content-center">
        <b-nav-item href="#">Yayın Akışı</b-nav-item>
        <b-nav-item href="#">Podcast</b-nav-item>
        <b-nav-item href="#">İletişim</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <li class="nav-item"><button type="button" class="btn btn-secondary btn-left"   v-b-modal.modal-login>GİRİŞ</button></li>
      <li class="nav-item"><button type="button" class="btn btn-light btn-right" v-b-modal.modal-register>ÜYE OL</button></li>
      <li class="nav-item"><button type="button" class="btn btn-primary d-flex ml-0 ml-lg-3 "><i class="ri-play-fill mr-2"></i>CANLI İZLE</button></li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   <LoginModal>
   </LoginModal>
   <ForgotPassword>
    </ForgotPassword>
     <RegisterModal>
    </RegisterModal>
</div>
    </header>
</template>

<script>
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import ForgotPassword from "../modal/ForgotPassword";
export default {
    name: "Header",
    components: {
       LoginModal,
       RegisterModal,
       ForgotPassword
  }
,
}
</script>

