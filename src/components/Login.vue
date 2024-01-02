<template>
  <!-- login -->
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
            <input class="form-input-custome" type="password" name="password" v-model="formData.password" />
          </div>
          <button class="w-full btn btn-purple mt-3">Login</button>
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
</template>
<script>
export default {
  data: () => ({
    formData: {
      email: "",
      password: "",
    }
  }),
  methods: {
    handerSubmit() {
      if(!this.formData.email){
        alert("Email can not be null");
        return;
      }
      if(this.formData.password.length <= 5){
        alert("Password must be at lest 6 characters long!");
        return;
      }
      console.log(this.formData.password.length);
    }
  },
  created() {

  }
}
</script>
<style scoped></style>