$(document).ready(function() {
	$('.accordeon').click(function(event) {	
		$(this).toggleClass('active').next('ul').slideToggle(300);
		if($('.banner__nav-ul-items').hasClass('one')) {
			$('.accordeon').not($(this)).removeClass('active');
			$('.acitem').not($(this).next()).slideUp(300);
		}
		if ($('.all').hasClass('active')) {
			$('.all').removeClass('active');
		} 	
	})
	$(document).mouseup(function (e){ 
		var div = $(".accordeon"); // 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.removeClass('active');
			div.next().slideUp(300); 
		}
	});
	$('.all').click(function() {
		$('.all').toggleClass('active');
		if ($('.accordeon').hasClass('active')) {
			$('.accordeon').removeClass('active');
			$('.acitem').not($(this).next()).slideUp(300);
		}
	})
	var fileCatcher = document.getElementById('file-catcher');
  	var fileInput = document.getElementById('file-input');
  	var fileListDisplay = document.getElementById('file-list-display');
  
  	var fileList = [];
  	var renderFileList, sendFile;
  
  	fileCatcher.addEventListener('submit', function (evnt) {
  		evnt.preventDefault();
  	  fileList.forEach(function (file) {
  	  	sendFile(file);
  	  });
  	});
  
  	fileInput.addEventListener('change', function (evnt) {
 			fileList = [];
  		for (var i = 0; i < fileInput.files.length; i++) {
  	  	fileList.push(fileInput.files[i]);
  	  }
  	  renderFileList();
  	});
  
  	renderFileList = function () {
  		fileListDisplay.innerHTML = '';
  	  fileList.forEach(function (file, index) {
  	  	var fileDisplayEl = document.createElement('p');
  	    fileDisplayEl.innerHTML = file.name;
  	    fileListDisplay.appendChild(fileDisplayEl);
  	  });
  	};
  $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
         
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    const menuBtn = $('.btn-search'),
    menu = $('.input-search');

    menuBtn.on('click', function() {
        if ( $(this).hasClass('is-active') ) {
            $(this).removeClass('is-active');
            menu.slideUp();
        } else {
            $(this).addClass('is-active');
            menu.slideDown();
        }
    });
    
    $(document).click(function (e) {
        if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.slideUp();
            menuBtn.removeClass('is-active');
        };

    });
    function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярного выражения
    // ищем упоминание названия браузера
    if (ua.search(/Chrome/) > 0) return 'Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'IE';
    return false;
    }
    if (get_name_browser() == "Firefox") {
        $('.review textarea').css('padding', '17px 158px 57px 170px');
        $('.review input.short-input').css('padding', '17px 172px 17px 183px');
        $('.review input.short-input').css('width', '100%');
    }
    if (get_name_browser() == "Safari") {
        $('.btn-basket').css('font-size', '13px');
    } 
})