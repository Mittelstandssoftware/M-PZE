angular.module('DashboardApp', [])
    .controller('DashboardCtrl', function($scope) {

        var then;
        var now;
        var pause;
        var min=0;
        var hour=0;

        $scope.startwatch = function () {
            then=new Date();
            $scope.startnow();
        };

        $scope.startnow = function()
        {
            document.getElementById("start").style.display="none";
            document.getElementById("stop").style.display="block";
            document.getElementById("continue").style.display="none";
            timer=setTimeout("$scope.go()", 1000);
        };

        $scope.go = function() {
            now = new Date();
            sec=now.getSeconds()-then.getSeconds();
            if(sec<0)
                sec+=60;
            if (sec==0)
                min++;
            if(min>59)
            {
                min-=60;
                hour++;
            }
            document.getElementById("s").firstChild.nodeValue=sec;
            if(document.getElementById("s").firstChild.nodeValue.length<2)
                document.getElementById("s").firstChild.nodeValue="0"+document.getElementById("s").firstChild.nodeValue;
            document.getElementById("m").firstChild.nodeValue=min;
            if(document.getElementById("m").firstChild.nodeValue.length<2)
                document.getElementById("m").firstChild.nodeValue="0"+document.getElementById("m").firstChild.nodeValue;
            document.getElementById("h").firstChild.nodeValue=hour;
            $scope.startnow();
        };

        $scope.stop = function() {
            pause=new Date();
            clearTimeout(timer);
            document.getElementById("start").style.display="none";
            document.getElementById("stop").style.display="block";
            document.getElementById("continue").style.display="block";
        };

        $scope.cont = function() {
            pauseoff=new Date();
            ss=pauseoff.getSeconds()-pause.getSeconds()+then.getSeconds()+1;
            mm=pauseoff.getMinutes()-pause.getMinutes()+then.getMinutes();
            hh=pauseoff.getHours()-pause.getHours()+then.getHours();
            dd=pauseoff.getDate();
            mo=pauseoff.getMonth();
            yy=pauseoff.getYear();
            if (ss>60)
            {
                ss-=60;
                mm++;
            } else if (ss<0) {
                ss+=60;
                mm--;
            }
            if (mm>60)
            {
                mm-=60;
                hh++;
            } else if (mm<0) {
                mm+=60;
                hh--;
            }
            then=new Date(yy,mo,dd,hh,mm,ss);
            $scope.startnow();
        }

    });