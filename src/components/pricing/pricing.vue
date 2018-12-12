<template>
  <div>
    <home-header-comp></home-header-comp>
    <div class="main center-block">
      <!--if not-signed-in -->
      <div class="main-content-item">
        <div class="flex-al-ct-cont">
          <div style="flex: 0 1 auto; width: 50%; padding: 8px;">
            <p style="font-size: 3em;">첫 사용 프로모션</p>
            <p style="font-size: 1.5em;">첫 이용자에게 한 달 무료 구독</p>
            <button class="generic" type="button">한달 무료 이용 신청</button>
          </div>
          <div>
            <span>그림</span>
          </div>
        </div>
      </div>

      <div class="main-content-item">
        <p>설명이라능</p>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderComp from '../headers/home-header'

export default {
  name: 'pricing',
  components: {
    'home-header-comp': HomeHeaderComp
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-content-item {
    width: 100%;
    background-color: var(--grey-bg-color);
    padding: 32px;
    margin: 16px 0;
  }
  div.flex-al-ct-cont {
    display: flex;
    align-items: center;
  }

</style>
