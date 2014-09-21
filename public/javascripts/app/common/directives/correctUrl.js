'use strict';

(function(){

    var correctUrl;
    correctUrl = function () {
        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {

                ngModel.$parsers.unshift(function(value) {
                    if (value == 'youtube') {
                        ngModel.$setValidity('validUrl', true);
                        return true;
                    }
                    else {
                        ngModel.$setValidity('validUrl', false);
                        return undefined;
                    }
                });

                ngModel.$formatters.unshift(function(value) {
                    if (value == 'youtube') {
                        ngModel.$setValidity('validUrl', true);
                        return true;
                    }
                    else {
                        ngModel.$setValidity('validUrl', false);
                        return undefined;
                    }
                })

            }

        }
    };

    var module = angular.module('app.common');

    module.directive('correctUrl', correctUrl);

}());

