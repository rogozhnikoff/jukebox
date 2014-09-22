'use strict';

String.prototype.cap = function(){
    return this.slice(0, 1).toUpperCase() + this.slice(1)
}

// выноси отдельно в файл
window.registerCtrl = function(name, methods, options){
    constructor = methods.constructor;
    var Ctrl = typeof constructor === 'function' ? constructor : $.noop;
    if (constructor != null) delete methods.constructor;
    $.extend(Ctrl.prototype, methods)
    
    if (options.$inject != null) Ctrl.$inject = options.$inject;

    var module = angular.module('app.' + name);

    module.controller(name.cap() + 'Ctrl', Ctrl);
}


(function() {
    registerCtrl('search', {
        constructor: function (PlaylistFactory) {
            window.fff = this;
            this.PlaylistFactory = PlaylistFactory;
        },
        submit = function (form) {
            if (form.$invalid) return;
    
            this.PlaylistFactory.items.push(this.search);
            this.search = null;
            form.$setPristine(true);
        },
        showError = function (form) {
            return form.url.$error.validUrl && form.$dirty
        }
    }, {
        $inject: ['PlaylistFactory']
    });
}());
