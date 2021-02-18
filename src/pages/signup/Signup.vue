<template>
      <div class="forms-body body w-full bg-white md:bg-gray-100 h-screen py-8">
        <form class="p-5 md:shadow-lg text-base rounded max-w-screen-sm mx-auto pb-4 bg-white rounded" action="">
          <h1 class=" heading text-center text-4xl pt-5 mb-8 color-primary font-semibold">Sign Up</h1>
          <h2 class="name-email text-left text-xl mb-2 font-semibold">Name and Email</h2>
          <div class="full-name relative sm:mx-2 mb-2">
            <input
              v-model="full_name"
              type="text"
              placeholder="full name"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <div class="username relative sm:mx-2 mb-2">
            <input
              v-model="username"
              type="text"
              placeholder="username"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <div class="email relative sm:mx-2 mb-2">
            <input
              v-model="email"
              type="email"
              placeholder="email"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <h2 class="name-email text-left text-xl mt-4 mb-2 font-semibold">Password</h2>
          <div class="password relative sm:mx-2 mb-2">
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="password"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <div class="password relative sm:mx-2 mb-2">
            <input
              v-model="pass_confirm"
              type="password"
              id="confirm-password"
              placeholder="confirm password"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
            <label 
              for="confirm-password"
              class="text-xs color-primary"
              v-if="!valid">the passwords do not match</label>
          </div>
           <div
            class="flex flex-col text-sm md:text-base items-start md:items-center sm:mx-2 md:flex-row md:justify-between"
          >
            <div class="flex justify-center items-center">
              <label for="terms-conditions" class="flex items-center">
                
                <input
                  style="width: 18px; height: 18px"
                  class="mr-1"
                  type="checkbox"
                  name="terms-conditions"
                  id="terms-conditions"
                  required
                  @change="update_check"
                />
                  I have read and accepted the EULA
              </label>
            </div>
          </div>
          <div
            class="flex mr-2 justify-center md:justify-end mt-4"
          >
            <button
                type="submit"
                class="py-2 px-4 btn-primary rounded font-bold w-40"
                :disabled="!validator"
            >
              Create
            </button>
          </div>
          <div
            class="log-in flex mr-2 justify-center flex-wrap items-center mt-4"
          >
            <div class="mr-2 break-normal">
              <h1>Already have an account?</h1>
            </div>
            <a href="../login" class="color-primary hover:underline">Log In</a>
          </div>
        </form>
      </div>
    
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      full_name: '',
      username: '',
      email: '',
      password: '',
      pass_confirm: '',
      check: false
    };
  },
  computed: {
    valid() {
      return (this.password === this.pass_confirm)
    },
    validator() {
      return (this.full_name != '') && (this.username != '') && (this.email != '') && (this.password != '') && this.valid && this.check
    }
  },
  methods: {
    update_check(event) {
      this.check = event.target.checked;
    }
  }
};
  
</script>

<style scoped>

</style>

