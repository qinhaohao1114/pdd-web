<template>
  <div class="me">
    <select-login/>
  </div>
</template>

<script>
  import SelectLogin from './../../components/Login/SelectLogin'

  export default {
    name: "Me",
    components:{
      SelectLogin
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
  .me
    background purple
    width 100%
    height 100%
</style>
