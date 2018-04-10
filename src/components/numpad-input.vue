<template>
  <div class="numpad-input">
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
      <el-button type="success" plain round class="number-button" :disabled="!validInput" @click="submit">
        <i class="fa fa-check fa-lg"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'numpad-input',
  props: ['input', 'onChange', 'onSubmit', 'isValidInput'],
  data: function () {
    return {
      number: null
    }
  },
  computed: {
    validInput () {
      if (!this.isValidInput) {
        return true
      }

      return this.isValidInput(this.number)
    }
  },
  methods: {
    addDigit (digit) {
      if (!this.input) {
        this.number = '' + digit
      } else {
        this.number = this.input + digit
      }
      this.onChange(this.number)
    },
    revertDigit () {
      this.number = this.input.slice(0, -1)
      this.onChange(this.number)
    },
    submit () {
      this.onSubmit(this.number)
    }
  }
}
</script>

<style scoped>
  .number-button {
    height: 80px;
    width: 80px;
    font-size: 20px;
  }
</style>
