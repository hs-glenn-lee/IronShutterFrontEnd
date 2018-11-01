<template>
  <div>
    <global-header></global-header>
    <section class="center-block">
      <div class="intro-contents">
        <div style="height: 600px; background-color: #ececec;">
          <p>home.. 메인 페이지</p>
          <p>서비스 소개 내용</p>
          <p>이미지 등</p>
          <p>가로 최대 1080</p>
        </div>
      </div>
    </section>
    <common-footer></common-footer>
  </div>
</template>

<script>
import GlobalHeaderComp from './global-header'
import CommonFooterComp from './common-footer'
export default {
  name: 'Home',
  components: {
    'common-footer': CommonFooterComp,
    'global-header': GlobalHeaderComp
  }
}
</script>

<style scoped>
  section {
    min-height: 400px;
  }
</style>
