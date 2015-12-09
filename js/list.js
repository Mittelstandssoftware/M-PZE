angular.module('ListApp', [])
    .controller('ListCtrl', function($scope) {
        $scope.members = {
            name: "Nils Maschmann",
            activity: "besuch beim Kunden",
            username: "nm",
            password: "nm",
            status: "1"
        };

    });
