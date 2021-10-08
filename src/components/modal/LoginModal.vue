<template>
  <div>
    <b-modal
      id="modal-login"
      entrance-transition="animated fadeIn"
      leave-transition="animated bounceOut"
      centered
      :hide-footer="true"
    >
     
      <template #modal-header="{ close }" class="container">
        <div class="top-light"></div>
        <!-- Emulate built in modal header close button action -->
        <h3 class="m-0 p-0">Giriş Yap</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line"></i>
        </button>
      </template>
      <template>
        <form @submit.stop.prevent="onSubmit">
          <b-alert show variant="danger" class="d-flex mb-4"><i class="ri-error-warning-line align-items-center"></i>Bilgiler hatalı, lütfen tekrar deneyin.</b-alert>
          <!-- E-posta -->
          <b-form-group class="input-icon" label="E-Posta">
            <b-form-input
              :state="validateState($v.email)"
              v-model="$v.email.$model"
              id="input-email"
            ></b-form-input>
          </b-form-group>
          <!-- Şifre -->
          <b-form-group class="input-icon" label="Şifre">
            <b-form-input
              :state="validateState($v.password)"
              v-model="$v.password.$model"
              id="input-password"
              :type="visibility"
            ></b-form-input>
            <i
              class="ri-eye-line"
              @click="showPassword()"
              v-if="visibility == 'password'"
            ></i>
            <i
              class="ri-eye-off-line"
              @click="hidePassword()"
              v-if="visibility == 'text'"
            ></i>
          </b-form-group>
          <div class="row mb-4 fw-600 text-small">
            <div class="col-12 col-sm-6 text-center text-sm-left">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  class="check-group"
                  name="check"
                  value="1"
                />
                <label class="form-check-label color-second text-small" for="check">
                  <span class="check"></span>
                  <span class="box"></span>
                  Beni Hatırla
                </label>
              </div>
            </div>
            <div class="col-12 col-sm-6 text-center text-sm-right mb-3 mb-sm-0">
              <a
                href="javascript:void(0)"
               @click="$bvModal.hide('modal-login')"
           v-b-modal.modal-forgotPassword
                class="color-third"
              >
                Şifremi Unuttum
              </a>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block"
          >
            GİRİŞ YAP
          </button>
        </form>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'LoginModal',
  mixins: [validationMixin],
  data() {
    return {
      password: null,
      email: null,
      visibility: 'password',
      errors: null
    }
  },
  validations: {
    password: {
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
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
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
