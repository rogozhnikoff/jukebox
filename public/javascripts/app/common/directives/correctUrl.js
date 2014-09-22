'use strict';

(function(){

    var correctUrl;
    correctUrl = function () {
        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {

                function ytVidId(url) {
                    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                    if (_.isUndefined(url)) return false;
                    return (url.match(p)) ? RegExp.$1 : false;
                }

                ngModel.$parsers.unshift(function(value) {
                    if (ytVidId(value)) {
                        ngModel.$setValidity('validUrl', true);
                        return true;
                    }
                    else {
                        ngModel.$setValidity('validUrl', false);
                        return undefined;
                    }
                });

                ngModel.$formatters.unshift(function(value) {
                    if (ytVidId(value)) {
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

