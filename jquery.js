$(function (){
    $(".form-control").focus(function(){
        $(this).css("background-color", "#FFFFCC");
    });
    $(".form-control").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
    });
    $("#submit").click(function(event){
        if($("#mdp").val()!= $("#Confirm").val()) {
            event.preventDefault(); // cette méthode permet d’annuler l’action en cours d’un élément lorsqu’elle survient.
            $("#msg").html('<div class="alert alert-danger alert-dismissible"><button type="button" class="btn-close" data-bs-dismiss="alert"></button><strong>Erreur de confirmation!</strong> </div>');
            $("label[for=Confirm]").addClass("couleur"); //Le label confirmation avec son input vont se coloré en rouge
            $("#Confirm").addClass("couleur");
        }              
    });
   $("#refresh").click(function(){
       $("label[for=Confirm]").removeClass("couleur");
            $("#Confirm").removeClass("couleur");
   });
  } );
