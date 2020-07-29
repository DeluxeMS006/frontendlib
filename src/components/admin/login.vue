<template>
	<div class="login-box">
	  <div class="login-logo">
	    <a href="#"><b>Deluxe MS</b> Admin</a>
	  </div>
	  <!-- /.login-logo -->
	  <div class="login-box-body">
	    <p class="login-box-msg">Sign in to start your session</p>
	
	    <form action="userlogin.do" method="post">
	      <div class="form-group has-feedback">
	        <input type="text" class="form-control" required name="userid" placeholder="Email">
	        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
	      </div>
	      <div class="form-group has-feedback">
	        <input type="password" name="password" required class="form-control" placeholder="Password">
	        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
	      </div>
	      <div class="row">
	        
	        <!-- /.col -->
	        <div class="col-xs-12">
	          <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
	        </div>
	        <!-- /.col -->
	      </div>
	    </form>
	
	    <div class="social-auth-links text-center">
	    
		    <br><a href="#" class="btn btn-info">Lost Password?</a>
		    <a href="register.html" class="btn btn-info text-center">Register a new account</a>
	      
	    </div>
	    <!-- /.social-auth-links -->
	
	    
	  </div>
	  <!-- /.login-box-body -->
	</div>
	<!-- /.login-box -->
</template>

<script>
	export default {
		name:"AdminLogin",
		data(){
			return{
				userid:"",
				password:""
			};
		}
	}
</script>

<style>
</style>
