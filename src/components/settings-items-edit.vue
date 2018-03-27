<template>
  <div class="settings-items-edit">
    <el-container>
      <el-main>
        <h2 v-if="itemDetail && itemDetail.id">Edit Item</h2>
        <h2 v-else>Create Item</h2>

        <el-form class="item-form" :model="form" ref="form" label-width="100px">
          <el-form-item label="Name" prop="name"
            :rules="[{ required: true, message: 'Name is required'}]">
            <el-input v-model="form.name" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="Price" prop="price"
            :rules="[{ required: true, message: 'Price is required'},
                     { type: 'number', message: 'Price must be a number'}]">
            <el-input type="number" v-model.number="form.price" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Category" prop="categoryId">
            <el-select clearable v-model="form.categoryId">
              <el-option v-for="category in selectableCategories" :key="category.id" :label="category.name" :value="category.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('form')">Submit</el-button>
            <el-button @click="cancel('form')">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'settings-items-edit',
  props: ['id'],
  data: function () {
    return {
      form: {
        name: null,
        categoryId: null,
        price: null
      }
    }
  },
  mounted: function () {
    if (this.itemDetail) {
      this.form.id = this.itemDetail.id
      this.form.name = this.itemDetail.name
      this.form.price = this.itemDetail.price
      this.form.categoryId = this.itemDetail.categoryId
    }
  },
  computed: {
    itemDetail () {
      const item = this.items.find((item) => {
        if (item.id === this.id) {
          return item
        }
      })
      return item
    },
    selectableCategories () {
      return this.categories.filter((category) => {
        return category.id !== 0
      })
    },
    ...mapState(['items', 'categories'])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            this.$store.dispatch('saveItemUpdate', this.form)
          } else {
            this.$store.dispatch('saveItemNew', this.form)
          }
          this.$router.go(-1)
        }
        return valid
      })
    },
    cancel (formName) {
      this.$refs[formName].resetFields()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .item-form {
    width: 500px;
  }
</style>
