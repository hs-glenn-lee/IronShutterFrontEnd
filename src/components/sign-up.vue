<template>
  <div class="sign-in">
    <div class="flex-con-col">
      <div class="flex-item">
        <h1>계정생성</h1>
      </div>
      <div class="flex-item">
        <form>
          <div class="flex-con-col">
            <input v-model="username" type="text" placeholder="사용자명">
          </div>
          <div class="flex-con-col">
            <input v-model="password" type="password" placeholder="비밀번호">
          </div>
          <div class="flex-con-col">
            <input v-model="passwordRepeat" type="password" placeholder="비밀번호 재입력">
          </div>
          <div class="flex-con-col">
            <button type="button">계정생성</button>
          </div>
        </form>

        <div v-if="errorMessages.length > 0" class="error-messages">
        </div>
      </div>
      <div class="context-switch"></div>
      <div class="guide">
        <p>이미 계정이 있으세요?</p>
        <p><router-link :to="{ name: 'SignIn' }">로그인</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import validator from '../validator/validator'
export default {
  name: 'Home',
  data () {
    return {
      signUpForm: {
        username: '',
        password: '',
        passwordRepeat: ''
      },
      errorMessages: []
    }
  },
  methods: {
    validateSignUpForm () {
      validator.promisedValidate('validateSignUpForm', {
        signUpForm: this.signUpForm
      })
        .then(() => {

        })
        .catch(fail => {
          this.errorMessages = fail
        })
    }
  },
  components: {

  },
  watch: {

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
