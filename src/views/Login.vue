<template>
  <!-- login -->
  <div>

    <!-- <button class="px-4 py-2 mb-2 rounded-lg bg-purple-400" @click="show = !show">Toggle</button>
    <Transition name="showHide">
      <div class="w-10 h-10 p-10 bg-indigo-500 rounded-lg" v-if="show">
      </div>
    </Transition> -->
    <div class="flex items-center justify-center h-screen ">
      <div class="flex flex-col items-center sm:w-10/12 lg:w-1/2 p-10 bg-cyan-100 rounded-xl shadow-lg text-gray-600">
        <!-- top section  -->
        <div class="flex flex-col items-center">
          <img class="w-1/3 p-1 rounded-full ring-4 ring-purple-600 transform hover:scale-105 duration-500"
            src="../assets/images/lock.webp" alt="">
          <h1 class="text-3xl font-bold mt-2">User Login</h1>
        </div>
        <!-- form section  -->
        <div class="mt-10 font-semibold">
          <form action="" @submit.prevent="handerSubmit">
            <div class="flex flex-col mt-2">
              <label for="email" class="required">Email</label>
              <input class="form-input-custome" type="email" name="email" v-model="formData.email" />
            </div>
            <div class="flex flex-col mt-2">
              <label for="password" class="required">Password</label>
              <input class="form-input-custome" type="password" name="password" v-model="formData.password"
                ref="password" />
            </div>
            <TheButton :spin="loginIn">Login</TheButton>
          </form>
          <div class="flex text-sm justify-between mt-2">
            <div>
              <label for="rememberMe">
                <input type="checkbox" id="rememberMe">
                Remember Me
              </label>
            </div>
            <div>
              <a href="#"> Forget Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TheButton from "../components/TheButton.vue";
export default {
  data: () => ({
    formData: {
      email: "",
      password: "",
    },
    show: true,
    loginIn: false,
  }),
  methods: {
    handerSubmit() {
      if (!this.formData.email) {
        this.toastMessage('Error', "Email can not be null");
        this.$refs.password.focus();
        return;
      }
      if (this.formData.password.length <= 5) {
        
        this.toastMessage('Error', "Password must be at lest 6 characters long!");
        this.$refs.password.focus();
        return;
      }

      // Login api
      this.loginIn = true;
      axios
        .post('http://127.0.0.1:8000/api/auth/login', this.formData)
        .then((res) => {
          this.toastMessage('Success', res.data.message);
          localStorage.setItem("accesstoken",res.data.accesstoken)
          this.$router.push("/dashboard");
        })
        .catch(err => {
          let errorMessage = "Something want wrong"
          if (err.response.data) errorMessage = err.response.data.message;
          this.toastMessage('Error', errorMessage);
        })
        .finally(() => {
          this.loginIn = false;
        })
    }
  },
  created() {

  },
  components: {
    TheButton
  }
}
</script>
<style scoped>
@keyframes showHide {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.showHide-enter-active {
  transition: all 0.5s;
  animation: showHide 1s ease-in;
}

.showHide-leave-active {
  transition: all 0.5s;
  animation: showHide 1s ease-in reverse;
}
</style>