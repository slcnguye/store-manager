<template>
  <div class="login">
    <div class="text-center">
      <h2 class="text-extra-large">{{ session.tenant.name | uppercase }}</h2>
      <el-input class="text-extra-large access-code-input" placeholder="Enter access code" v-model="accessCode"></el-input>
    </div>
    <numpad-input :input="accessCode" :onChange="onChange" :onSubmit="onSubmit" :isValidInput="isValidInput"></numpad-input>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NumpadInput from './numpad-input.vue'

export default {
  components: {NumpadInput},
  name: 'login',
  data: function () {
    return {
      accessCode: ''
    }
  },
  computed: {
    ...mapState(['tenantUsers', 'session'])
  },
  methods: {
    onSubmit (input) {
      const user = this.tenantUsers.find((tenantUser) => {
        return tenantUser.tenantId === this.session.tenant.id && tenantUser.accessCode === input
      })

      if (user) {
        this.$store.dispatch('setUser', user)
        this.$router.push({name: 'order', params: {tenantPrefix: this.session.tenant.prefixUrl}})
      }
    },
    onChange (input) {
      this.accessCode = input
    },
    isValidInput (input) {
      return input && input.length > 0
    }
  }
}
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .access-code-input {
    padding-bottom: 30px;
    width: 300px;
  }
</style>
