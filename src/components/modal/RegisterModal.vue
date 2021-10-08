<template>
  <div>
    <b-modal 
      id="modal-register" 
      entrance-transition="animated fadeIn" 
      leave-transition="animated bounceOut" 
      title="Kayıt Ol" 
      centered 
      :hide-footer="true"
      @change="change"
    >
      <div v-if="registered == true" class="alert alert-success mb-4 float-bottom" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div class="my-1">
            <strong>
              Üyeliğin başarıyla gerçekleşti! 
              E-mail adresine gelen linke tıklayarak üyeliğini onaylamalısın.
            </strong>
          </div>
        </div>
      </div>
      <div v-if="errors != null" class="alert alert-error mb-4 float-bottom" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div v-for="error in errors" :key="error[0]" class="my-1">
            <strong>
              {{error[0]}}
            </strong>
          </div>
        </div>
      </div>
      <template #modal-header="{ close }" class="container">
        <div class="top-light"></div>
        <h3 class="m-0 p-0">Üye Ol</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line"></i>
        </button>
      </template>
      <template>
        <form @submit.stop.prevent="onSubmit">
          <div class="row">
            <div class="col-12">
              <b-form-group class="input-icon" label="Ad Soyad"> 
                <b-form-input
                  :state="validateState($v.RegisterName)"
                  v-model="$v.RegisterName.$model"
                  id="input-RegisterName"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="E-Posta Adresi">
                <b-form-input
                  :state="validateState($v.email)"
                  v-model="$v.email.$model"
                  id="input-email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="Şifre"> 
                <b-form-input
                  :state="validateState($v.password)"
                  v-model="$v.password.$model"
                  id="input-password" 
                  :type="visibility"
                ></b-form-input>
                <i class="ri-eye-line" @click="showPassword()" v-if="visibility == 'password'"></i>
                <i class="ri-eye-off-line" @click="hidePassword()" v-if="visibility == 'text'"></i>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="Şifre Tekrar">
                <b-form-input
                  :state="validateState($v.repeatPassword)"
                  v-model="$v.repeatPassword.$model"
                  id="input-repeatPassword"
                  :type="RepeatVisibility"
                ></b-form-input>
                <i class="ri-eye-line" @click="showRepeatPassword()" v-if="RepeatVisibility == 'password'"></i>
                <i class="ri-eye-off-line" @click="hideRepeatPassword()" v-if="RepeatVisibility == 'text'"></i>
              </b-form-group>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Üye Ol
          </button>
          <p class="text-smaller color-second text-center fw-600 d-block mb-0">
            Üye olarak, 
            <a href="../#/gizlilik-sozlesmesi/" class="color-third">
              <u>Gizlilik ve Hizmet Şartları</u>
            </a> 
            'nı kabul etmiş olursunuz.
          </p>
        </form>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs, email} from "vuelidate/lib/validators";

export default {
  name: "RegisterModal",
  mixins: [validationMixin],
  data() {
    return {
      password: null,
      repeatPassword: null,
      RegisterName: null,
      type: "password",
      email: null,
      visibility: 'password',
      RepeatVisibility: 'password',
      announcement_permission: 0,
      registered: false,
      errors: null
    }
  },
  validations: {
    RegisterName: {
        required,
        minLength: minLength(2)
    },
    password: {
      required, 
       minLength: minLength(8)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      email
    }
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item
      return $dirty ? !$error : null
    },
    showPassword() {
      this.visibility = 'text'
    },
    hidePassword() {
      this.visibility = 'password'
    },
    showRepeatPassword() {
      this.RepeatVisibility = 'text'
    },
    hideRepeatPassword() {
      this.RepeatVisibility = 'password'
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return false

      this.register()
    },
    change() {
      this.registered = false
      this.errors = null
    }
  }
}
</script>