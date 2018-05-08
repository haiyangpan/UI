///////////////
// 我要学card轮播 //
///////////////
$(function(){
	var index = 0;
	$('.swBtn').on("click",function(){
		allHidden();
		if($(this).index() == 0){
			index--;
			if(index < -2){
				index = 0;
			}
			activeFun(Math.abs(index));
		}
		if($(this).index() == 4){
			if(index >= 2){
				index = -1;
			}
			index++;
			activeFun(Math.abs(index));
		}
	})
	$('.bar').hover(function(){
		allHidden();
		activeFun($(this).index());
	})
	
	function allHidden(){
		for (var i = 0; i < $('.showImg').length; i++) {
			$('.showImg').eq(i).css("display","none");
			$('.bar').eq(i).removeClass("active");
		}
	}
	function activeFun(index){
		$('.showImg')[index].style.display="block";
		$('.bar').eq(index).addClass("active");
	}
})

// 讲师资料
$(".teaBar>ul>li").hover(function(){
	for (var i = 0; i < $(".teaBar>ul>li").length; i++) {
		i==0?($(".teaBar>ul>li")[i].className = ""):($(".teaBar>ul>li")[i].className = "noleft");
	}
	for (var i = 0; i < 6; i++) {
			$('.teaInfo>ul>li')[i].style.display = "none";
		}
	var ind = $(this).index();
	if(ind == 1){
		$(".teaBar>ul>li")[ind].className = "noleft active";
		for (var i = 3; i < 6; i++) {
			$('.teaInfo>ul>li')[i].style.display = "block";
		}
	}else{
		$(".teaBar>ul>li")[ind].className = "active";
		
		for (var i = 0; i < 3; i++) {
			$('.teaInfo>ul>li')[i].style.display = "block";
		}
	}
})

// 学员作品
$('.class-type>ul>li').hover(function(){
	var index = $(this).index();
	$(this).attr("class","active1")
			.siblings().attr("class","");
	zuopinShow( index );
})
function zuopinShow(index){
	for (var i = 0; i < $('.pic-wrap>ul>li').length; i++) {
		$('.pic-wrap>ul>li').eq(i).attr("class","hid")
	}
	for (var i = index * 9; i < 9*(index+1); i++) {
		$('.pic-wrap>ul>li').eq(i).attr("class","");
	}
}