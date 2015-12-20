var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;

    $scope.doRefresh = function() {
        if ( !$scope.yelp.isLoading ) {
            $scope.yelp.refresh().then(function() {
                // Stop the gif animation. It's a directive in module Ionic
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
    }

    $scope.loadMore = function() {
        // And check if has more data
        if ( !$scope.yelp.isLoading && $scope.yelp.hasMore ) {
            $scope.yelp.next().then(function() {
                // Stop the gif animation. It's a directive in module Ionic
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };
    }
});
