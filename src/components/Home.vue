<template>
  <div class="home">
      <app-buckets />
      <ul>
          <li>Total lønn</li>
          <li>Fordeling per pers basert på lønn</li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Buckets from './Buckets/Buckets.vue'

export default {
  name: 'Home',
  components: {
      appBuckets: Buckets
  }
}
</script>
