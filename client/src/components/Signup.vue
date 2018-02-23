<template>
  <div class="bg-reg col-lg-5 col-lg-offset-7">
    <span>
      <img src="https://www.californiapaints.com/wp-content/uploads/californiapaints-favicon.png" alt="E-lukis">
    </span>
    <form>
      <fieldset>
        <div class="form-group row" style="margin: auto;" >
          <!-- first_name -->
          <label for="firstName" class="col-sm-3 col-form-label">First Name</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.first_name" class="form-control" id="firstName" placeholder="Type Your First Name" type="text">
          </div>
          <!-- last_name -->
          <label for="lastName" class="col-sm-3 col-form-label">Last Name</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.last_name" class="form-control" id="lastName" placeholder="Type Your Last Name" type="text">
          </div>
          <!-- contact -->
          <label for="staticContact" class="col-sm-3 col-form-label">Contact</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.contact" class="form-control" id="staticContact" placeholder="Type Your Contact" type="text">
          </div>
          <!-- username -->
          <label for="staticUsername" class="col-sm-3 col-form-label">Username</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.username" class="form-control" id="staticUsername" placeholder="Type Your Username" type="text">
          </div>
          <!-- email -->
          <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.email" class="form-control" id="staticEmail" placeholder="Type Your Email" type="email">
          </div>
          <!-- password -->
          <label for="staticPass" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.password" class="form-control" id="staticPass" placeholder="Type Your Password" type="password">
          </div>
          <!-- button sign up -->
          <div class="col-sm-12">
            <button @click="signup(formData)" type="button" class="btn btn-success btn-block spc">SIGN UP</button>
          </div>
        </div>
      </fieldset>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        first_name: '',
        last_name: '',
        contact: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ])
  },
  created () {
    this.formData.first_name = ''
    this.formData.lasst_name = ''
    this.formData.contact = ''
    this.formData.username = ''
    this.formData.email = ''
    this.formData.password = ''
  }
}
</script>

<style scoped>
.bg-reg {
  background-color: rgba(238, 220, 220, 0.445);
  border-width: 3px;
  border-style: solid;
  border-color: rgb(102, 72, 61);
  border-radius: 10px;
  margin: auto;
  width: 100%;
  padding: 0% 2% 2% 2%;
  margin-top: 1%;
}

input {
  margin: auto;
  padding: 1.5%;
}

img {
  width: 35%;
  padding: 0%;
  margin: 0%
}

label {
  color: rgba(63, 38, 38, 0.973);
  font-size: 120%;
  padding-right: 0%;
  text-align: left;
  font-weight: bold;
}

.lft {
  padding-left: 0%;
}

.spc {
  font-size: 120%;
  letter-spacing: 3px;
  font-weight: bold;
}
</style>
