<template>
  <div id="app" class="wrapper">
	  <header class="main-header">
	    <!-- Logo -->
	    <a href="../../index2.html" class="logo">
	  	<!-- mini logo for sidebar mini 50x50 pixels -->
	  	<span class="logo-mini"><b>D</b>MS</span>
	  	<!-- logo for regular state and mobile devices -->
	  	<span class="logo-lg"><b>Deluxe MS</b></span>
	    </a>
	    <!-- Header Navbar: style can be found in header.less -->
	    <nav class="navbar navbar-static-top">
	  	<!-- Sidebar toggle button-->
	  	<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
	  	  <span class="sr-only">Toggle navigation</span>
	  	  <span class="icon-bar"></span>
	  	  <span class="icon-bar"></span>
	  	  <span class="icon-bar"></span>
	  	</a>
	    </nav>
	  </header>
   
    
    <!-- =============================================== -->
    
    <!-- Left side column. contains the sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="./assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Admin</p>
            <router-link to="/admin"><i class="fa fa-circle text-success"></i> Sign in</router-link>
          </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search...">
            <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">系统功能选择</li>
          <li class="treeview">
            <router-link to="/roomtype">
              <i class="fa fa-dashboard"></i> <span>房型管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </router-link>
          </li>
		  <li class="treeview">
		    <router-link to="/room">
		      <i class="fa fa-dashboard"></i> <span>房间管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		  </li>
		  <li class="treeview">
		    <router-link to="/customer">
		      <i class="fa fa-dashboard"></i> <span>顾客管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		  </li>
		  <li class="treeview">
		    <router-link to="/transaction">
		      <i class="fa fa-dashboard"></i> <span>事务管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		  </li>
		  <li class="treeview">
		    <router-link to="/employee">
		      <i class="fa fa-dashboard"></i> <span>员工管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		  </li>
          
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
    
    <!-- =============================================== -->
    
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          欢迎管理员
          <small>子功能</small>
        </h1>
        <ol class="breadcrumb">
          <li><router-link to="/home"><i class="fa fa-dashboard"></i> Home</router-link></li>
          <li><a href="#"></a></li>
          <li class="active"></li>
        </ol>
      </section>
    
      <!-- Main content -->
      <section class="content">
    
        <!-- Default box -->
        <div class="box">
          <div class="box-body">
            <router-view></router-view>
          </div>

        </div>
        <!-- /.box -->
    
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    
	<footer class="main-footer">
	  <div class="pull-right hidden-xs">
		<b>Version</b> 1.0
	  </div>
	  <strong>Copyright &copy; 2020-2021 <a href="#">Neusoft OA</a>.</strong>版权所有
	</footer>
    
    <!-- Control Sidebar -->
   
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<style>
@import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
@import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
@import url("assets/bower_components/Ionicons/css/ionicons.min.css");
@import url("assets/dist/css/AdminLTE.min.css");
@import url("assets/dist/css/skins/_all-skins.min.css");
</style>
