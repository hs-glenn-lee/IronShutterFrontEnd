<template>
  <div class="sign-up">
    <div class="flex-con-col">
      <div class="flex-item">
        <div>큰 로고</div>
      </div>
      <div class="flex-item">
        <h1>계정생성</h1>
      </div>
      <div class="flex-item">
        <form class="sign-up-form">
          <div class="flex-con-col">
            <input v-model="signUpForm.username" type="text" placeholder="사용자명">
          </div>
          <div class="flex-con-col">
            <input v-model="signUpForm.password" type="password" placeholder="비밀번호">
          </div>
          <div class="flex-con-col">
            <input v-model="signUpForm.passwordRepeat" type="password" placeholder="비밀번호 재입력">
          </div>
        </form>
      </div>

      <div v-if="errorMessages.length > 0" class="error-messages flex-item">
        <div v-for="(item, index) in errorMessages" :key="index">{{item}}</div>
      </div>

      <div class="flex-con-col">
        <span>{{isValid}}<span>트루 펄스 아이콘</span></span>
        <button @click="submitSignUpForm" class="generic" type="button">계정생성</button>
      </div>

      <div class="context-switch"></div>
      <div class="guide">
        <p>이미 계정이 있으세요?</p>
        <p><router-link :to="{ name: 'SignIn' }">로그인</router-link></p>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import validator from '../../validator/validator'
import { mapActions } from 'vuex'
import commonFooterComp from '../common-footer'

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
    'common-footer': commonFooterComp
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

  input[type="text"], input[type="password"] {
    display: inline-block;
    font-size: 1.5em;
    border-radius: 6px;
    border: 1px solid #999999;
    padding: 4px 6px 4px 6px;
  }
  button[type="button"] {
    display: inline-block;
    background-color: #ececec;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 1.2em;
    color: #000;
    padding: 0.3em 0.3em 0.3em 0.3em;
  }

</style>
