import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminLogin from "./../components/admin/login.vue";
import HomeMain from "./../components/home/main.vue";
import RoomTypeMain from "./../components/roomtype/main.vue";
import EmployeeMain from "./../components/employee/main.vue";
import RoomMain from "./../components/room/main.vue";
import DepartmentMain from "./../components/department/main.vue";
import CustomerMain from "./../components/customer/main.vue";


Vue.use(VueRouter)

const routes = [
	
	{path:"/admin",name:"login",component:AdminLogin},
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/roomtype",name:"roomtypemain",component:RoomTypeMain},
	{path:"/employee",name:"employeemain",component:EmployeeMain},
	{path:"/room",name:"roommain",component:RoomMain},
	{path:"/department",name:"departmentmain",component:DepartmentMain},
	{path:"/customer",name:"customermain",component:CustomerMain}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
