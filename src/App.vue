<template>
  <div id="app">
    <app-bar></app-bar>
    <main class="page__content">
      <router-view />
    </main>
    <app-footer></app-footer>
    <modal-outlet></modal-outlet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from '@/components/AppBar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppBar,
    AppFooter,
  },
})
</script>

<style>
#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
