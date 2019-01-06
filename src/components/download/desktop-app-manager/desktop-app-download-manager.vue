<template>
  <div class="desktop-app-download-manager">
    <div class="main-wrapper center-block">
      <div class="main flex-col w100p">
        <div class="main-content-item w100p">
          <app-file-uploader></app-file-uploader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appFileUploaderComp from '../../app-file-loader/uploader'
export default {
  name: 'desktopAppDownloadManager',
  components: {
    'app-file-uploader': appFileUploaderComp
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
