<template>
  <div class="settings">
    <el-container>
      <el-main>
        <el-tabs v-model="activeTab" type="border-card" @tab-click="onTabClick">
          <el-tab-pane label="Items" :name="tabs.items">
            <settings-items-list></settings-items-list>
          </el-tab-pane>
          <el-tab-pane label="Categories" :name="tabs.categories">
            <settings-categories-list></settings-categories-list>
          </el-tab-pane>
          <el-tab-pane label="Payment Methods" :name="tabs.paymentMethods">
            <settings-payment-methods-list></settings-payment-methods-list>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SettingsItemsList from './settings-items-list.vue'
import SettingsCategoriesList from './settings-categories-list.vue'
import SettingsPaymentMethodsList from './settings-payment-methods-list.vue'

const TABS = {
  items: '1',
  categories: '2',
  paymentMethods: '3'
}

export default {
  name: 'settings',
  props: ['tabName'],
  components: {
    SettingsItemsList,
    SettingsCategoriesList,
    SettingsPaymentMethodsList
  },
  data: function () {
    return {
      tabs: TABS,
      activeTab: TABS.items
    }
  },
  mounted: function () {
    if (TABS[this.tabName]) {
      this.activeTab = TABS[this.tabName]
    }
  },
  methods: {
    onTabClick (tab) {
      let tabName
      for (const [name, tabKey] of Object.entries(TABS)) {
        if (tab.name === tabKey) {
          tabName = name
          break
        }
      }

      this.$router.push({name: 'settings', params: { tabName }})
    }
  }
}
</script>
