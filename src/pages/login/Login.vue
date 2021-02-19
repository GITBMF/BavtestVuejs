<template>
      <div class="body">
        <e-header/>
        <div class="main forms-body body w-full bg-white md:bg-gray-100 h-screen py-8">
        <form class="p-5 md:shadow-lg text-base rounded max-w-screen-sm mx-auto pb-4 bg-white rounded" action="">
          <h1 class=" heading text-center text-4xl pt-5 mb-8 color-primary font-semibold">LogIn</h1>
          <div class="email relative sm:mx-2 mb-2">
            <input
              v-model="email"
              type="email"
              placeholder="email"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <div class="password relative sm:mx-2 mb-2 mt-4">
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="password"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>

          <div
            class="flex flex-col text-sm md:text-base items-start md:items-center sm:mx-2 md:flex-row md:justify-between"
          >
            <div class="remember-me flex justify-center items-center">
              <label for="remember-me" class="flex items-center">
                Remember Me
                <input
                  style="width: 18px; height: 18px"
                  class="ml-2"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
              </label>
            </div>
            <div class="forgot-password color-primary hover:underline  self-end md:self-center">
              <a href="">Forgot Password</a>
              
            </div>
          </div>
          <div
            class="log-in flex mr-2 justify-center md:justify-end mt-4"
          >
            <button
                :disabled="disabled"
                type="submit"
                class="logIn relative py-2 px-4 btn-primary rounded font-bold w-40"
            >
              Login
              <a href=".." class="absolute top-0 left-0 w-full h-full"></a>
            </button>
          </div>
          <div
            class="no-account log-in flex mr-2 justify-center flex-wrap items-center mt-4"
          >
            <div class="mr-2 break-normal">
              <h1>You don't have an account?</h1>
            </div>
            <a href="../signup" class="color-primary hover:underline">SignUp</a>
          </div>
        </form>
      </div>
      </div>
    
</template>

<script>
import eHeader from '../../components/e-header.vue';
export default {
  components: { eHeader },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    disabled() {
      return (this.email === "") || (this.password === "");
    }
  }
};
  
</script>

<style scoped>

</style>

