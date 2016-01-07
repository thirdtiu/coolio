'use strict';

// var collabsApp = angular.module('collabsApp', [
//     'collabsControllers'
// ]);
angular.module("collabsApp", ["dndLists", "ngStorage"]);

angular.module("collabsApp").controller("CollabsController", function($scope, $localStorage) {

    var listObjects = {"Backlog": [], "InProgress": [], "Done" : []};

    

    $scope.$storage = $localStorage.$default({
      lists: {"Backlog": [], "Done" : [], "InProgress": []},
      trashItems: {"items": []},
      counter: 0,
      firstTime: true
    });

    /* prepopulate list items */

    $scope.models = {
        selected: null,
        lists: $scope.$storage.lists,
        trashItems: $scope.$storage.trashItems
    };
    $scope.color = 'white';
    // Generate initial model
    // for (var i = 1; i <= 3; ++i) {
    //     $scope.$storage.Backlog.push({label: "Item A" + i});
    //     $scope.$storage.InProgress.push({label: "Item B" + i});
    //     $scope.$storage.Done.push({label: "Item C" + i});
    // }



    $scope.addItem = function(columnName){
        // Adds a new story to either Backlog, InProgress, and Done Column
        $scope.$storage.lists[columnName].push({label: 'Story #' + ++$scope.$storage.counter, color: 'white'})

    }

    $scope.moveToTrash = function(columnName, item, index){
        //Pressing 'x' on a story moves the item to the bottom Trash
        // $scope.models.trashItems.items.push({label: label, column: columnName});
        
        item.column = columnName;
        console.log(item);
        $scope.$storage.trashItems.items.push(item);

        //remove item from the draggable list
        // delete $scope.$storage.lists[columnName].splice($scope.$storage.lists[columnName].indexOf(index));
        $scope.$storage.lists[columnName].splice(index, 1);
    }

    $scope.permanentlyDelete = function(index){
        delete $scope.$storage.trashItems["items"].splice($scope.$storage.trashItems["items"].indexOf(index));
    }

    $scope.putBack = function(index, item){
        // alert(index+label+columnName);
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

    


    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    function retrieveObjects(){
         var retrievedObjects = localStorage.getItem('listObjects');

         return JSON.parse(retrievedObjects);
    }



});


