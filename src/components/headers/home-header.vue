<template>
  <header class="home-header user-select-none">
    <nav class="h-nav center-block h-inh">
      <div class="h-nav-item-con h-inh">
        <div class="h-nav-item h-inh">
          <div class="logo">
            <img src="../../assets/images/logo-banner.png"/>
          </div>
          <ul class="h-nav-btn-list">
            <li @mouseover="cNavOnMouseover" @mouseout="cNavOnMouseout" class="h-nav-btn">
              <span>
                <span class="h-nav-btn-label">소개</span>
                <nav class="c-nav">
                  <small class="c-nav--heading">(가칭)을 소개합니다.</small>
                  <div class="c-nav-column">
                    <router-link :to="{ name: 'Home' }"><span>서비스 소개</span></router-link>
                    <router-link :to="{ name: 'Home' }"><span>도움말</span></router-link>
                  </div>
                </nav>
              </span>
            </li>
            <li @mouseover="cNavOnMouseover" @mouseout="cNavOnMouseout" class="h-nav-btn">
              <span><span class="h-nav-btn-label">함께하기</span>
                <nav class="c-nav">
                  <small class="c-nav--heading">(가칭)과 함께해요.</small>
                  <div class="c-nav-column">
                    <router-link :to="{ name: 'Home' }"><span>다운로드</span></router-link>
                    <router-link :to="{ name: 'Home' }"><span>고객센터</span></router-link>
                  </div>
                </nav>
              </span>
            </li>
            <li class="h-nav-btn">
              <span><span class="h-nav-btn-label">요금제</span></span>
            </li>
          </ul>
        </div>

        <div class="h-nav-item-con h-inh">
          <div class="h-nav-item" v-if="isSignedIn">
              <div class="icon-cont" @click="goToSignIn">
                <img style="height: 32px;" src="../../assets/images/icon-person.png"/>
                <span style="display: inline-block; font-size: 16px; font-weight: bold; padding: 6px;">{{getAccount.username}}</span>
              </div>
          </div>
          <div class="h-nav-item" v-else>
              <ul class="h-nav-btn-list">
                <li @click="goToSignIn" class="h-nav-btn">
                  <span class="h-nav-btn-label">로그인</span>
                </li>
              </ul>
          </div>

        </div>
      </div>
    </nav>
    <!--<menu-of-home-header ref="$menuOfGlobalHeader"></menu-of-home-header>-->
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-header',
  components: {},
  computed: {
    ...mapGetters(['isSignedIn', 'getAccount'])
  },
  methods: {
    ...mapActions(['syncSign']),
    cNavOnMouseover (event) {
      event.currentTarget.classList.add('v--show')
    },
    cNavOnMouseout (event) {
      event.currentTarget.classList.remove('v--show')
    },
    goToSignIn () {
      this.$router.push({ name: 'SignIn' })
    },
    showMenu () {
      this.$refs.$menuOfGlobalHeader.showMenu()
    }
  },
  created () {

  }
}
</script>

<style scoped>
  header.home-header {
    height: 70px;
  }

  header.home-header.has-btm-border {
    border-bottom: 1px solid #e5e5e5;
  }

  .h-nav-item-con {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .h-nav-item {
    display: flex;
  }

  .h-nav-btn-list {
    display:flex;
    flex-direction: row;
    align-items: center;
  }
  .h-nav-btn {
    display:flex;
    padding: 8px;
    margin: 0px 4px 0px 4px;
    position: relative;
  }

  .h-nav-btn-label {
    font-size: 1.3em;
    color: var(--grey-text-color);
  }

  .h-nav-btn:hover {
    cursor: pointer;
  }
  .h-nav-btn:hover .h-nav-btn-label{
    font-weight: bold;
    color: var(--black-text-color);
  }
  .h-nav-btn:hover.v--show nav.c-nav{
    display: inline-block;
  }

  .c-nav {
    left: -.05rem;
    top: 34px;
    margin-left: 0;
    max-width: none;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    width: 210px;
    padding: 20px 0 10px 20px;
    box-shadow: 0 0 2rem rgba(0,0,0,.1);

    flex-wrap: wrap;
    justify-content: space-between;

    display: none;
    position: absolute;
    background: #fff;

    transition: all .1s;
  }

  .c-nav--heading {
    font-size: 12px;
    line-height: 12px;
    display: block;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: #5b5e6d;
    width: 100%;
  }

  .c-nav-column {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    margin-left: -10px;
    margin-right: 10px;
  }

  .c-nav-column a{
    padding: 10px 0 10px 10px;
    color: var(--black-text-color);
    border-bottom: none;
    margin: 0;
    transition: none;
    font-size: 16px;
    line-height: 16px;
  }
  .c-nav-column a:hover {
    font-weight: bold;
    background-color: rgb(245, 245, 245);
  }

  .logo {
    display: flex;
    justify-self: center;
  }

  .h-inh {
    height: inherit;
  }

  .icon-cont {
    display:flex;  flex-direction: row; align-items: center;
    padding: 2px 4px;
    border-radius: 8px;
    border: 1px solid #fff;
  }

  .icon-cont:hover {
    cursor: pointer;
    border: 1px solid var(--grey-bg-color);
    box-shadow: 0 0 2px #4a4a4a;
  }

</style>
