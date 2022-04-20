<template>
 <p>{{ msg }}</p>
  <div>
      <router-link to="/">
          Home
      </router-link> |
      <router-link to="/about">
          About
      </router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎访问webpack5 + vue3 页面'
    }
  }
}
</script>