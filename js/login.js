angular.module('LoginApp', [])
    .controller('LoginCtrl', function($scope) {

        $scope.validateLogin = function(){
            var un = document.getElementById("username").value;
            var pw = document.getElementById("password").value;
            var valid = false;
            var unArray = ["admin", "nm", "eb", "em"];
            var pwArray = ["admin", "nm", "eb", "em"];
            for (var i=0; i <unArray.length; i++) {
                if ((un == unArray[i]) && (pw == pwArray[i])) {
                    valid = true;
                    break;
                }
            }
            if (valid) {
                window.location = "dashboard.html";
                return false;
            }else{
                alert ("Login war nicht erfolgreich");
            }
        }

    });