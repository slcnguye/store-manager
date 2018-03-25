<template>
  <div class="settings-categories-list">
    Settings categories list
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'settings-categories-list',
  computed: {
    ...mapGetters(['categories'])
  }
}
</script>
