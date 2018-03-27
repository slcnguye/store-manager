<template>
  <div class="settings">
    <el-container>
      <el-main>
        <el-tabs v-model="activeTab" type="border-card">
          <el-tab-pane label="Items" :name="tabs.items">
            <settings-items-list></settings-items-list>
          </el-tab-pane>
          <!-- <el-tab-pane label="Categories" :name="tabs.categories">
            <settings-categories-list></settings-categories-list>
          </el-tab-pane> -->
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SettingsItemsList from './settings-items-list.vue'
import SettingsCategoriesList from './settings-categories-list.vue'

const TABS = {
  items: '1',
  categories: '2'
}

export default {
  name: 'settings',
  components: {
    SettingsItemsList,
    SettingsCategoriesList
  },
  data: function () {
    return {
      tabs: TABS,
      activeTab: TABS.items
    }
  }
}
</script>
