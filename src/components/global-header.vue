<template>
  <header class="global-header user-select-none">
    <div class="center-block h-inh">
      <div class="flex-con-row h-inh"><!-- if not signed-in -->
        <div class="flex-item flex-con-row">
          <div class="logo flex-item">logo</div>
          <div class="flex-item flex-con-row">
            <span class="header-nav-rep">소개</span>
            <span class="">
              <span class="header-nav-rep-nav bold-on-hover">함께하기</span>
              <nav class="sub">
                <ul>
                  <li>다운로드</li>
                  <li>고객센터</li>
                </ul>
              </nav>
            </span>
            <span class="header-nav-rep">요금제</span>
          </div>
        </div>
        <div class="flex-con-row h-inh">
          <div @click="goToSignIn" class="header-nav flex-item item-mg-8 psd-hover-cursor-pointer">로그인</div>
          <div @click="showMenu" class="menu-icon flex-item psd-hover-cursor-pointer">GOTO</div>
        </div>
      </div>
    </div>
    <menu-of-global-header ref="$menuOfGlobalHeader"></menu-of-global-header>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import MenuOfGlobalHeaderComp from './menu-of-global-header'
export default {
  name: 'global-header',
  components: { 'menu-of-global-header': MenuOfGlobalHeaderComp },
  methods: {
    ...mapActions(['syncSign']),
    goToSignIn () {
      this.$router.push({ name: 'SignIn' })
    },
    showMenu () {
      this.$refs.$menuOfGlobalHeader.showMenu()
    }
  },
  created () {
    this.syncSign()
  }
}
</script>

<style scoped>
  header {
    border-bottom: 1px solid #e5e5e5;
    height: 70px;
  }

  .flex-con-row {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .flex-item {
    display: flex;
  }
  .item-mg-8 {
    margin: 8px;
  }
  .logo {
    /* temp */
    background-color: #c3c3c3;
    text-align: center;
    width:280px;
    height: 32px;
  }

  .h-inh {
    height: inherit;
  }
  .header-nav-rep {
    font-size: 1.5em;
    color: #6d6f7b;
    padding: 4px;
    margin: 0px 8px 0px 8px;
  }

  .bold-on-hover:hover {
    color: #323648;
    font-weight: bold;
  }

</style>
