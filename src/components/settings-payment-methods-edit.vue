<template>
  <div class="settings-payment-methods-edit">
    <el-container>
      <el-main>
        <h2 v-if="paymentMethodDetail && paymentMethodDetail.id">Edit Payment Method</h2>
        <h2 v-else>Create Payment Method</h2>

        <el-form class="payment-method-form" :model="form" ref="form" label-width="100px">
          <el-form-item label="Name" prop="name"
            :rules="[{ required: true, message: 'Name is required'}]">
            <el-input v-model="form.name" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="Is Primary" prop="isPrimary">
            <el-checkbox v-model="form.isPrimary"></el-checkbox>
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
  name: 'settings-payment-methods-edit',
  props: ['id'],
  data: function () {
    return {
      form: {
        name: null,
        id: null,
        tenantId: null,
        isPrimary: false
      }
    }
  },
  mounted: function () {
    this.form.tenantId = this.session.tenant.id
    if (this.paymentMethodDetail) {
      this.form.id = this.paymentMethodDetail.id
      this.form.name = this.paymentMethodDetail.name
      this.form.isPrimary = this.paymentMethodDetail.isPrimary
    }
  },
  computed: {
    paymentMethodDetail () {
      return this.paymentMethods.find((paymentMethod) => {
        if (paymentMethod.id === this.id) {
          return paymentMethod
        }
      })
    },
    ...mapState(['paymentMethods', 'session'])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (Number.isInteger(this.form.id)) {
            this.$store.dispatch('savePaymentMethodUpdate', this.form)
          } else {
            this.$store.dispatch('savePaymentMethodNew', this.form)
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
  .payment-method-form {
    width: 500px;
  }
</style>
