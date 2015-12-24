'use strict';

// var collabsApp = angular.module('collabsApp', [
//     'collabsControllers'
// ]);
angular.module("demo", ["dndLists"]);

angular.module("demo").controller("SimpleDemoController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"Backlog": [], "InProgress": [], "Done" : []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.Backlog.push({label: "Item A" + i});
        $scope.models.lists.InProgress.push({label: "Item B" + i});
        $scope.models.lists.Done.push({label: "Item C" + i});
    }

    $scope.addItem = function(columnName){
        $scope.models.lists[columnName].push({label: "Story #1"});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
