<template>
  <div class="sign-in">
    <simple-header></simple-header>
    <div class="flex-con-col" style="background-color: var(--grey-bg-color);">
      <div class="flex-con-col round-box">
        <div class="flex-con-col flex-item">
          <div class="flex-con-col" style="padding: 16px 0;">
            <h1 style="margin-bottom: 16px;">로그인 하기</h1>
            <p>사용자명과 비밀번호를 입력하세요.</p>
          </div>
          <div class="flex-con-col">
            <form class="flex-con-col">
              <div class="flex-con-col">
                <input v-model="username" type="text" placeholder="사용자명">
              </div>
              <div class="flex-con-col">
                <input v-model="password" type="password" placeholder="비밀번호">
              </div>
              <div class="flex-con-col">
                <button @click="submitSignIn" class="generic" type="button">로그인</button>
              </div>
            </form>

            <div v-if="errorMessage.length > 0" class="error-messages flex-con-col">
              <div>{{errorMessage}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-con-col">
        <div class="guide flex-con-col">
          <p style="padding: 8px 0;">계정이 없으세요?</p>
          <p><router-link :to="{ name: 'SignUp' }">계정만들기</router-link></p>
        </div>
      </div>
    </div>
    <recap-footer></recap-footer>
    <common-footer></common-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import simpleHeaderComp from '../headers/simple-header'
import commonFooterComp from '../footers/common-footer'
import recapFooterComp from '../footers/recap-footer'
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
    'common-footer': commonFooterComp,
    'recap-footer': recapFooterComp,
    'simple-header': simpleHeaderComp
  }
}

</script>

<style scoped>
  div.round-box {
    border-radius: 8px;
    border: 1px solid var(--context-border-color);
    box-shadow: 0 1px 0 rgba(0,0,0,.25);
    background-color: #fff;
    width: 500px;
    margin-top: 16px;
  }
  .flex-con-col {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 8px 0;
  }
  .flex-item {
    display: flex;
  }

  header.flex-item {
    height: 70px;
    width: 100%;
    border-bottom: 1px solid var(--context-border-color);
  }

  input[type="text"], input[type="password"] {
    display: inline-block;
    font-size: 1.5em;
    border-radius: 6px;
    border: 1px solid #999999;
    padding: 4px 6px 4px 6px;
    width: 306px;
  }
  button[type="button"] {
    display: inline-block;
    background-color: var(--blue-button-color);
    width: 320px;
    font-size: 1.2em;
    border: 1px solid #999999;
    border-radius: 5px;
    color: #fff;
    padding: 8px;
  }

  .guide a {
    color: var(--blue-button-color);
  }

</style>
