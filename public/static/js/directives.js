angular.module('directives',[]).directive('player', function(){
    var ddo = {}
    ddo.templateUrl = '../../templates/directives/player.html';
    ddo.restrict = 'AE';
    ddo.transclude = false;
    ddo.scope = {
        titulo:'@',
        views:'@',
        date:'@',
        description: '@',
        videoId:'@'
    }

    return ddo;
    
});