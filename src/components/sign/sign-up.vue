<template>
  <div class="sign-up">
    <simple-header></simple-header>
    <div class="flex-con-col main">
      <div class="sign-in-box flex-con-col">
        <div class="flex-con-col">
          <h2>계정생성</h2>
        </div>
        <div class="flex-con-col">
          <form class="sign-up-form">
            <div class="flex-con-col">
              <input v-model="signUpForm.username" type="text" class="sign-up-form-input" placeholder="사용자명">
            </div>
            <div class="flex-con-col">
              <input v-model="signUpForm.password" type="password" class="sign-up-form-input" placeholder="비밀번호">
            </div>
            <div class="flex-con-col">
              <input v-model="signUpForm.passwordRepeat" type="password" class="sign-up-form-input" placeholder="비밀번호 재입력">
            </div>
          </form>
        </div>

        <div v-if="errorMessages.length > 0" class="error-messages flex-con-col">
          <div class="error-message"><span>{{isValid}}<span>(!)</span></span></div>
          <div class="error-message" v-for="(item, index) in errorMessages" :key="index"><span>{{item}}</span></div>
        </div>

        <div class="flex-con-col">
          <button @click="submitSignUpForm" class="generic" type="button">계정생성</button>
        </div>

      </div>

      <div class="context-switch"></div>
      <div class="guide flex-con-col">
        <p style="font-color: var(--grey-text-color); margin: 4px 0;">이미 계정이 있으세요?</p>
        <p style="font-color: var(--grey-text-color); margin: 4px 0;"><router-link :to="{ name: 'SignIn' }">로그인</router-link></p>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import validator from '../../validator/validator'
import { mapActions } from 'vuex'
import commonFooterComp from '../footers/common-footer'
import simpleHeaderComp from '../headers/simple-header'

export default {
  name: 'Home',
  data () {
    return {
      signUpForm: {
        username: '',
        password: '',
        passwordRepeat: ''
      },
      errorMessages: [],
      isValid: false
    }
  },
  methods: {
    ...mapActions(['signUp']),
    validateSignUpForm () {
      validator.promisedValidate('validateSignUpForm', this.signUpForm)
        .then(() => {
          this.isValid = true
          this.errorMessages = []
        })
        .catch(fail => {
          this.isValid = false
          this.errorMessages = fail
        })
    },
    submitSignUpForm () {
      this.signUp(this.signUpForm)
        .then(data => {
          console.log(data)
        })
    }
  },
  components: {
    'common-footer': commonFooterComp,
    'simple-header': simpleHeaderComp
  },
  watch: {
    signUpForm: {
      handler: function (from, to) {
        this.validateSignUpForm()
      },
      deep: true
    }
  }
}

</script>

<style scoped>
  .flex-con-col {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-item {
    display: flex;
  }

  div.main {
    min-height: 980px;
  }

  div.sign-in-box {
    min-width: 400px;
    background-color: var(--grey-bg-color);
    box-shadow: 0px 0px 3px rgba(0,0,0,.2);
    padding: 24px 0;
    margin: 24px 0;
  }

  div.sign-in-box h2 {
    font-size: 2em;
    margin: 16px 0;
  }

  input.sign-up-form-input {
    display: inline-block;
    font-size: 1.5em;
    border-radius: 6px;
    border: 1px solid #999999;
    padding: 4px 6px 4px 6px;
    margin: 8px 0;
  }

  div.error-messages {
    display:inline-block;
    width: 280px;
    padding: 8px;
    margin: 8px 0;
    background-color: #fff;
    box-shadow: 1px 1px 2px 0 rgba(0,0,0,.2);
    text-align: center;
  }

  .error-message {
    margin: 8px 0;
  }
  div.error-message > span {
    font-size: 16px;
  }

  button[type="button"] {
    display: inline-block;
    min-width: 140px;
    background-color: var(--blue-button-color);
    font-size: 1.2em;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 1.2em;
    color: #fff;
    padding: 0.3em 0.3em 0.3em 0.3em;
    margin: 8px 0;
  }

  .guide a {
    color: var(--link-color-blue);
  }
</style>
