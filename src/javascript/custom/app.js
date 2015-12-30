'use strict';

// var collabsApp = angular.module('collabsApp', [
//     'collabsControllers'
// ]);
angular.module("collabsApp", ["dndLists", "ngStorage"]);

angular.module("collabsApp").controller("CollabsController", function($scope, $localStorage) {

    var listObjects = {"Backlog": [], "InProgress": [], "Done" : []};

    

    $scope.$storage = $localStorage.$default({
      "Backlog": [], "InProgress": [], "Done" : []
    });

    /* prepopulate list items */

    $scope.models = {
        selected: null,
        lists: $scope.$storage,
        trashItems: {"items": []}
    };

    // Generate initial model
    // for (var i = 1; i <= 3; ++i) {
    //     $scope.$storage.Backlog.push({label: "Item A" + i});
    //     $scope.$storage.InProgress.push({label: "Item B" + i});
    //     $scope.$storage.Done.push({label: "Item C" + i});
    // }



    $scope.addItem = function(columnName){
        // Adds a new story to either Backlog, InProgress, and Done Column
        $scope.$storage[columnName].push({label: "Story #1"});
    }

    $scope.moveToTrash = function(columnName, label){
        //Pressing 'x' on a story moves the item to the bottom Trash
        $scope.models.trashItems.items.push({label: label, column: columnName});
         // alert(columnName + label);
    }

    $scope.toggleTrashBox = function(){
        if( $("#trash-box").hasClass("collapsed") ){
            alert("collapsed");
        }
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


