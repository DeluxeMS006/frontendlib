<template>
	<!-- Default box -->
	     <div class="box">
	       <div class="box-header with-border">
	         <h3 class="box-title">员工管理</h3>
		
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
						      <th scope="col" style="text-align:center"><h4><b>员工ID</b></h4></th>
						      <th scope="col" style="text-align:center"><h4><b>姓名</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>性别</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>出生日记</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>时段</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>收入</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>操作</b></h4></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td align="center"></td>
						      <td align="center"></td>
							  <td align="center"></td>
							  <td align="center"></td>
							  <td align="center"></td>
							  <td align="center"></td>
						      <td align="center">
						      	<a href="tomodify.mvc" class="btn btn-info">修改</a>		
						      	<a href="todelete.mvc" class="btn btn-danger">删除</a>		
						      	<a href="toview.mvc" class="btn btn-primary">查看</a>
						      </td>
						    </tr>
						  </tbody>
					</table>
					<a href="toadd.do" class="btn btn-primary btn-lg" style="text-align:center">增加员工</a>
	       </div>
			  </div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"EmployeeMain",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
