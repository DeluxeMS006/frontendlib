<template>
	<div class="login-box">
	  <div class="login-logo">
	    <a href="#"><b>Deluxe MS</b> Admin</a>
	  </div>
	  <!-- /.login-logo -->
	  <div class="login-box-body">
	    <p class="login-box-msg">Sign in to start your session</p>
	
	    <form method="post" v-on:submit.prevent="userlogin()">
	      <div class="form-group has-feedback">
	        <input type="text" class="form-control" required v-model="userid" placeholder="Email">
	        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
	      </div>
	      <div class="form-group has-feedback">
	        <input type="password" v-model="password" required class="form-control" placeholder="Password">
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
			return {
				userid:"",
				password:""				
			};
		},
		created(){
			this.$store.dispatch("logout");
			//调用后台REST API logout，清除Session中的存储登录信息。
		},
		methods:{
			userlogin(){  //管理员登录处理
				//验证账号和密码是否合法
				this.axiosJSON.get("/user/validate/"+this.userid+"/"+this.password).then(result=>{
					if(result.data.stringResult=="Y"){
						//存储登录用户的对象 到Vuex的store中
						this.$store.dispatch("loginUser",result.data.result);
						this.$router.push("/");
						//window.localStorage.setItem("","");
						
					}
					else{
						this.userid="";
						this.password="";
						alert(result.data.message);
					}
					
				});
				
			}
		}
	}
</script>

<style>
</style>
