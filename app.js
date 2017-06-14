var app = angular.module('myApp', ['blueimp.fileupload']);
app.controller('mainCtrl', function($scope, $http) {
	$scope.showVideo = false;

	$scope.submit = function() {
        $scope.showVideo = false;

		$('input').trigger('click');
	};

	$('#fileupload').fileupload({
		url: 'https://upload.wistia.com?access_token='+
		'88003df5a4da31fd367ae41feba9445d4df24ccee41200abb536284a7957b135&project_id=5sj05sct73',
		done: function(e, data) {
			$('#progress .bar').css(
	            'width',
	            0 + '%'
	        );
	        $('#progress .bar').html('');
			var video_id = data.result.hashed_id;
			var script = "<script src='https://fast.wistia.com/embed/medias/" + video_id
			+ ".jsonp' async><\/script>";
			$('body').append(script);
			$('span.wistia_embed').addClass('wistia_async_' + video_id);
			$scope.$apply(function(){
	            $scope.showVideo = true;
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