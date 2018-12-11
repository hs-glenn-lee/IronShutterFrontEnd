<template>
  <div>
    <home-header></home-header>
    <section style="height: 600px; background-color: #ececec;">
      <div class="center-block" >
        <div>
          <p>home.. 메인 페이지</p>
          <p>서비스 소개 내용</p>
          <p>이미지 등</p>
          <p>가로 최대 1080</p>
        </div>
      </div>
    </section>
    <section id="getting-start-section">
      <div class="center-block" >
        <h3 style="display: block; text-align: center; font-size: 3em; color: #fff;">(가칭)을 시작하세요.</h3>
        <div style="text-align: center; margin-bottom: 16px;">
          <router-link :to="{name: 'Home'}">시작하기</router-link>
        </div>
      </div>
    </section>
    <recap-footer></recap-footer>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeaderComp from './headers/home-header'
import CommonFooterComp from './footers/common-footer'
import RecapFooterComp from './footers/recap-footer'

export default {
  name: 'Home',
  components: {
    'common-footer': CommonFooterComp,
    'home-header': HomeHeaderComp,
    'recap-footer': RecapFooterComp
  }
}
</script>

<style scoped>
  section {
    padding: 64px 0px;
  }
  #getting-start-section {
    background: #6441a5 url("../assets/images/bg_halftone_black_20p.png");
  }
  #getting-start-section a {
    display: inline-block;
    font-size: 1.5rem;
    color: #6441a5;

    padding: 16px 24px;
    margin-top: 24px;
    border: 1px solid #6441a5;
    border-radius: 5px;
    background-color: #fff;
  }
</style>
