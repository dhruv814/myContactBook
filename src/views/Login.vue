<template>
  <div class="border">
    <h3>Login</h3>
    <hr/>
    <form @submit.prevent="handleSubmit">
      <div class="container">
      <div v-if="errors.length" class="row error justify-content-center">
          <p v-for="error in errors" :key="error">{{error}}</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-7">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            name="username"
            class="form-control"
            :class="{ 'is-invalid': submitted && !username }"
          />
          <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
        </div>
      </div>

      <div class="row justify-content-center ">
        <div class="col-xs-7">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && !password }"
          />
          <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xs-7">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from "../service/user.service.js";
import { messageService } from '../service/message.service';
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      errors: []
    };
  },
  computed: {
    // ...mapState('account', ['status'])
  },
  userService: null,
  created() {
    this.userService = new UserService();
  },
  methods: {
    handleSubmit: async function(e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        let result = await this.userService.login(username, password);
        if (result == "true") {
          localStorage.setItem("user", "true");
          messageService.sendMessage(true);
          this.$router.push("/");
        } else {
          this.errors.push("username or password is invalid");
        }
      }
    }
  }
};
</script>

<style>
div {
  text-align: center;
}
.row {
  margin-left: 28%;
  margin-bottom: 1.5%;
}
.border {
  width: 50%;
  padding-top: 1%;
  margin-left: 25%;
  border-bottom: 2px solid black;
}

.btn {
  margin: 10px;
}
.error{
  color: red;
}
</style>
