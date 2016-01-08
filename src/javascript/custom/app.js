'use strict';

angular.module("collabsApp", ["dndLists", "ngStorage"]);

angular.module("collabsApp").controller("CollabsController", ['$scope', '$localStorage', function($scope, $localStorage) {

    var listObjects = {"Backlog": [], "InProgress": [], "Done" : []};

    $scope.$storage = $localStorage.$default({
      lists: {"Backlog": [], "Done" : [], "InProgress": []},
      trashItems: {"items": []},
      counter: 0,
      firstTime: true
    });


    $scope.models = {
        selected: null,
        lists: $scope.$storage.lists,
        trashItems: $scope.$storage.trashItems
    };
    
    $scope.color = 'white';

    // Adds a new story to either Backlog, InProgress, and Done Column
    $scope.addItem = function(columnName){
        $scope.$storage.lists[columnName].push({label: 'Story #' + ++$scope.$storage.counter, color: 'white'})
    }

    //Pressing 'archive' on a story moves the item to the bottom Trash
    $scope.moveToTrash = function(columnName, item, index){
        item.column = columnName;
        console.log(item);
        $scope.$storage.trashItems.items.push(item);

        //remove item from the draggable list
        $scope.$storage.lists[columnName].splice(index, 1);
    }

    $scope.permanentlyDelete = function(index){
        delete $scope.$storage.trashItems["items"].splice($scope.$storage.trashItems["items"].indexOf(index));
    }

    $scope.putBack = function(index, item){
        var columnName = item.column;
        delete item.column;
        $scope.$storage.lists[columnName].push(item);
        delete $scope.$storage.trashItems["items"].splice($scope.$storage.trashItems["items"].indexOf(index));
    }

    $scope.changeColor = function(idx, columnName){
        alert(idx + columnName);
    }

    $scope.clearBoard = function(columnName){
        $scope.$storage.lists[columnName] = [];
    }

    $scope.toggleBox = function(){
        this.colorPickerEnabled = false;
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    function retrieveObjects(){
         var retrievedObjects = localStorage.getItem('listObjects');
         return JSON.parse(retrievedObjects);
    }

    //intro walkthrough stuff
    angular.element(document).ready(function () {
        if ($scope.$storage.firstTime == true) {
            introJs().start().oncomplete(function() {
              $scope.$storage.firstTime = false;
            });
        };
    });

}]);


