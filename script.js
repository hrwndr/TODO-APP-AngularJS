const app = angular.module('todo', []);
app.controller('mainctrl', function($scope) {
  $scope.tasks = [];

  var taskData = localStorage['tasklist'];
  if (taskData !== undefined) {
    $scope.tasks = JSON.parse(taskData);
  };

  $scope.searchEnter = function() {
    if(event.which == 13 && $scope.task != "") {
      $scope.addtask();
    }
  };
  $scope.addtask = function() {
    $scope.tasks.push({'taskMsg':$scope.task, 'status':'false'});
    $scope.task = '';
    localStorage['tasklist'] = JSON.stringify($scope.tasks);
  };
  $scope.editIt = function(msg) {
    event.target.contentEditable = event.target.contentEditable == "false" ? "true" :"false";
    for(i=0;i<$scope.tasks.length;i++) {
      if($scope.tasks[i].taskMsg == msg) {
        $scope.tasks[i].taskMsg = event.target.innerText;
      }
    }
    localStorage['tasklist'] = JSON.stringify($scope.tasks);
  };
  $scope.entertoEdit = function(msg) {
    if(event.which == 13 && msg != "") {
      $scope.editIt(msg);
    }
  }
});
