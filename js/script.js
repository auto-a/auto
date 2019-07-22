$(function(){
	//==========隐藏层居中=================
	var windonWidth = $(window).width();
	var windonHeight = $(window).height();
	var boxWidth = $(".box").width();
	var boxHeight = $(".box").height();
	var top = (windonHeight-boxHeight)/2;
	var left = (windonWidth-boxWidth)/2;
	$(".box").css({"top":top,"left":left});
	
	//点击出现隐藏层和遮罩层
	$(".xfc").click(function(){
		$(".zz_box").show();
		$(".box").show();
	});
	//点击x关闭隐藏层和遮罩层
	$(".close").click(function(){
		$(".zz_box").hide();
		$(".box").hide();
	});
	
	
	
	var infotxtId = new Array();
	var infoObject = new Object();
		infoObject[0] = new Object();///二维对象
		infoObject[1] = new Object();
		infoObject[2] = new Object();
	//============左边选中===================
	var $cen = $(".cen");
	$cen.mouseenter(function(){
		if($(this).attr("isClick") != 1){
			$(this).attr("class","cen_yes");
		}
	}).mouseleave(function(){
		if($(this).attr("isClick") != 1){
			$(this).attr("class","cen");
		}
	}).click(function(){
		if($(this).attr("isClick") != 1){
			if(infotxtId.length < 3){
				var isId = $(this).attr("isId");//获取“isId”属性值
				infotxtId.push(isId);//将获取的“isId”添加到数组
				$("#hidea").val(infotxtId);//将数组里的“isId”属性值放到隐藏域
				var isText = $(this).children().text();//文本值
				$(this).attr({"class":"cen_huise","isClick":1});
				cuninfoText(isId,isText);
				quinfoText();
			}else{
				alert("不能超过3个！！")
			}
		}else{
			alert("你已经点过了");
		}
	})
	//存放对象
	function cuninfoText (isId,isText){
		$.each(infoObject,function(i){
			if(infoObject[i]["isId"] == undefined || infoObject[i]["isId"] == ""){
				infoObject[i]["isId"] = isId;
				infoObject[i]["isText"] = isText;
				return false;
			}
		})
	}
	
	//取出对象
	function quinfoText (){
		$.each(infoObject,function(i){
			$("#textRight_"+i).html(infoObject[i]["isText"]);
		})
	}
	
	//删除
	$("[name=cename]").each(function(i){
		$(this).click(function(){
			//过滤
			infotxtId = $.grep(infotxtId,function(a,b){
				return a != infoObject[i]["isId"];
			})
			$("#hidea").val(infotxtId);
			$("#fee_"+infoObject[i]["isId"]).attr({"class":"cen","isClick":0})
			infoObject[i]["isId"] = "";
			infoObject[i]["isText"] = "";
			quinfoText();
		})
	})
	
});