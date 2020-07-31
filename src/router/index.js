import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './../store/index';

import AdminLogin from "./../components/admin/login.vue";
import HomeMain from "./../components/home/main.vue";

import DepartmentMain from "./../components/department/main.vue";
import RoomTypeMain from "./../components/roomtype/main.vue";
import EmployeeMain from "./../components/employee/main.vue";
import RoomMain from "./../components/room/main.vue";
import CustomerMain from "./../components/customer/main.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/department",name:"departmentmain",component:DepartmentMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/roomtype",name:"roomtypemain",component:RoomTypeMain},
	{path:"/employee",name:"employeemain",component:EmployeeMain},
	{path:"/room",name:"roommain",component:RoomMain},
	{path:"/customer",name:"customermain",component:CustomerMain}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) => {
	if(to.path=="/login"){
		next();
	}
	else{
		 if(store.getters.loginuser!=null){
			 next();
		 }
		 else{
			 next("/login");
		 }
	}
})

export default router
