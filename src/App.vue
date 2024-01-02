<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div class="w-1/2 mx-auto p-5 bg-white shadow-2xl rounded-lg">
        <h1 class="text-3xl text-center"> Login </h1>
        <form class="flex flex-col justify-start" action="">
          <div class="flex flex-row">
            <label for="" class="text-lg text-gray-400">Email</label>
            <input class="form-control shadow-2xl rounded-md" type="email">
          </div>
          <div class="flex">
            <label for="">Password</label>
            <input type="password">
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
