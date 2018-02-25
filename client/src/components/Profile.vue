<template>
<div class="container">
   <div class="col-lg-4 col-sm-6 text-center mb-4 pp">
      <img class="rounded-circle img-fluid d-block mx-auto" :src="image" alt="">
      <input type="file" @change="onFileChange">
      <button @click="uploadImage"> upload</button>
      <button @click="removeImage">Remove image</button>
      <h3>John Smith
        <small>Job Title</small>
      </h3>
      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
const elukis = 'auth-elukis'
const baseUrl = 'http://localhost:3000/api'
export default {
  data () {
    return {
      image: '',
      fileUpload: ''
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      this.fileUpload = files
      if (files.length > 0) {
        return this.createImage(files[0])
      }
    },
    createImage (file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage (e) {
      this.image = ''
    },
    uploadImage () {
      // console.log(this.fileUpload[0]);
      let data = new FormData()
      console.log(this.fileUpload[0], 'ini file upload')
      data.append('image', this.fileUpload[0])
      console.log(data, 'ini data iamge')
      axios.put(baseUrl + '/users/image', data, {
        headers: {
          token: localStorage.getItem(elukis)
        }
      })
        .then(response => {
          console.log(response.data, 'ini resp')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .pp {
    margin: auto;
    margin-top: 3%;
  }
</style>
