<template>
  <div>
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <router-view/>
      </div>
    </header>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      titulo: "Elvis Basilio",
      corre: "elvis.2e3@gmail.com",
    }
  }
}
</script>

<style>
#app {

}
</style>
