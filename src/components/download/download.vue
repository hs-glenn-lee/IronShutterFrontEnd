<template>
  <div class="download-page">
    <home-header></home-header>
    <div class="main-wrapper center-block">
      <div class="main flex-col w100p">
        <div class="main-content-item w100p">
          <div>
            <p>download</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderComp from '../headers/home-header'
export default {
  name: 'download',
  components: {
    'home-header': HomeHeaderComp
  }
}
</script>

<style scoped>
  .w100p {
    width: 100%;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
