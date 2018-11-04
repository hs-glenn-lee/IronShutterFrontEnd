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
    <section style="height: 600px; background-color: #fff;">
      <div class="center-block" >
        <div>
          <p>시작하기</p>
        </div>
      </div>
    </section>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeaderComp from './home-header'
import CommonFooterComp from './common-footer'
export default {
  name: 'Home',
  components: {
    'common-footer': CommonFooterComp,
    'home-header': HomeHeaderComp
  }
}
</script>

<style scoped>
  section {
    min-height: 400px;
  }
</style>
