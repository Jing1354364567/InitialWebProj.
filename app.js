var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  
   $scope.inputUser = "JING";
    $scope.inputPsw="12345";
   $scope.close = "close"; 
   $scope.closeP = "close";
   $scope.ProjectSub = "Local Inc; Danny Do";
   $scope.authorComments ="";
   $scope.theComments = "";
   
    $scope.clear = function() {$scope.inputUser = "";$scope.inputPsw="";};
    $scope.save  = function() {alert("Password Saved");};
    $scope.left  = function() {return 300 - $scope.Message.length;};
    $scope.login = function() {alert("Login successfully!")};
  
  $scope.falseHome = true;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPMnager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
  $scope.falseEditSub = false;
  $scope.falseEditPInspector= false;
 
  $scope.startProject = function() {
      $scope.falseHome = false;
      $scope.falseLogin = true;
  };
  
  $scope.submitLogin = function() {
      $scope.errortext = "";
      if (!$scope.inputUser || !$scope.inputPsw) {$scope.feedback = "Both username and password are required."; return;}  

      for(var i=0;i<logins.length;i++){
        if($scope.inputUser==logins[i].LoginName && $scope.inputPsw==logins[i].Password){
          if(logins[i].UserType == "inspector"){
                //things the inspector should be able to see/do
                $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = true;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
                alert("inspector login");
          } 
          else if (logins[i].UserType == "manager"){
               //things the manager should be able to see/do
                $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = true;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
               alert("manager login");
          }
          else if (logins[i].UserType == "contractor"){
               //things the contractor should be able to see/do
              $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = true;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  
               
               alert("contractor login");
          }
        
       
        }
       else{
         $scope.feedback="Please fill the correct username and password.";
       }
        
      }
      
     
  };
  
  
  
  //Remember to add ng-click into every button//
   $scope.closeRoad = function() {
     if($scope.close == "close"){
     $scope.close = "open";
     }
     else{
       $scope.close = "close";
     }
  };
  
  
  
  
$scope.add = function(roads){
$scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = true;
  $scope.falseEditP = false;
  
};


$scope.addProjects = function(projects){
$scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = true;
  
};



  


$scope.SubmitProject = function(){
    var dataObjectProject = {
    ID: $scope.ProjectID,
    Road: $scope.ProjectRoad,
    Name: $scope.ProjectName,
    Status: $scope.ProjectStatus,
    StartDate: $scope.ProjectStartDate,
    EndDate:$scope.ProjectEndDate,
    Contractor: $scope.ProjectContractor,
  };
  
   var postProject = $http.post('https://track.sim.vuw.ac.nz/api/jinjing1/update.project.json', dataObjectProject);
  postProject.success(function(data, status, headers, config){
    $scope.message = data;
    
    alert("Add successfully");
     $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = true;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
      $http.get($scope.targetProject)
          .then(function successCall(response) { 
           
           $scope.ProjectData = response.data.Projects;
           
           
          }
        );  
  });
  
  postProject.error(function(data, status, headers, config){
    $scope.message = data;
   
    alert("Failed, please try again");
  }
    );
  

};

