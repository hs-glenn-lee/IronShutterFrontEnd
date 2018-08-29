<template>
  <header class="global-header">
    <div class="flex-con-row"><!-- if not signed-in -->
      <div class="flex-item">
        <div @click="showMenu" class="menu-icon hover-pointer">menu</div>
      </div>
      <div class="flex-item">
        <div class="logo">logo</div>
      </div>
      <div class="flex-con">
        <div @click="goToSignIn" class="header-link hover-pointer">로그인</div>
      </div>
    </div>
    <menu-of-global-header ref="menu"></menu-of-global-header>
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
      this.$refs.menu.showMenu()
    }
  },
  created () {
    this.syncSign()
  }
}
</script>

<style scoped>
  header {

  }

  .flex-con-row {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .flex-item {
    display:inline-block;
  }
  .logo {
    /* temp */
    display: inline-block;

    background-color: #c3c3c3;
    text-align: center;
    width:280px;
    height: 32px;
  }

  .header-link {
    padding: 4px;
    margin: 0px 4px 0px 4px;
  }
</style>
