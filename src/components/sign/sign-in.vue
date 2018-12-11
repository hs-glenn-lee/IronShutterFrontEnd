<template>
  <div class="sign-in">
    <div class="flex-con-col main">
      <header class="flex-con-col">
        <div class="logo">
          <img src="../../assets/images/logo-banner.png"/>
        </div>
      </header>

      <div class="flex-con-col">
        <div class="sign-in-box flex-con-col">
          <div class="flex-con-col">
            <h2>로그인</h2>
          </div>
          <form>
            <div class="flex-con-col">
              <input v-model="username" class="sign-in-form-input" type="text" placeholder="사용자명">
            </div>
            <div class="flex-con-col">
              <input v-model="password" class="sign-in-form-input" type="password" placeholder="비밀번호">
            </div>

            <div class="flex-con-col">
              <div class="error-messages">
                <span>일치하는 사용자 정보가 없습니다. 기나긴 테스트 메세지.</span>
              </div>
            </div>
            <div v-if="errorMessage.length > 0" class="error-messages">
              <div>{{errorMessage}}</div>
            </div>

            <div class="flex-con-col">
              <button @click="submitSignIn" class="generic" type="button">로그인</button>
            </div>
          </form>

        </div>
      </div>

      <div class="context-switch"></div>

      <div class="guide flex-con-col" style="margin: 16px 0;">
        <p style="font-color: var(--grey-text-color); margin: 4px 0;">계정이 없으세요?</p>
        <p style="font-color: var(--grey-text-color); margin: 4px 0;">
          <router-link :to="{ name: 'SignUp' }">계정만들기</router-link>
        </p>
      </div>

    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import commonFooterComp from '../footers/common-footer'
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions(['signIn']),
    submitSignIn () {
      this.signIn({
        username: this.username,
        password: this.password
      })
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          this.errorMessage = err.message
        })
    }
  },
  components: {
    'common-footer': commonFooterComp
  }
}

</script>

<style scoped>
  .flex-con-col {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  div.main {
    min-height: 980px;
  }

  header {
    height: 70px;
    width: 100%;
    border-bottom: 1px solid var(--context-border-color);
    margin-bottom: 32px;
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

  input.sign-in-form-input {
    display: inline-block;
    font-size: 1.5em;
    border-radius: 6px;
    border: 1px solid #999999;
    padding: 4px 6px 4px 6px;
    margin: 8px 0;
  }

  button[type="button"] {
    display: inline-block;
    background-color: #ececec;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 1.2em;
    color: #000;
    padding: 0.3em 0.3em 0.3em 0.3em;
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
  div.error-messages > span {
    font-size: 18px;
  }

  .guide a {
    color: var(--link-color-blue);
  }
</style>
