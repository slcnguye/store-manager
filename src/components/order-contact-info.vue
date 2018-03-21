<template>
  <div class="order-contact-info">
    <div class="contact-info pointer" @click="dialogFormVisible = true">
      <i class="fa fa-user-o fa-lg padding-right text-muted"></i>
      <span class="text-link">Alexia Smith</span>
    </div>

    <el-dialog title="Contact Info" :visible.sync="dialogFormVisible">
      <div class="text-center padding-bottom">
        <el-button class="number-button">1</el-button>
        <el-button class="number-button">2</el-button>
        <el-button class="number-button">3</el-button>
      </div>
      <div class="text-center padding-bottom">
        <el-button class="number-button">4</el-button>
        <el-button class="number-button">5</el-button>
        <el-button class="number-button">6</el-button>
      </div>
      <div class="text-center padding-bottom">
        <el-button class="number-button">7</el-button>
        <el-button class="number-button">8</el-button>
        <el-button class="number-button">9</el-button>
      </div>
      <div class="text-center">
        <el-button type="warning" plain round class="number-button" @click="dialogFormVisible = false">
          <i class="fa fa-undo fa-lg"></i>
        </el-button>
        <el-button class="number-button">0</el-button>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
