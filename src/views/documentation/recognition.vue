<template>
  <div class="recognition" >
      <header style="position:relative">
         <el-input v-model="input" placeholder="车型/车牌号" style="position:absolute;right:200px;width:150px"></el-input>
           <div
            style="margin-right: 300px; margin-top: -47px; position: absolute"
          >
            
          </div>
      </header>
      <main>
           <el-table :data="tableData" style="width: 71%" border>
              <el-table-column label="车牌号" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="车型" width="180" center>
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
              
                <el-table-column label="核载" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
                <el-table-column label="归属" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
                <el-table-column label="图片" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="280">
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
      </main>
      <footer>Copyrig[中圆智能工程有限公司]</footer>
  </div>
</template>
<script>
  export default {
    neme:"recognition",
    data(){
      return {
        input:"",
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
       methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
<style lang="scss" scoped>
*{
  margin:0 ;
  padding:0;
}
   .recognition{
       width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   }
   header{
     height:200px;
   }
   main{
     flex:1
   }
   footer{
     width:100%;
     line-height:50px;
     display:flex;
     justify-content:center;
     position:fixed;
     bottom:0
   }
</style>