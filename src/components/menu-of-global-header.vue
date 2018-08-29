<template>
  <nav class="menu" :class="{ 'is-showing': isShowing }">
    <button @click="closeMenu" class="close-menu-button" type="button">메뉴닫기</button>
    <div v-if="!isSignedIn" class="menu-list flex-con-col"><!--if not signed in -->
      <div class="menu-item flex-item hover-pointer"><span>서비스 소개</span></div>
      <div class="menu-item flex-item hover-pointer"><span>다운로드</span></div>
    </div>
    <div v-else class="menu-list flex-con-col">
      <div class="menu-item flex-item hover-pointer">
        <router-link :to="{ name: 'Charge' }">결제</router-link>
      </div>
      <div class="menu-item flex-item hover-pointer"><span>게정관리</span></div>
      <div class="menu-item flex-item hover-pointer"><span>다운로드</span></div>
      <div class="menu-item flex-item hover-pointer"><span>고객센터</span></div>
      <div class="menu-item flex-item hover-pointer"><span>서비스 소개</span></div>
    </div> <!--if signed in -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menu-of-global-header',
  data () {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleIsMenuShowing () {
      this.isShowing = !this.isShowing
    },
    showMenu () {
      this.isShowing = true
    },
    closeMenu () {
      this.isShowing = false
    }
  },
  computed: {
    ...mapGetters(['isSignedIn'])
  }
}
</script>

<style scoped>
  nav.menu {
    position: absolute;
    z-index: 1000;

    background-color: #ececec;
    min-width: 300px;
    padding: 32px 16px 32px 16px;

    /* is-not-shwoing TODO class not showing 필요함 닫을 때 애니메이션 넣으려면 */
    visibility: hidden;
    top: 0px;
    left: -400px;
    transition: left 0.4s ease-out;
  }

  nav.menu.is-showing {
    visibility: visible;
    left: 0px;
    transition: left 0.4s ease-out;
  }

  .flex-con-col {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-item {
    display: flex;
  }

  .close-menu-button {
    position: absolute;
    right: 0px;
    top: 0px;
  }

</style>
