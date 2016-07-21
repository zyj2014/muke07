$(function () {
	//5个菜单之间的切换
	$("#uLikeCC li").click(function(){
		$(this).addClass('hover-now').siblings().removeClass('hover-now');
		$('#divLike>div').hide();
		$('#divLike>div.'+$(this).data('href')).show();
	});

	// 视频高度自适应代码、
	$(".teachVedio").css("height",$(".teachVedio").width()*0.72);

	// 课程资源页面切换
	$("#zy-name li").click(function(){
		$(this).addClass('nowe').siblings().removeClass('nowe');
		var index = $(this).index();
		number = index;
		$('#zy-rigbt>div').hide();
		$('#zy-rigbt>div:eq('+index+')').show();
	});

	// 课程讨论页面切换
	$("#tl-ulbox li").click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index = $(this).index();
		number = index;
		$('#z-botBox>div').hide();
		$('#z-botBox>div:eq('+index+')').show();
	});

	// 点击评论
	$(".yhhand .plCount").click(function(){
		$(this).parent(".yhhand").siblings(".plq-box").slideToggle("slow");
	});
	// 点击回复评论
	$(".srupyu .hfu").click(function(){
		$(this).parents(".srupyu").siblings(".zHuifu").slideToggle("slow");
	});
})