
/*登陆模块*/

var  login={
	init:function(){
		
		var vm=new Vue({
			el:".app",
			data:{
				user:"",
				pwd:"",
				ck:false
			},
			methods:{
				
				login:function(event){
					var o=event.target;
					
					if(this.user.length>0&&this.pwd.length>0){
						o.innerHTML="正在登录中...";
						$(o).parents("form").find("input").attr("disabled","disabled"); // 阻住重复提交
						window.location.href="index.html";
				
					}
				}
			}
			
		});		
		
		
	}
	
}

export{
	
	login
}
