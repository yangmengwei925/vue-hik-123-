/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // {
  //   path: '/index',
  //   component: () => import('@/views/index/index'),
  //   hidden: true
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '',
      breadcrumb: false
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true, breadcrumb: false }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    alwaysShow: true,
    redirect: '/documentation/visitor',
    meta: {
      title: '综合管控',
      breadcrumb: false
    },
    children: [
      {
        path: 'visitor',
        component: () => import('@/views/documentation/index'),
        // redirect: '/documentation/visitor/page',
        name: 'visitor',
        meta: { title: '资产管理' },
        children: [
          {
            path: 'page',
            component: () => import('@/views/documentation/components/page'),
            name: 'page',
            meta: {
              title: '录入表格',
              icon: 'documentation',
              roles: ['admin'], // or you can only set roles in sub nav
               parentTitle:"访客管理"
            }
          },
          {
            path: 'directive',
            component: () => import('@/views/documentation/components/directive'),
            name: 'directive',
            meta: {
              title: '资产入库',
              icon: 'el-icon-s-comment',
              roles: ['admin'],
              parentTitle:"访客管理"
            }
          },
          {
            path: 'role',
            component: () => import('@/views/documentation/components/role'),
            name: 'role',
            meta: {
              title: '资产领用申请流程',
              icon: 'el-icon-s-promotion',
              roles: ['admin'],
              parentTitle:"访客管理"
            }
          },
           {
            path: "VisitorsPermissions",
            component: () => import('@/views/documentation/components/VisitorsPermissions'),
            name: "VisitorsPermissions",
            meta: {
              title: '资产领用',
              icon: 'el-icon-s-order',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },
           {
            path: "visitors",
            component: () => import('@/views/documentation/components/visitors'),
            name: "visitors",
            meta: {
              title: '资产归还',
              icon: 'el-icon-s-finance',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },
           {
            path: "todo",
            component: () => import('@/views/documentation/components/todo'),
            name: "todo",
            meta: {
              title: '资产维修出库',
              icon: 'el-icon-s-finance',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
           }, 
           {
            path: "approval",
            component: () => import('@/views/documentation/components/approval'),
            name: "approval",
            meta: {
              title: '资产维修入库',
              icon: 'el-icon-s-claim',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },{
            path: "assetretirement",
            component: () => import('@/views/documentation/components/assetretirement'),
            name: "assetretirement",
            meta: {
              title: '资产报废',
              icon: 'el-icon-s-claim',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },{
            path: "assetevent",
            component: () => import('@/views/documentation/components/assetevent'),
            name: "assetevent",
            meta: {
              title: '资产事件',
              icon: 'el-icon-s-claim',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },{
            path: "assetquery",
            component: () => import('@/views/documentation/components/assetquery'),
            name: "assetquery",
            meta: {
              title: '资产查询',
              icon: 'el-icon-s-claim',
               roles: ['admin'],
               parentTitle:"访客管理"
            }
          },{
            path: "assetmaintenance",
            component: () => import('@/views/documentation/components/assetmaintenance'),
            name: "assetmaintenance",
            meta: {
              title: '资产维修',
              icon: 'el-icon-s-claim',
               roles: ['admin'],
               redirect:"/documentation/components/assetmaintenance/",
               parentTitle:"访客管理" },
               children:[
              //   {
              //     path: "assetsflow",
              //     component: () => import('@/views/documentation/components/assetmaintenance/assetsflow'),
              //     name: "assetsflow",
              //     meta: {
              //       title: '资产维修',
              //       icon: 'el-icon-s-claim',
              //        roles: ['admin'],
              //        redirect:"/documentation/components/assetmaintenance/assetsflow",
              //        parentTitle:"访客管理"
              //     }
               ]
          },{
            path: "assetsflow",
                component: () => import('@/views/documentation/components/assetsflow'),
                name: "assetmaintenance",
                meta: {
                  title: '资产报修流程',
                  icon: 'el-icon-s-claim',
                   roles: ['admin'],
                  
                   parentTitle:"访客管理"
                }
          },{
            path: "Import",
            component: () => import('@/views/documentation/components/Import'),
            name: "assetmaintenance",
            meta: {
              title: '资产维修信息导入',
              icon: 'el-icon-box',
               roles: ['admin'],
               redirect:"/documentation/components/Import",
               parentTitle:"访客管理"
            }
          }
        ]
      },
      {
        path: "processing",
        name: "processing",
        component: () => import('@/views/documentation/processing'),
        // meta: { title: "事件处理",parentTitle:"事件处理"}
        meta: { title: "人员档案管理",parentTitle:"人员档案管理"}
      }, {
        path: "drawing",
        name: "drawing",
        component: () => import('@/views/documentation/drawing'),
        // meta: { title: "图上监控",parentTitle:"图上监控" }
        meta: { title: "人员管理",parentTitle:"人员管理" }
      },
      {
        path: "recognition",
        name: "recognition",
        component: () => import('@/views/documentation/recognition'),
        // meta: { title: "重点人脸识别",parentTitle:"重点人脸识别" }
        meta: { title: "车辆管理",parentTitle:"车辆管理" }
      },
      {
        path: "stranger",
        name: "stranger",
        component: () => import('@/views/documentation/stranger'),
        // meta: { title: "陌生人识别",parentTitle:"陌上人识别" }
        meta: { title: "访客系统",parentTitle:"访客系统" }
      },
      {
        path: "identification",
        name: "identification",
        component: () => import('@/views/documentation/identification'),
        // meta: { title: "高频人员识别",parentTitle:"高频人员识别"}
          meta: { title: "门禁系统",parentTitle:"门禁系统"}
      },
      {
        path: "cars",
        name: "cars",
        component: () => import('@/views/documentation/cars'),
        // meta: { title: "人车智能搜索",parentTitle:"人车智能搜索" }
        meta: { title: "车闸系统",parentTitle:"车闸系统" }
      },
      {
        path: "bodyrecognition",
        name: "bodyrecognition",
        component: () => import('@/views/documentation/bodyrecognition'),
        // meta: { title: "人体识别",parentTitle:"人体识别" }
        meta: { title: "请销假",parentTitle:"请销假" }
      },
      {
        path: "vehicleidentification",
        name: "vehicleidentification",
        component: () => import('@/views/documentation/vehicleidentification'),
        // meta: { title: "车辆识别", parentTitle:"车辆识别" }
        meta: { title: "岗哨管理", parentTitle:"岗哨管理" }
      },
      {
        path: "patrolling",
        name: "patrolling",
        component: () => import('@/views/documentation/patrolling'),
        // meta: { title: "人体测温管理",parentTitle:"人体测温管理"}
        meta: { title: "巡更管理", parentTitle:"巡更管理" }
      },
      {
        path: "traffic",
        name: "traffic",
        component: () => import('@/views/documentation/traffic'),
        // meta: { title: "客流量",parentTitle:"客流量" }
           meta: { title: "手机受控管理",parentTitle:"手机受控管理" }
         
      },
      {
        path: "p]ersonneldensity",
        name: "p]ersonneldensity",
        component: () => import('@/views/documentation/p]ersonneldensity'),
        //meta: { title: "人员密度",parentTitle:"人员密度"}
        meta: { title: "无人机管控",parentTitle:"无人机管控" }
      },
      {
        path: "passenger",
        name: "passenger",
        component: () => import('@/views/documentation/passenger'),
        // meta: { title: "客流量同环比",parentTitle:"客流量同环比" }
        meta:{title:"信息发布",parentTitle:"信息发布"}
      },
      {
        path: "personnel",
        name: "personnel",
        component: () => import('@/views/documentation/personnel'),
        // meta: { title: "人员密度同环比",parentTitle:"人员密度同环比" }
        meta: { title: "视频监控",parentTitle:"视频监控" }
      },{
        path: "management",
        name: "management",
        component: () => import('@/views/documentation/management'),
        // meta: { title: "人员密度同环比",parentTitle:"人员密度同环比" }
        meta: { title: "消防管理",parentTitle:"消防管理" }
      },{
        path: "perimeter",
        name: "perimeter",
        component: () => import('@/views/documentation/perimeter'),
        // meta: { title: "人员密度同环比",parentTitle:"人员密度同环比" }
        meta: { title: "周界管理",parentTitle:"周界管理" }
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: 'external-link',
    component: Layout,
    meta: {
      title: '视频监控'
    },
    children: [
      {
        path: '',
        meta: { title: '实时预览' }
      }, {

        path: '',
        meta: { title: '录像回放' }

      }
      , {

        path: '',
        meta: { title: '图片查询' }

      }
      , {

        path: '',
        meta: { title: '高空抛物事件...' }

      },
    ]
  },
]
// export const asyn =[
//   {
//     path:"",
//     component:Layout,
//     meta:{
//       title:"一卡通",
//     },
//     children:[
//       {
//         path:"",
//         meat:{title:"人员发卡"}
//       }
//     ]
//   }
// ]

const createRouter = () => new Router({

  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
