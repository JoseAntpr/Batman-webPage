$(document).ready(function(){
  var API_URL = "http://localhost:8000/api/";
  var tasks = [];
  var newTaskInput = $('#newTaskName');
  var tasksContainer = $('#taskContainer');



  var drawTasks = function(){
    tasksContainer.empty();

    if(tasks.length == 0){
      tasksContainer.append('<li> No hay tareas pendientes </li>');
    }else{
      var contentToAdd = '';
      for (var i = 0; i < tasks.length; i++){
        contentToAdd += '<li>' + tasks[i].name + '</li>';
      }
      tasksContainer.append(contentToAdd);
    }


  };

  var createTask = function (name){

    var success = function(data){
      newTaskInput.val('');
      tasks.push(data);
      drawTasks();
    };

    var data = {
      'name': name
    };

    $.ajax({
      type: "POST",
      url: API_URL+ "tasks",
      data: data,
      success: success
    });
  };

  $('#sendNewTask').on("click", function(event){
    if(newTaskInput.val() != ''){
      event.preventDefault();
      createTask(newTaskInput.val());
    }

  });

  var getTask =  function(){
    var success = function(data){
      tasks = data;
      drawTasks();

    };
    $.ajax({
      type: "GET",
      url: API_URL+ "tasks",
      success: success
    });
  };

  //Inicialización de componentes
  getTask();
});
