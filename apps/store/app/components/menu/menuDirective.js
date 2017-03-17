(function(){
    'use strict';
    angular.module('store.menu.directive', [])
	.directive('storeMenu', function(){
        return {
            restrict: 'EA',
            controller: 'menuController',                       
            templateUrl: 'app/components/menu/views/menu.tpl.html',
            link: function(scope, element, attr, ctrl){
                console.log('initialize directive');
                console.log(scope.menuItems);
            }
        }
    });
})();