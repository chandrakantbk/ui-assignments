$(document).ready(function() {

    $(".team-member").each(function(idx) {
        $(this).attr("id", `member-${idx}`);
    });

    $(".member-info").each( function(index) {
        $(this).attr("id", `info-${index}`);
    });

    $(".team-member").on("click", (event)=> {
        let id = $(event.currentTarget).attr("id").split("-")[1];
        console.log(id);

        $(".member-info").hide();
        $("#info-"+ id ).show();
    });
    
});