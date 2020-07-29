<template>
	<!-- Default box -->
	     <div class="box">
	       <div class="box-header with-border">
	         <h3 class="box-title">顾客管理</h3>
		
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
						      <th scope="col" style="text-align:center"><h4><b>房间号</b></h4></th>
						      <th scope="col" style="text-align:center"><h4><b>顾客ID</b></h4></th>
						      <th scope="col" style="text-align:center"><h4><b>电话号码</b></h4></th>
						      <th scope="col" style="text-align:center"><h4><b>入住时间</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>入住天数</b></h4></th>
							  <th scope="col" style="text-align:center"><h4><b>订购方式</b></h4></th>
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
					<a href="toadd.do" class="btn btn-primary btn-lg" style="text-align:center">增加顾客</a>
	       </div>
			  </div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"CustomerMain",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
