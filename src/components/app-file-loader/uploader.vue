<template>
  <div class="app-file-uploader">
<!--

    <form class="drag-and-drop-multipart-file-form" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
      <h1>Upload images</h1>
      <div class="dropbox">
        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
               accept="image/*" class="input-file">
        <p v-if="isInitial">
          Drag your file(s) here to begin<br> or click to browse
        </p>
        <p v-if="isSaving">
          Uploading {{ fileCount }} files...
        </p>
      </div>
    </form>
-->
    <form class="multipart-file-form" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
      <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="fileChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
             accept="image/*" class="input-file">
    </form>

  </div>
</template>

<script>
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
import api from '../../api/api'

export default {
  name: 'appFileUploader',
  props: {
    mode: String
  },
  data() {
    return {
      uploadedFile: null,
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'files'
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      api.uploadAppFile(formData)
        .catch( err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        })
        .then( data => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
    },
    fileChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

      // save it
      this.save(formData);
    }
  },
  mounted() {
    this.reset();
  }
  /*

  */
}
</script>

<style scoped>

</style>
