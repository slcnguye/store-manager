<template>
  <div class="settings-items-edit">
    <el-container>
      <el-main>
        edit mode for item {{id}}
        <!-- {{itemDetail.name}} -->
        {{itemDetail.price}}
        {{itemDetail.categoryId}}
        <el-form class="item-form" :model="form" ref="numberValidateForm" label-width="100px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="age" prop="age"
            :rules="[{ required: true, message: 'age is required'},
                     { type: 'number', message: 'age must be a number'}]">
            <el-input type="age" v-model.number="form.age" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Submit</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
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
        region: null,
        age: ''
      }
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
    ...mapState(['items'])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .item-form {
    width: 500px;
  }
</style>
