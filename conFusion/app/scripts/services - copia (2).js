'use strict';

angular.module('confusionApp')

.constant("baseURL","http://localhost:3000/")

.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL)
{    
    this.getDishes = function()
    {
        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
    };

    this.getPromotion = function ()
    {
        return $resource(baseURL+"promotions/:id", null, {'update':{method:'PUT' }});
    }
}])

.factory('corporateFactory', function()
{
    this.getLeaders = function ()
    {
        return $resource(baseURL+"leaders/:id", null, {'update':{method:'PUT' }});
    }
})
;