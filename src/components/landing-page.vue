<template>
  <div class="landing-page">
    <el-container style="flex: 1;">
      <el-main class="main-container">
        <div class="store-information">
          <el-row>
            <el-col :span="16" :offset="4">
              <img src="../assets/logo.png">
            </el-col>
          </el-row>
          <h2>{{ currentTenant.name }}</h2>
          <el-row>
            <el-button type="primary" round>View Price List</el-button>
            <el-button type="success" round>Book an Appointment</el-button>
          </el-row>
          <div class="padding-top">
            <div v-if="currentTenant.address1">{{ currentTenant.address1 }}</div>
            <div v-if="currentTenant.address2">{{ currentTenant.address2 }}</div>
            <div v-if="currentTenant.phoneNumber">
              <i class="fa fa-phone"></i>
              <a :href="'tel:+' + currentTenant.phoneNumber">
                {{ currentTenant.phoneNumber | toPhoneNumber }}
              </a>
            </div>
            <div v-if="currentTenant.email">
              <i class="fa fa-envelope-o"></i>
              <a :href="'mailto:' + currentTenant.email">
                {{ currentTenant.email }}
              </a>
            </div>
          </div>
        </div>
        <div>
          <!--<embedded links-->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LandingPage',
  props: ['tenantPrefix'],
  computed: {
    currentTenant () {
      return this.tenants.find((tenant) => {
        return tenant.prefixUrl === this.tenantPrefix
      })
    },
    ...mapState(['tenants'])
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .main-container {
    display: flex;
  }

  .store-information {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
</style>
