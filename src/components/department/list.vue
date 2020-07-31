<template>
	<!-- Default box -->
	     <div class="box">
	       <div class="box-header with-border">
	         <h3 class="box-title">部门管理</h3>
		
	         <div class="box-tools pull-right">
	           <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                   title="Collapse">
	             <i class="fa fa-minus"></i></button>
	           <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	             <i class="fa fa-times"></i></button>
	         </div>
	       </div>
	       <div class="box-body">
	         <table class="table table-bordered">
						  <thead>
						    <tr>
						      <th scope="col" style="text-align:center"><h4><b>编号</b></h4></th>
						      <th scope="col" style="text-align:center"><h4><b>编码</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>名称</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>操作</b></h4></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr v-for="dm in departmentList" v-bind:key='dm.no' >
						      <td align="center">{{dm.no}}</td>
						      <td align="center">{{dm.code}}</td>
							  <td align="center">{{dm.name}}</td>
						      <td align="center">
						      	<a href="tomodify.mvc" class="btn btn-info">修改</a>		
						      	<a href="todelete.mvc" class="btn btn-danger">删除</a>		
						      	<a href="toview.mvc" class="btn btn-primary">查看</a>
						      </td>
						    </tr>
						  </tbody>
					</table>
					<a href="toadd.mvc" class="btn btn-primary btn-lg" style="text-align:center">增加部门</a>
	       </div>
			  </div>
</template>

<script>
	//import axios from "axios"; 
	export default{
		name:"DepartmentList",
		data(){
			return{
				departmentList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created() {
			this.getList();
			this.$parent.$parent.subTitle="部门列表";
		},
		methods:{
			getList(){
				this.axiosJSON.get("/department/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page,
					}
				}).then(result=>{
					this.departmentList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			}
		}
	}
</script>

<style>
</style>
