<template>
  <div class="processing">
    <div class="wrap">
      <header style="position: relative">
        <h3>档案管理</h3>
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="height: 50px"
          >
          </el-date-picker>
          <div
            style="margin-left: 420px; margin-top: -47px; position: absolute"
          >
            <el-row>
              <el-button type="danger" plain style="width: 100px; height: 50px"
                >查询</el-button
              >
            </el-row>
          </div>
        </div>
      </header>
      <main>
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          style="margin: 0 120px 0 20px"
        >
          <el-tab-pane label="档案列表" name="first">
            <el-table :data="tableData" style="width: 100%" border>
              <el-table-column label="日期" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="姓名" width="180" center>
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
          <el-tab-pane label="档案创建" name="second">
            <div>
            姓名：杨洋,年龄:32, 军衔:忠孝<br>
            部门：123团，职务:团长证件类型：军官证
            </div>
          </el-tab-pane>
        </el-tabs>
      </main>
      <footer>Copyrig[中圆智能工程有限公司]</footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "processing",
  data() {
    return {
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
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      activeName: "first",

      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
    };
  },
  //做事件
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.processing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background: rgb(236, 229, 229);
}
header {
  width: 100%;
  height: 200px;
  // background: red;
}
.block {
  margin-left: 130px;
  position: absolute;
}
main {
  flex: 1;
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
