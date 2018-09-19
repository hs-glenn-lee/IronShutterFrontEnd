<template>
  <nav ref="$menu" class="menu show">

    <div class="menu-header">
      <h1><span>바로가기</span></h1>
      <button @click="hideMenu" class="close-menu-button generic" type="button">닫기</button>
    </div>

    <div v-if="!isSignedIn" class="menu-list flex-con-col"><!--if not signed in -->
      <div class="menu-item flex-item psd-hover-cursor-pointer">
        <span>서비스 소개</span>
      </div>
      <div class="menu-item flex-item psd-hover-cursor-pointer"><span>다운로드</span></div>
    </div>
    <div v-else class="menu-list flex-con-col">
      <div class="menu-item flex-item psd-hover-cursor-pointer">
        <router-link :to="{ name: 'Charge' }">결제</router-link>
      </div>
      <div class="menu-item flex-item psd-hover-cursor-pointer"><span>계정관리</span></div>
      <div class="menu-item flex-item psd-hover-cursor-pointer"><span>다운로드</span></div>
      <div class="menu-item flex-item psd-hover-cursor-pointer"><span>고객센터</span></div>
      <div class="menu-item flex-item psd-hover-cursor-pointer"><span>서비스 소개</span></div>
    </div> <!--if signed in -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menu-of-global-header',
  computed: {
    ...mapGetters(['isSignedIn'])
  },
  methods: {
    hideMenu () {
      this.$refs.$menu.classList.remove('show')
      this.$refs.$menu.classList.add('hidden')
    },
    showMenu () {
      this.$refs.$menu.classList.remove('hidden')
      this.$refs.$menu.classList.add('show')
    }
  }
}
</script>

<style scoped>
  nav.menu {
    position: absolute;
    z-index: 1000;
    top: 0px;
    left: 0px;

    min-width: 240px;
    background-color: #fff;
    padding: 4px 0px 4px 0px;
    box-shadow: 8px 8px 16px 0 rgba(0,0,0,.2);
  }

  div.menu-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    margin-bottom: 4px;
  }

  h1 {
    font-size: 1.2em;
    opacity: 0.8;
  }

  .close-menu-button {
    margin: 0;
  }

  nav.hidden {
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }

  nav.show {
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }

  .flex-con-col {
    display:flex;
    flex-direction: column;
  }
  .flex-item {
    display: flex;
  }

  .menu-item {
    color: #4a4a4a;
    font-size: 1.2em;
    padding: 8px 32px 8px 8px;
  }

  .menu-item:hover {
    background-color: #ececec;
    color: #000;
    transition: 0.4s  ease-in-out;
  }

</style>
