angular.module('Service', [])
    .service('dataStorage', [function () {
        this.version = 1;
        this.cache = {};

        this.setCache = function (id, data) {
            this.cache[id] = data;
            return;
        }

        this.getCache = function (id) {
            if (this.cache[id]) {
                return this.cache[id];
            } else {
                return null;
            }
        }
    }])
    .service('formData', function () {
        this.location = [
            {id: 1, name: 'Mall'},
            {id: 2, name: 'Church'},
            {id: 3, name: 'Street'},
            {id: 4, name: 'Train Station'}
        ];
    })