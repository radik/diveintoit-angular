var app = angular.module('phonebook', []);

app.controller('PhonebookController', ['$scope',
    'DataService', function(scope, dataService){
    scope.persons = dataService.list();
    scope.view = 'table';
}]);

app.directive('pbPersonCard', function(){
    return {
        restrict: 'E',
        scope: {
            person: '='
        },
        templateUrl: 'partials/person-card.html'
    };
});

app.service('DataService', [function(){
    function list(){
        return [
            {
                "name":"Iron Man",
                "phone":"777-77-77",
                "company":"Stark Inc.",
                "photo":"iron-man.jpeg"
            },
            {
                "name":"Баба Яга",
                "phone":"123-00-00",
                "company":"Дремучий лес",
                "photo":"baba-yaga.jpg"
            },
            {
                "name":"Batman",
                "phone":"111-11-11",
                "company":"Wayne Inc.",
                "photo":"batman.jpg"
            },
            {
                "name":"Black Widow",
                "phone":"333-33-78",
                "company":"Avengers",
                "photo":"black-widow.jpg"
            },
            {
                "name":"Captain America",
                "phone":"555-55-55",
                "company":"Avengers",
                "photo":"captain-america.jpg"
            },
            {
                "name":"Darth Vader",
                "phone":"131-13-13",
                "company":"Dark Side Ltd.",
                "photo":"darth-vader.jpg"
            },
            {
                "name":"Hulk",
                "phone":"888-88-88",
                "company":"Avengers",
                "photo":"hulk.jpg"
            },
            {
                "name":"Joker",
                "phone":"-",
                "company":"000-00-00",
                "photo":"joker.png"
            },
            {
                "name":"Luke Skywalker",
                "phone":"999-99-99",
                "company":"The Force Ltd.",
                "photo":"luke-skywalker.jpg"
            },
            {
                "name":"Yoda",
                "phone":"900-90-90",
                "company":"The Force Ltd.",
                "photo":"yoda.jpg"
            }
        ];
    }

    return {
        list: list
    };
}]);







