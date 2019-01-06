<template>
  <div class="app-file-uploader">
    <form class="multipart-file-form" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
      <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="fileChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
             accept="image/*" class="input-file">
    </form>

  </div>
</template>

<script>
import api from '../../api/api'
const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'appFileUploader',
  props: {
    mode: String
  },
  data () {
    return {
      uploadedFiles: null,
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'file'
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (formData) {
      this.currentStatus = STATUS_SAVING

      api.uploadAppFile(formData)
        .catch(err => {
          this.uploadError = err.response
          this.currentStatus = STATUS_FAILED
        })
        .then(data => {
          this.uploadedFiles = [].concat(data)
          this.currentStatus = STATUS_SUCCESS
        })
    },
    fileChange (fieldName, fileList) {
      // handle file changes
      const formData = new FormData()

      if (!fileList.length) return

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name)
        })

      // save it
      this.save(formData)
    }
  },
  mounted () {
    this.reset()
  }
  /*

  */
}
</script>

<style scoped>

</style>