$scope.returnProject = function(){
  $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = true;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
};


  $scope.viewRoadManager = function(Roads) {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = true;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
         
    
   
  };
  
  
  $scope.viewRoadInspector = function(Roads) {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = true;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
         
    
   
  };
  
  $scope.returnRoadManager = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = true;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
   $scope.returnRoadInspector = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = true;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  
   $scope.showProjectLManager = function() {
       $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = true;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  $scope.showProjectLInspector = function() {
       $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = true;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  $scope.returnRoadPInspector = function() {
       $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = true;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  
  $scope.returnRoadPManager = function() {
       $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = true;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  
  $scope.viewProjectInspector = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = true;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
   $scope.viewProjectManager = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = true;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  
  $scope.returnProjectLManager = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = true;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
 
  };
  
   $scope.returnProjectLContractor = function() {
     $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = true;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  };
  
  $scope.returnProjectLInspector = function() {
      $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = true;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
 
  };
  
  $scope.logOut = function() {
      $scope.falseHome = true;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.inputPsw="";
  $scope.feedback="";
 
  };
  
 
$scope.deleteRoads = function(Roads) {
  var indexR = $scope.myData.indexOf(Roads);
  $scope.myData.splice(indexR,1);
};


  
    $scope.targetRoad = 'https://track.sim.vuw.ac.nz/api/jinjing1/road_dir.json';
    $scope.getR = function() {
      $http.get($scope.targetRoad)
          .then(function successCall(response) { 
           
           $scope.myData = response.data.Roads;
           alert("Data read successfully!");
           
          }, function errorCall() {
           alert("Fail in getting data. :<");
          }
        );  
    };

$scope.deleteProjects = function(Projects) {
  var indexP = $scope.ProjectData.indexOf(Projects);
  $scope.ProjectData.splice(indexP,1);
};



$scope.targetProject = 'https://track.sim.vuw.ac.nz/api/jinjing1/project_dir.json';

      $http.get($scope.targetProject)
          .then(function successCall(response) { 
           
           $scope.ProjectData = response.data.Projects;
           
           
          }
        );  


 $scope.closeProject = function() {
     if($scope.closeP == "close"){
     $scope.closeP = "open";
     }
     else{
       $scope.closeP = "close";
     }
  };
  
$scope.submitMessage=function(){
  $scope.errortext = "";
        if (!$scope.message) {return;}  
        if($scope.projectData.indexOf($scope.message)==-1){
           $scope.projectData.push($scope.message);}
        };
  
    $scope.targetRoad = 'https://track.sim.vuw.ac.nz/api/jinjing1/road_dir.json';
    
      $http.get($scope.targetRoad)
          .then(function successCall(response) { 
          $scope.myData = response.data.Roads;
          }
        );  
    
  
   $scope.targetUser = "https://track.sim.vuw.ac.nz/api/jinjing1/user_list.json";
   $http.get($scope.targetUser)
  .then(function (response) {logins = response.data.Users;});
  
  
  
  //Post function

  
 
  
$scope.viewProjectContractor = function(Projects){
  alert("Entered" + JSON.stringify(Projects))
   $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadL = false;
  $scope.falseRoadP = false;
  $scope.falseProjectL = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectP = false;
  $scope.falseAddR = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPContractor = true; 
  $scope.selectedProject = Projects;
};

$scope.returnRoadL = function(){
  $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = true;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
};
  
   $scope.addRoad=function(){
    
  var dataObjectRoads = {
    ID: $scope.roadID,
    Code: $scope.roadCode,
    Type: $scope.roadType,
    Section: $scope.roadSection,
    Location: $scope.roadLocation,
    GPS:$scope.roadGPS,
  };
    
  var postRoads = $http.post('https://track.sim.vuw.ac.nz/api/jinjing1/update.road.json', dataObjectRoads);
  postRoads.success(function(data, status, headers, config){
    $scope.message = data;
    
    alert("Add successfully");
     $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = true;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.targetRoad = 'https://track.sim.vuw.ac.nz/api/jinjing1/road_dir.json';
    
      $http.get($scope.targetRoad)
          .then(function successCall(response) { 
          $scope.myData = response.data.Roads;
          }
        );  
  });
  
  postRoads.error(function(data, status, headers, config){
    $scope.message = data;
   
    alert("Failed, please try again");
  }
    );
  };
 
 $scope.ProjectID = "1";
 $scope.ProjectRoad = "1";
 $scope.ProjectName = "Resurfacing";
 $scope.ProjectStatus = "Closed";
 $scope.ProjectStartDate = "2019-12-12T00:00:00";
 $scope.ProjectEndDate = "2019-12-14T00:00:00"; 
 $scope.ProjectContractor = "ABC Company";
 
 
  
$scope.editProject = function(){
    $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = true;
  $scope.falseEditPInspector= false;
};



$scope.editProjectInspector = function(){
    $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseEditPInspector= true;
};


$scope.editProjectSubmit = function(){
  
    
  var dataObjectProject = {
    ID: $scope.ProjectID,
    Road: $scope.ProjectRoad,
    Name: $scope.ProjectName,
    Status: $scope.ProjectStatus,
    StartDate: $scope.ProjectStartDate,
    EndDate:$scope.ProjectEndDate,
    Contractor: $scope.ProjectContractor,
  };
    
  var postProject = $http.post('https://track.sim.vuw.ac.nz/api/jinjing1/update.project.json', dataObjectProject);
  postProject.success(function(data, status, headers, config){
    $scope.message = data;
    
    alert("Edit successfully");
     $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPManager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = true;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  });
  
  postProject.error(function(data, status, headers, config){
    $scope.message = data;
   
    alert("Failed, please try again");
  }
    );
  
};


$scope.editProjectSubmitInspector = function(){
  
    
  var dataObjectProject = {
    ID: $scope.ProjectID,
    Road: $scope.ProjectRoad,
    Name: $scope.ProjectName,
    Status: $scope.ProjectStatus,
    StartDate: $scope.ProjectStartDate,
    EndDate:$scope.ProjectEndDate,
    Contractor: $scope.ProjectContractor,
  };
    
  var postProject = $http.post('https://track.sim.vuw.ac.nz/api/jinjing1/update.project.json', dataObjectProject);
  postProject.success(function(data, status, headers, config){
    $scope.message = data;
    
    alert("Edit successfully");
    $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPMnager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = true;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
  $scope.falseEditSub = false;
  $scope.falseEditPInspector= false;
 
  });
  
  postProject.error(function(data, status, headers, config){
    $scope.message = data;
   
    alert("Failed, please try again");
  }
    );
  
};



$scope.editSub = function(){
  $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPMnager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = false;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
  $scope.falseEditSub = true;
};

$scope.SubmitSub = function(){
  $scope.ProjectSub =  $scope.ProjectSub;
  $scope.falseHome = false;
  $scope.falseLogin = false;
  $scope.falseRoadLManager = false;
  $scope.falseRoadLInspector = false;
  $scope.falseRoadPMnager = false;
  $scope.falseRoadPInspector = false;
  $scope.falseProjectLInspector = false;
  $scope.falseProjectLManager = false;
  $scope.falseProjectLContractor = false;
  $scope.falseProjectPManager = false;
  $scope.falseProjectPInspector = false;
  $scope.falseProjectPContractor = true;
  $scope.falseAddR = false;
  $scope.falseEditP = false;
  $scope.falseAddP = false;
  $scope.falseEditSub = false;
};

$scope.Comments = ["Author"];

$scope.submitMessage = function(){
   $scope.errortext = "";
   if (!$scope.Message) {return;}   
  $scope.authorComments = $scope.inputUser;
  $scope.theComments = $scope.Message;
  
 
};

$scope.problemStatus = "Open";

$scope.closeProblem = function(){
   $scope.problemStatus = "Close";

};
  
$scope.openProblem = function(){
   $scope.problemStatus = "Open";

};

$scope.closeProject = function(){
  $scope.ProjectStatus="Close";
};

$scope.openProject = function(){
  $scope.ProjectStatus="Open";
};

//delete data function

// $scope.deleteRoads = function(Roads) {
  
//       $scope.promise2 = $http.delete(postRoads)
//             .then(function sucessCall(response) { 
//               $scope.feedback = "delete>> " + JSON.stringify(response.data);
//             }, function errorCall(response) {
//               $scope.feedback = "Error getting: " + response.status;
//             }
//       );
    
// };

 
  
});

