<template >
  <div class="patorling">
    <header></header>
     <main>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="实时动态" name="first">
            <div class="content">
                 <h3>人行通道</h3>
                 <div style="display:flex;height:200px;background:#eee;width:300px">
                   <div style =""> 
                      <span>姓名:杨洋</span><br>
                      <span>性质:访客</span><br>
                      <span> 预约时间:	2021-12-21</span><br>
                    </div>
                    <!-- 图片        -->
                 <div>   
                   </div>
                 </div>
                 <div>
                     <span>司机:杨洋</span><br>
                      <span>性质:访客</span><br>
                      <span> 预约时间:	2021-12-21</span><br>
                 </div>
                 <hr>
            </div>
        </el-tab-pane>
        <el-tab-pane label="巡更记录" name="second">
          
        </el-tab-pane>
        <el-tab-pane label="巡更排班" name="third">巡更排班</el-tab-pane>
        <el-tab-pane label="巡更编队" name="fourth">巡更编队</el-tab-pane>
  </el-tabs>
     </main>
     <footer></footer>
  </div>

</template>
<script>
export default {
  name:"patorling",
  data(){
     return {
        activeName: 'first'
     }
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="scss" scoped>
.patorling{
       width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
     bottom:0;
     background:#ccc
   }
</style>
