import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import GetCityList from './mock services/GetCityList';
import GetProjectStatusList from './mock services/GetProjectStatusList';
function Container(){
  
    return (
    

     <div class="page-container">
	
	<div class="page-head">
		<div class="container">
			
			<div class="page-title">
				<h1> Proje </h1>
			</div>
			
			<div class="page-toolbar">
				
				<div class="btn-group btn-theme-panel">
					<a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown">
					<i class="icon-settings"></i>
					</a>
					<div class="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-12">
								<h3>THEME COLORS</h3>
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-12">
										<ul class="theme-colors">
											<li class="theme-color theme-color-default" data-theme="default">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Default</span>
											</li>
											<li class="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Blue Hoki</span>
											</li>
											<li class="theme-color theme-color-blue-steel" data-theme="blue-steel">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Blue Steel</span>
											</li>
											<li class="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Orange</span>
											</li>
											<li class="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Yellow Crusta</span>
											</li>
										</ul>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-12">
										<ul class="theme-colors">
											<li class="theme-color theme-color-green-haze" data-theme="green-haze">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Green Haze</span>
											</li>
											<li class="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Red Sunglo</span>
											</li>
											<li class="theme-color theme-color-red-intense" data-theme="red-intense">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Red Intense</span>
											</li>
											<li class="theme-color theme-color-purple-plum" data-theme="purple-plum">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Purple Plum</span>
											</li>
											<li class="theme-color theme-color-purple-studio" data-theme="purple-studio">
												<span class="theme-color-view"></span>
												<span class="theme-color-name">Purple Studio</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12 seperator">
								<h3>LAYOUT</h3>
								<ul class="theme-settings">
									<li>
										 Theme Style
										<select class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" data-original-title="Change theme style" data-container="body" data-placement="left">
											<option value="boxed" selected="selected">Square corners</option>
											<option value="rounded">Rounded corners</option>
										</select>
									</li>
									<li>
										 Layout
										<select class="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
											<option value="boxed" selected="selected">Boxed</option>
											<option value="fluid">Fluid</option>
										</select>
									</li>
									<li>
										 Top Menu Style
										<select class="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body" data-placement="left">
											<option value="dark" selected="selected">Dark</option>
											<option value="light">Light</option>
										</select>
									</li>
									<li>
										 Top Menu Mode
										<select class="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
											<option value="fixed">Fixed</option>
											<option value="not-fixed" selected="selected">Not Fixed</option>
										</select>
									</li>
									<li>
										 Mega Menu Style
										<select class="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body" data-placement="left">
											<option value="dark" selected="selected">Dark</option>
											<option value="light">Light</option>
										</select>
									</li>
									<li>
										 Mega Menu Mode
										<select class="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body" data-placement="left">
											<option value="fixed" selected="selected">Fixed</option>
											<option value="not-fixed">Not Fixed</option>
										</select>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>

	<div class="page-content">
		<div class="container">
			
			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">Modal title</h4>
						</div>
						<div class="modal-body">
							 Widget settings form goes here
						</div>
						<div class="modal-footer">
							<button type="button" class="btn blue">Save changes</button>
							<button type="button" class="btn default" data-dismiss="modal">Close</button>
						</div>
					</div>
					
				</div>
				
			</div>
			
			<ul class="page-breadcrumb breadcrumb">
				<li>
					<a href="#">Proje Yönetimi</a><i class="fa fa-circle"></i>
				</li>
				<li>
					<a href="form_Proje.html">Proje</a>
					<i class="fa fa-circle"></i>
				</li>
				<li class="active">
					 Yeni Giriş
				</li>
			</ul>
			
			<div class="row">
				<div class="col-md-6 ">
					
					<div class="portlet light">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-cogs font-green-sharp"></i>
								<span class="caption-subject font-green-sharp bold uppercase">PROJE BİLGİLERİ</span>
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
								<a href="#portlet-config" data-toggle="modal" class="config">
								</a>
								<a href="javascript:;" class="reload">
								</a>
								<a href="javascript:;" class="remove">
								</a>
							</div>
						</div>
						<div class="portlet-body form">
							<form role="form">
								<div class="form-body">									
									<div class="form-group">
										<label>Proje Adı*</label>
										< input type="text" class="form-control" placeholder="Projenin Adı" name = "txtName" id = "txtName" required/>
									</div>									
									<div class="form-group">
										<label>Şehir</label>
										<GetCityList/>

									</div>
									<div class="form-group">
										<label>Proje Durumu</label>
										<GetProjectStatusList/>
									</div>
									
								</div>
								<div class="form-actions right">
									<button type="button" class="btn default" name = "btnCancel" id = "btnCancel">Vazgeç</button>
									<button type="submit" class="btn green" name = "btnSubmit" id = "btnSubmit">Kaydet</button>
								</div>
							</form>
						</div>
					</div>
					
				</div>
				<div class="col-md-6 ">
					
					<div class="portlet light">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-cogs font-green-sharp"></i>
								<span class="caption-subject font-green-sharp bold uppercase">KAYIT GEÇMİŞİ</span>
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
								<a href="#portlet-config" data-toggle="modal" class="config">
								</a>
								<a href="javascript:;" class="reload">
								</a>
								<a href="javascript:;" class="remove">
								</a>
							</div>
						</div>
						<div class="portlet-body form">
							<form role="form">
								<div class="form-body">									
									<div class="form-group">
										<label><strong>Oluşturan Kullanıcı</strong></label>
										<p class="form-control-static">
											 User XXX
										</p>
									</div>									
									<div class="form-group">
										<label><strong>Oluşturma Tarihi</strong></label>
										<p class="form-control-static">
											 DD/MM/YYYY
										</p>
									</div>
									<div class="form-group">
										<label><strong>Güncelleyen Kullanıcı</strong></label>
										<p class="form-control-static">
											User YYY
										</p>
									</div>
									<div class="form-group">
										<label><strong>Güncelleme Tarihi</strong></label>
										<p class="form-control-static">
											DD/MM/YYYY
										</p>
									</div>
								</div>								
							</form>
						</div>
					</div>
				
				</div>
				
				
			</div>
			
		</div>
	</div>
</div>
    ) 
}
export default Container;
