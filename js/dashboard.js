/**
 * Created by nils.maschmann on 16.11.2015.
 */

'use strict';

angular.module('DashboardApp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/dashboard.html', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        });
    }])

    .controller('DashboardCtrl', [function() {

    }]);