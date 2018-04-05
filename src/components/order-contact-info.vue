<template>
  <div class="order-contact-info">
    <div class="contact-info pointer" @click="dialogFormVisible = true">
      <i class="fa fa-user-o fa-lg padding-right text-muted"></i>
      <span class="text-link" v-if="!session.phoneNumber">Enter Client Number</span>
      <span class="text-link" v-else>{{ session.phoneNumber | toPhoneNumber }}</span>
    </div>

    <el-dialog title="Contact Info" :visible.sync="dialogFormVisible">
      <div class="text-center text-extra-large padding-bottom" v-if="number"> {{ number | toPhoneNumber }} </div>
      <div class="text-center padding-bottom">
        <el-button class="number-button" @click="addDigit(1)">1</el-button>
        <el-button class="number-button" @click="addDigit(2)">2</el-button>
        <el-button class="number-button" @click="addDigit(3)">3</el-button>
      </div>
      <div class="text-center padding-bottom">
        <el-button class="number-button" @click="addDigit(4)">4</el-button>
        <el-button class="number-button" @click="addDigit(5)">5</el-button>
        <el-button class="number-button" @click="addDigit(6)">6</el-button>
      </div>
      <div class="text-center padding-bottom">
        <el-button class="number-button" @click="addDigit(7)">7</el-button>
        <el-button class="number-button" @click="addDigit(8)">8</el-button>
        <el-button class="number-button" @click="addDigit(9)">9</el-button>
      </div>
      <div class="text-center">
        <el-button type="warning" plain round class="number-button" @click="revertDigit">
          <i class="fa fa-undo fa-lg"></i>
        </el-button>
        <el-button class="number-button" @click="addDigit(0)">0</el-button>
        <el-button type="success" plain round class="number-button" :disabled="!validPhoneNumber" @click="saveNumber">
          <i class="fa fa-check fa-lg"></i>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'order-contact-info',
  data: function () {
    return {
      dialogFormVisible: false,
      number: null
    }
  },
  computed: {
    validPhoneNumber () {
      return this.number && this.number.length === 10
    },
    ...mapState(['session'])
  },
  methods: {
    addDigit (digit) {
      if (!this.number) {
        this.number = '' + digit
      } else if (this.number.length < 10) {
        this.number += digit
      }
    },
    revertDigit () {
      this.number = this.number.slice(0, -1)
    },
    saveNumber () {
      this.$store.dispatch('setPhoneNumber', this.number)
      this.number = null
      this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>
  .order-contact-info {
    border: 2px solid #DCDFE6;
    display: flex;
  }

  .contact-info {
    background-color: white;
    padding: 20px 10px;
    flex: 1;
  }

  .number-button {
    height: 80px;
    width: 80px;
    font-size: 20px;
  }
</style>
