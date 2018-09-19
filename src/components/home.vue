<template>
  <div>
    <global-header></global-header>
    <section class="center-block">
      <div class="service-link">
        <div>다운로드</div>
        <div>회원가입</div>
      </div>
      <div class="intro-contents">
        <div>서비스 소개 내용</div>
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
