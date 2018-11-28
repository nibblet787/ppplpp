const app = angular.module('Potluck', []);

app.controller('PotluckController', ['$http', function($http){

// =-=-=-=-= Reset variables -=-=-=-=-=
  this.host = false;
  this.hostName = "";
  this.hostDate = "";
  this.name = "";
  this.food = "";
  this.recipeUrl = "";
  this.profilePic = "";
  this.needOven = false;
  this.attendees = "";
  this.glutenFree = false;
  this.peanutFree = false;
  this.indexOfEditFormShow = 0;

  const controller = this;

/*********    Show route      ********/
  this.getGuests = function(){
    $http({
      method:'GET',
      url: '/guests'
    }).then(function(response){
      console.log(response.data);
      controller.guests = response.data
    }, error=>{
            console.log(error);
        })
    };

/*********    Create route      ********/
  this.createGuest = function(){
    $http({
      method:'POST',
      url: '/guests',
      data: {
        host: this.host,
        hostName: this.hostName,
        hostDate: this.hostDate,
        name: this.name,
        food: this.food,
        recipeUrl: this.recipeUrl,
        profilePic: this.profilePic,
        needOven: this.needOven,
        attendees: this.attendees,
        glutenFree: this.glutenFree,
        peanutFree: this.peanutFree
      }
    }).then(function(response){
        controller.host = false;
        controller.hostName = "";
        controller.hostDate = "";
        controller.name = "";
        controller.food = "";
        controller.recipeUrl = "";
        controller.profilePic = "";
        controller.needOven = false;
        controller.attendees = "";
        controller.glutenFree = false;
        controller.peanutFree = false;
        controller.guests.unshift(response.data)
        controller.getGuests();
    }, function(){
        console.log('error');
    });
  }

// -=-=-=-=-=- Seed Database =--=-=-=-==-=-=-
  this.createGuestSeed = function(){
    $http({
      method:'POST',
      url: '/guests/seed',
    }).then(function(response){
        console.log('error');
    });
  }

/*********    Delete route      ********/
  this.deleteGuest = function(guest){
    $http({
      method:'DELETE',
      url:'/guests/'+ guest._id
    }).then(function(response){
      controller.getGuests();
    })
  }

/*********    Update route      ********/
  this.editGuest = function(guest){
    $http({
      method: 'PUT',
      url: '/guests/' + guest._id,
      data: {
        host: this.editedHost,
        hostName: this.editedHostName,
        hostDate: this.editedHostDate,
        name: this.editedName,
        food: this.editedFood,
        recipeUrl: this.editedRecipeUrl,
        profilePic: this.editedProfilePic,
        needOven: this.editedNeedOven,
        attendees: this.editedAttendees,
        glutenFree: this.editedGlutenFree,
        peanutFree: this.editedPeanutFree
      }
    }).then(function(response){
      controller.getGuests();
      this.host = false;
      this.hostName = "";
      this.hostDate = "";
      this.name = "";
      this.food = "";
      this.recipeUrl = "";
      this.profilePic = "";
      this.needOven = false;
      this.attendees = "";
      this.glutenFree = false;
      this.peanutFree = false;
    }, error => {
      console.log(error);
    })
  };

/********* Create User  ********/
  this.createUser = function(){
    $http({
        method:'POST',
        url:'/users',
        data: {
            username: this.username,
            password: this.password
        }
    }).then(function(response){
        console.log(response);
        controller.username= "";
        controller.password= "";
    })
  }

/*********     Login function      ********/
  this.logIn = function(){
    $http({
        method:'POST',
        url:'/sessions',
        data: {
            username:this.username,
            password:this.password
        }
    }).then(function(response){
        console.log(response);
        controller.toggleWhenUserIsLoggedIn();
        controller.toggleInfo();
        controller.getGuests();
    })
  }

/*********     Logout function      ********/
  this.logout = function(){
        this.username = "";
        this.password = "";
        controller.toggleWhenUserIsLoggedIn();
        controller.resetToggles();
  };

  // this.logout = function(){
  //   $http({
  //       method:'DELETE',
  //       url:'/sessions',
  //       data: {
  //         this.username = "";
  //         this.password = "";
  //       }
  //   }).then(function(response){
  //     controller.resetToggles();
  //   })
  // }


/*********    Show and Reveal Functions      ********/
  this.showAddGuest = false;
  this.showEdit = false;
  this.showLogin = false;
  this.showCreate = false;
  this.showInfo = false;
  this.showWhenLoggedIn = false;
  this.showFindParty = false;

  this.toggleAddGuest = function(){
        this.showAddGuest =  !this.showAddGuest;
  };

  this.toggleEdit = function($index){
      this.indexOfEditFormShow = $index;
      console.log(this.indexOfEditFormShow);
      this.showEdit = !this.showEdit;
  };

  this.toggleLogin = function(){
      this.showLogin = !this.showLogin;
  };

  this.toggleCreate = function(){
      this.showCreate = !this.showCreate;
  };

  this.toggleInfo = function($index){
      if(this.showWhenLoggedIn === true){
        this.indexOfEditFormShow = $index;
        this.showInfo = !this.showInfo
      }
  };

  this.toggleWhenUserIsLoggedIn = function(){
      this.showWhenLoggedIn = !this.showWhenLoggedIn;
  };

  this.toggleFindParty = function() {
    this.showFindParty = !this.showFindParty
  };

  this.resetToggles = function() {
    this.showAddGuest = false;
    this.showEdit = false;
    this.showLogin = false;
    this.showCreate = false;
    this.showInfo = false;
    this.showWhenLoggedIn = false;
    this.showFindParty = false;
  };

  this.goHome = function() {
    if(this.showWhenLoggedIn == true) {
      controller.getGuests();
    } else {
      controller.resetToggles();
    }
  }

  controller.getGuests();
}]);
