$(document).ready(function(){
	/*header 계정 클릭후 서브메뉴 토글*/
	$(".header-top").click(function(){
		$(".account_menu").slideToggle();
	});

	/*header 계정 클릭에 따른 좌측 아이콘 변경*/
	$(".header_top").click(function(){
		var showMenu = $(".account_menu").css("display", "block");
		var hideMenu = $(".account_menu").css("display", "none");
		if(showMenu){
			console.log("hello");
			//$(this).children("img:fisrt-child").attr("src","./img/icons/icon_heart.png");
		}else if(hideMenu){
			//$(this).children("img:fisrt-child").attr("src","./img/icons/icon_profile.png");
			console.log("Bye");
		}
	})
	
	/*header 내비게이션*/
	$(".dropdown_btn").click( function() {
		var submenu = $(this).next(".dropdown_container");
		$(this).toggleClass('nav_on');
		submenu.slideToggle();
		$(".dropdown_btn").not(this).removeClass('nav_on');
		$(".dropdown_container").not(submenu).slideUp();
		$("ul.nav li").removeClass("nav_on2");
	});

	/*데이터피커*/
	$(".datepicker").datepicker();
	$(".datepicker").datepicker( "option", "dateFormat", 'yy-mm-dd' );

	/*전체선택*/
	$("#all").click(function(){
		if($("#all").prop("checked")){
		$("input[name=all_chk]").prop("checked",true);
		}else{
			$("input[name=all_chk]").prop("checked",false);
		}
	});

	var length01 = $("input[name=all_chk]").length;
	$("input[name=all_chk]").click(function(){
		var length02 = $("input[name=all_chk]:checked").length;

		if(length02 == length01){
			$("#all").prop("checked",true);
		}else {
			$("#all").prop("checked",false);
		}
	});

//	선택된 인풋삭제
	$(".input_remove").click(function(){
		$("input[name=all_chk]:checked").parents("tr").remove();
	});

//	팝업
	$(".pop_bg, .pop_close").click(function(){
		$(this).parents(".pop_wrap").removeClass("on");
	});

	$(document).on('click',".pop_close",function(){
		$(this).parents(".pop_wrap").removeClass("on");
	});
	$(".description_open").click(function(){
		$(".description").addClass("on");
	});
	/*$(".member_open").click(function(){
		$(".member_info").addClass("on");
	});*/
	$(".admin_open").click(function(){
		$(".admin_info").addClass("on");
	});

	//mainIdea 마우스 올리면 check, plus 보이기
	$(document).on('mouseenter',".mainIdea",function(){
		$(this).children('div').addClass('active');
	});

	//mainIdea 마우스 떼면 check, plus 삭제
	$(document).on('mouseleave',".mainIdea",function(){
		$(this).children('div').removeClass('active');
	});

	//subidea div 마우스 올리면 check, plus, delete 보이기
	$(document).on('mouseenter',".subIdea div",function(){
		$(this).children('section').addClass('active');
	});

	//subidea div 마우스 떼면 check, plus, delete 삭제
	$(document).on('mouseleave',".subIdea div",function(){
		$(this).children('section').removeClass('active');
	});

	//중분류 추가
	$(document).on('click',".tagP",function(){
		$(this).parent().parent().next().addClass('on');
	});

	//중분류 추가된것 삭제
	$(document).on('click',".middleDel",function(){
		$(this).parent().parent().removeClass('on');
	});

	//중분류 플러스버튼 클릭
	$(document).on('click',".subTagP",function(){
		$(this).parent().parent().next().addClass('on');
	});

	$(document).on('click',".miniDel",function(){
		$(this).parent().parent().removeClass('on');
	});

	//중분류 추가
	$(document).on('click',".middleBtn",function(){

		$(this).parent().parent().removeClass('on');
	});

	//소분류 추가
	$(document).on('click',".miniBtn",function(){

		$(this).parent().parent().removeClass('on');
	});

	//소분류 check, del 추가
	$(document).on('mouseenter',".miniIdea",function(){
		$(this).children('section').addClass('active');
	});

	$(document).on('mouseleave',".miniIdea",function(){
		$(this).children('section').removeClass('active');
	});

	$('.checkBox input[type=checkbox').on('click',function(){
		if($(this).is(":checked") == true){
			$(this).parent().parent().css('background','rgba(35,147,253,0.1)')
			console.log('aas')
		}else{
			$(this).parent().parent().css('background','none')
		}
	})

	//error type 추가
	$('.errorBtn').on('click',function(){
		var errorVal = $(this).prev().children().val();

		var errorForm;
		errorForm = "<div class='delete_box cf'>";
		errorForm += "<img src='./img/icons/arrow.png' alt='아이콘_화살표' class='floatL icon_arrow pointer'>";
		errorForm += "<form class='floatL'><input type='text' value='"+ errorVal +"' disabled></form>";
		errorForm +="<button class='floatR btn12 errorDel blue_btn2'>Del</button>"
		errorForm += "<button class='floatR blue_btn btn12 tagUpBtn' style='margin-right: 5px;'>Up</button></div>"

		$('.error_cont').append(errorForm);
	});

	//error type 삭제
	$(document).on('click',".errorDel",function(){
		$(this).parent().remove();
	});

	//error type drag
	$(".errorDrag").sortable();


	/*tagging 역삼각형 아이콘 선택시, 하위요소 숨김*/
	$(".triangle_down").on('click', function(){
		$(this).siblings("div.tag_sub").slideToggle();
	});
	
	/*tagging 상위요소 선택시, 하위요소 전체선택*/
	$(".tag_main>input[type='checkbox']").click(function(){
		if($(this).is(":checked")){
			$(this).siblings('div').find('input[type="checkbox"]').prop("checked", true);

		}else{
			$(this).siblings('div').find('input[type="checkbox"]').prop("checked", false);
		}
	});
	
	/*tagging 전체선택 상황에서 하위요소 선택시, 상위요소 자동해제*/
	var length03 = $(".tag_sub input[type='checkbox']").length;

	$(".tag_sub input[type='checkbox']").click(function(){
		var length04 = $(".tag_sub input[type='checkbox']:checked").length;

		if(length04 == length03){
			//$(".tag_main>input[type='checkbox']").prop("checked",true);
			//$(this).parent("div.tag_sub").closet(".tag_main>input[type='checkbox']").prop("checked",true);
			console.log($(this).parent().parent("li"));
		}else{
			//$(".tag_main>input[type='checkbox']").prop("checked",false);
			//$(this).parent("div.tag_sub").closet(".tag_main>input[type='checkbox']").prop("checked",false);
			console.log($(this).parent().parent("li"));
		}
	})

	/* add Passage 이미지 첨부 및 미리보기 */
	// 등록 이미지 등록 미리보기
	function readInputFile(input) {
		if(input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$(input).parent("div").next("div").children('.preview').html("<img src="+ e.target.result +">");
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	 
	$(".inp-img").on('change', function(){
		readInputFile(this);
	});
	 
	 
	// 등록 이미지 삭제 ( input file reset )
	function resetInputFile($input, $preview) {
		var agent = navigator.userAgent.toLowerCase();
		if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
			// ie 일때
			$input.replaceWith($input.clone(true));
			$preview.empty();
		} else {
			//other
			$input.val("");
			$preview.empty();
		}       
	}
	 
	$(".btn_imgDelete").click(function(event) {
		/*var $input = $(".inp-img");
		var $preview = $('#preview');
		resetInputFile($input, $preview);*/
		$(this).parent("div").next("div").children(".preview").children("img").attr("src","")
	});
	
	
	/*전체선택*/
	$("#all1").click(function(){
		console.log($("#all1").prop("checked"))
		if($("#all1").prop("checked") == true){
		 $(this).parents("li").children(".tag_sub").find("input[name=all_chk]").prop("checked",true);
		}else{
			$(this).parents("li").children(".tag_sub").find("input[name=all_chk]").prop("checked",false);
		}
	});

	var length03 = $(".tag_sub1 input[name=all_chk]").length;
	$(".tag_sub1 input[type='checkbox']").click(function(){
		var length04 = $(".tag_sub1 input[name=all_chk]:checked").length;

		if(length04 == length03){
			$(this).parents("li").children(".chk_all").prop("checked",true);
		}else {
			$(this).parents("li").children(".chk_all").prop("checked",false);
		}

	});
	

	/* product + promotion + master account : input+label 링크이동 방지*/
	//$(".stopLink, table input[type='checkbox']").on("click", function(e){e.stopPropagation();});
	$(".productLink td:first-child").on("click", function(e){e.stopPropagation();});

	/* passageList 상세페이지 이동 */
	$(".passageLink").click(function(e){
			window.location.href='./sat_addPassage.html';
	});
	/* prodcut 상세페이지 이동 */
	$(".productLink").click(function(e){
			window.location.href='./product_manage_edit.html';
	});
	/* promotion 상세페이지 이동 */
	$(".promotionLink").click(function(e){
			window.location.href='./promotion_manage_edit.html';
	});
	/* masterAccount 상세페이지 이동 */
	$(".masterLink").click(function(e){
			window.location.href='./masterAccount_edit.html';
	});

	

});