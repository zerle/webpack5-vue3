<template>
  <div>{{state.msg}}</div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: 'About',
  setup () {
    const state = reactive({
      msg: 'About'
    })
    return { state }
  }
}
</script>