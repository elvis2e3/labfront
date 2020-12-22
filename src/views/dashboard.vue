<template>
  <div>
    <h1 class="mb-1">{{ titulo }}</h1>
    <h3 class="mb-5">
      <em>{{ corre }}</em>
    </h3>
    <div class="row">
      <div class="row">
        <div class="col-lg-4">
          <router-link to="/problem-1">
            <a class="portfolio-item">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">1</div>
                  <p class="mb-2">Liga de Padel</p>
                </div>
              </div>
              <img class="img-fluid" src="img/muro.jpeg" alt="">
            </a>
          </router-link>
        </div>
        <div class="col-lg-4">
          <router-link to="/problem-2">
            <a class="portfolio-item">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">2</div>
                  <p class="mb-2">Chess</p>
                </div>
              </div>
              <img class="img-fluid" src="img/muro.jpeg" alt="">
            </a>
          </router-link>

        </div>
        <div class="col-lg-4">
          <router-link to="/problem-3">
            <a class="portfolio-item">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">3</div>
                  <p class="mb-2">String Value</p>
                </div>
              </div>
              <img class="img-fluid" src="img/muro.jpeg" alt="">
            </a>
          </router-link>

        </div>
      </div>
    </div>
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
</style>
