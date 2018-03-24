<template>
  <div class="order-contact-info">
    <div class="contact-info pointer" @click="dialogFormVisible = true">
      <i class="fa fa-user-o fa-lg padding-right text-muted"></i>
      <span class="text-link">Alexia Smith</span>
    </div>

    <el-dialog title="Contact Info" :visible.sync="dialogFormVisible">
      <div class="text-extra-large padding-bottom"> {{ number | toPhoneNumber }} </div>
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
        <el-button type="success" plain round class="number-button" @click="dialogFormVisible = false">
          <i class="fa fa-check fa-lg"></i>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'order-contact-info',
  data: function () {
    return {
      dialogFormVisible: false,
      number: ''
    }
  },
  methods: {
    addDigit (digit) {
      if (this.number.length < 10) {
        this.number += digit
      }
    },
    revertDigit () {
      this.number = this.number.slice(0, -1)
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
