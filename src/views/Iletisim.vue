<template>
<div class="main-content">
    <div class="container">
        <h2 class="mb-0 page-title">İletişim</h2>
        <div class="pt-seperator mt-3 mb-5"></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2258956244427!2d29.007217115415113!3d41.04218887929731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a296fd9f87%3A0xdef4b83df5b7b927!2zWcSxbGTEsXosIE9zbWFuIFBhxZ9hIE1la3RlYmkgU2suIE5vOjQgRDo2LCAzNDM1MyBCZcWfaWt0YcWfL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1632533285699!5m2!1sen!2str" width="100%" height="400" style="border:0;" class="maps-wrapper mb-5" allowfullscreen="" loading="lazy"></iframe>
        <div class="row">
          <div class="col-12 col-md-6">
            <h5 class="mb-3">Adres</h5>
            <div class="mb-3">Çırağan Cd. Osmanpaşa Mektebi Sokak <br> No: 4 - 6, 34353 <br> Beşiktaş, İSTANBUL / TÜRKİYE</div>
            <div class="mb-5">444 2864 (BUNİ)</div>
            <div class="social-media">
              <a href="" target="blank"><div class="mb-3 d-flex align-items-center"><div class="iconBg-size facebook-bgcolor d-flex justify-content-center mr-3"><i class="d-flex align-items-center ri-facebook-fill"></i></div>facebook/bauradyo</div></a>
              <a href="" target="blank"><div class="mb-3 d-flex align-items-center"><div class="iconBg-size instagram-bgcolor d-flex justify-content-center mr-3"><i class="d-flex align-items-center ri-instagram-fill"></i></div> facebook/bauradyo</div></a>
              <a href="" target="blank"><div class="mb-3 d-flex align-items-center"><div class="iconBg-size twitter-bgcolor d-flex justify-content-center mr-3"><i class="d-flex align-items-center ri-twitter-fill"></i></div>facebook/bauradyo</div></a>

            </div>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
             <template>
        <form @submit.stop.prevent="onSubmit">
          <b-alert show variant="success" class="d-flex mb-4"><i class="ri-checkbox-circle-line align-items-center"></i>İletiniz gönderilmiştir, teşekkürler!</b-alert>
          <div class="row">
            <div class="col-6">
                  <b-form-group id="input-group-2" label="Ad Soyad" label-for="input-2">
        <b-form-input
         :state="validateState($v.name)"
              v-model="$v.name.$model"
              id="input-email"
        ></b-form-input>
      </b-form-group>
            </div>
            <div class="col-6">
               <b-form-group label="E-Posta">
            <b-form-input
              :state="validateState($v.email)"
              v-model="$v.email.$model"
              id="input-email"
            ></b-form-input>
          </b-form-group>
            </div>
            <div class="col-12">
            <b-form-group  label="İleti">
                 <b-form-textarea
      id="textarea"
      v-model="text"
      rows="5"
      max-rows="6"
      class="overflow-hidden"
    ></b-form-textarea>
    </b-form-group>
            </div>
          </div>
       
         
          <button
            type="submit"
            class="btn btn-primary w-100 mb-4"
          >Gönder</button>
        </form>
      </template>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'Iletisim',
  mixins: [validationMixin],
  data() {
    return {
      name: null,
      email: null,
      visibility: 'password',
      errors: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(8),
    },
    email: {
      required,
      email,
    }
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
   onSubmit() {
      this.$v.$touch()

      if (this.$v.$anyError) {
        return false
      }
      else {
        this.login()
      }
    },
  },
}
</script>