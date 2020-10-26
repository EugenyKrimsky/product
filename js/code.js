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
  
  	sendFile = function (file) {
  		var formData = new FormData();
  	  var request = new XMLHttpRequest();
 	
  	  formData.set('file', file);
  	  request.open("POST", 'https://jsonplaceholder.typicode.com/photos');
  	  request.send(formData);
  	};
})