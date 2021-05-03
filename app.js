$(document).ready(function(){
    $("#width").click(function(){
        $(".color").width("+=5"); 
    });
    $("#height").click(function(){
        $(".color").height("+=5"); 
    });
    $("#colors").click(function(){
        $(".color").css("background-color", "#3fa7b3"); 
    });
    $("#showHide").click(function(){
        $(".color").toggle(); //show and hide
    });
    $("#border").focusin(function(){
        $(".color").css('border','3px solid #a70d26');
    });
    $("#pic").focusin(function(){
        $("body").css('background-image','url("./Aid.jpg")')
    });
    $("#clear").click(function(){
        $("body").css('background-image', ""),
        $(".color").css('background-color', "")
    });
  
    console.log('this');

  });