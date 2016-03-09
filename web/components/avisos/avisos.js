(function(){
    'use strict';
    angular.module('app.avisos', [])
           .controller('Avisos', Avisos)
           .controller('controladorP',function($scope,$filter){
        $scope.filteredText = $filter('uppercase')($scope.originalText);
        $scope.publicaciones=[{titulo:"publicacion uno",contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iure facilis necessitatibus ipsam, itaque consequatur illum odit vero minus pariatur quae inventore provident id deleniti ab nisi harum libero soluta."},{titulo:"publicacion 2",contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptates doloremque, aut ut quia quos ratione dolor eius ab cupiditate, nihil tempore non facilis. Vitae, cupiditate, ipsa. Ex, in, sapiente."},{titulo:"publicacion 3",contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus fugit at harum. Distinctio, minima aperiam. Minima, assumenda dolor, modi quae doloremque dolores laborum reprehenderit mollitia cupiditate sint, labore similique!"},{titulo:"publicacion 4",contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas minus incidunt velit laboriosam non tempora nulla, id, corrupti atque, soluta sed nobis quae assumenda doloribus, optio ducimus at veritatis modi!"},{titulo:"publicacion 5",contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti praesentium, qui nostrum architecto neque voluptatibus repellat ut, nam veniam possimus rerum minima similique nobis quo labore atque minus maiores, quisquam."}];

               
    })
            .controller('PublicaDocenteController',PublicaDocenteController);
    
    function Avisos() {
        var vm = this;
            }
    function PublicaDocenteController() {
        var vm = this;
    }
})();