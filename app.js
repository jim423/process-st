var app = angular.module('myApp', ['blueimp.fileupload']);
app.controller('mainCtrl', function($scope, $http) {
	var video_id;
	$scope.count = 0;

	$scope.submit = function() {
		$('input').trigger('click');
	};

	$('#fileupload').fileupload({
		url: 'https://upload.wistia.com?access_token='+
		'88003df5a4da31fd367ae41feba9445d4df24ccee41200abb536284a7957b135&project_id=5sj05sct73',
		done: function(e, data) {
			video_id = data.result.hashed_id;
			$scope.count += 1;
			$('#progress .bar').css(
	            'width',
	            0 + '%'
	        );
	        $('#progress .bar').html('');
			var script = "<script id='" + video_id + "' src='https://fast.wistia.com/embed/medias/" + video_id
			+ ".jsonp' async><\/script>";
			$('span.video_' + $scope.count).addClass('wistia_async_' + video_id);
			$('body').append(script);
			
			$scope.$apply(function(){
	            $scope.count = $scope.count;
	        });
		},
		progress: function (e, data) {
	        var progress = parseInt(data.loaded / data.total * 100, 10);
	        $('#progress .bar').css(
	            'width',
	            progress + '%'
	        );
	        $('#progress .bar').html(progress + '%');
	    },
	    error: function (e, data) {
	    	$('#progress .bar').css(
	            'width',
	            0 + '%'
	        );
	        $('#progress .bar').html('');
	        alert(JSON.parse(e.responseText).error);
	    }
	});	

	
});