<template>
  <div class="settings-categories-edit">
    <el-container>
      <el-main>
        <h2 v-if="categoryDetail && categoryDetail.id">Edit Category</h2>
        <h2 v-else>Create Category</h2>

        <el-form class="category-form" :model="form" ref="form" label-width="100px">
          <el-form-item label="Name" prop="name"
            :rules="[{ required: true, message: 'Name is required'}]">
            <el-input v-model="form.name" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="Color" prop="color"
            :rules="[{ required: true, message: 'Color is required'}]">
            <el-color-picker v-model="form.color"></el-color-picker>
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
  name: 'settings-categories-edit',
  props: ['id'],
  data: function () {
    return {
      form: {
        name: null,
        color: null
      }
    }
  },
  mounted: function () {
    if (this.categoryDetail) {
      this.form.id = this.categoryDetail.id
      this.form.name = this.categoryDetail.name
      this.form.color = this.categoryDetail.color
    }
  },
  computed: {
    categoryDetail () {
      const category = this.categories.find((category) => {
        if (category.id === this.id) {
          return category
        }
      })
      return category
    },
    ...mapState(['categories'])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            this.$store.dispatch('saveCategoryUpdate', this.form)
          } else {
            this.$store.dispatch('saveCategoryNew', this.form)
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
  .category-form {
    width: 500px;
  }
</style>
