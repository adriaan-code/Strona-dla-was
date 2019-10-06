$(document).ready(function(){
    $("#oddaj").hide();
    $("#form12").hide();
    $("#form1").hide();
    $("#form2").hide();
    $("#text").hide();
    $("#text2").hide();
    });

function pokaz(){
    $("#oddaj").show();
    $("#form12").show();
    $("#form1").show();
    $("#text").show();
    document.getElementById("oddaj").style.opacity = "1";
    $("#main").hide();
    $("header").hide();
}   

function ukryj(){
    $("#oddaj").hide();
    $("#form12").hide();
    $("#text").hide();
    $("#text2").hide();
    $("#form2").hide();
    $("#form1").hide();
    document.getElementById("main").style.opacity = "1";
    $("#main").show();
    $("header").show();
}

function next(){
    $("#oddaj").show();
    $("#form12").show();
    $("#text").hide();
    $("#text2").show();
    $("#form1").hide();
    $("#form2").show();
    document.getElementById("oddaj").style.opacity = "1";
    $("#main").hide();
    $("header").hide();
}   

function previews(){
    $("#oddaj").show();
    $("#form12").show();
    $("#text").show();
    $("#text2").hide();
    $("#form2").hide();
    $("#form1").show();
    document.getElementById("oddaj").style.opacity = "1";
    $("#main").hide();
    $("header").hide();
}   
