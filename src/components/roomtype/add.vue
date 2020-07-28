<template>
	 <!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加房型</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	          <form action="add.do" method="post">
				  <div class="form-group">
				    <label for="exampleInputEmail1">房间型号</label>
				    <input type="text" class="form-control" name="code" aria-describedby="emailHelp">
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间内部设施</label>
				    <input type="text" class="form-control" name="name">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">价格</label>
				    <input type="text" class="form-control" name="name">
				  </div>
				  	<button type="submit" class="btn btn-primary">提交</button>
				  	<a href="tolist.do" class="btn btn-primary">取消</a>
				</form>
	        </div>
	        <!-- /.box-body -->
		    	
	        <!-- /.box-footer-->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default{
		name:"RoomTypeAdd",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
