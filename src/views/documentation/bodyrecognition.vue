<template>
  <div class="bodyrecognition">
      <header>
        请销假
      </header>
      <main style="position:relative">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-input v-model="input" placeholder="车型/车牌号" style="position:absolute;right:200px;width:150px;margin-top:25px"></el-input>
           <div
            style="margin-right: 300px; margin-top: -47px; position: absolute"
          >
            <el-row>
              <el-button type="danger" plain style="width: 100px; height: 35px;position:absolute;margin-left:1470px;margin-top:72px;"
                >查询</el-button
              >
            </el-row>
          </div>
          <el-tab-pane label="请销假" name="first">
              <el-table :data="tableData" style="width: 71%" border>
              <el-table-column label="人员" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="证件类型" width="180" center>
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
                <el-table-column label="证件号码" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
                <el-table-column label="状态" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    style="width: 100px; height: 40px"
                    >操作</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    style="width: 100px; height: 40px"
                    >修改</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="请假统计" name="second" style="position:relative">
              <!-- <el-input v-model="input" placeholder="车型/车牌号" style="position:absolute;right:200px;width:150px;margin-top:25px"></el-input> -->
           <el-input
  placeholder="营区/姓名"
  v-model="input" style ="width:150px;"
  clearable>
</el-input> <el-button type="primary">统计</el-button>

          </el-tab-pane>
        
      </el-tabs>
      </main>
      <footer>Copyrig[中圆智能工程有限公司]</footer>
  </div>
</template>
<script>
   export default {
     name:'bodyrecognition',
     data(){
       return {
            activeName: 'first',
            input:"",
               tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
       }
     },
     methods:{
          handleClick(tab, event) {
        console.log(tab, event);
      },
       //做事
    handleClick(tab, event) {
      console.log(tab, event);
  },
     }
   }
</script>
<style lang="scss" scoped>
  .bodyrecognition{
     width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  }
  header {
  width: 100%;
  height: 200px;
  // background: red;
}
  main{
    flex:1;
  }
 footer{
     width:100%;
     line-height:50px;
     display:flex;
     justify-content:center;
     position:fixed;
     bottom:0;
     background:#ccc
   }
   </style>