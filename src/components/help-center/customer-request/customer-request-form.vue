<template>
  <div class="customer-request-form">
    <div class="request-form">
      <div class="guide" style="font-size: 1.2em;">
        <p>프로그램 오류, 기능 개선과 추가 의견, 사용문의를 작성해서 보내주세요.</p>
      </div>
      <div style="margin: 24px 0;">
        <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
      </div>
      <div>
        <button type="button" class="generic" style="font-size: 1.3em; min-width: 160px;">제출하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderComp from '../../headers/home-header'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'customerRequestFrom',
  components: {
    'home-header': HomeHeaderComp,
    VueEditor
  },
  data: function () {
    return {
      content: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        ['image']
      ]
    }
  }
}
</script>

<style scoped>
  .request-form {
    margin: 32px 0;
  }

</style>
