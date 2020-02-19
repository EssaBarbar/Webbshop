$(document).ready(function() {

    $('.dashBoard').click(function() {

        $(".categorySubContainer").hide(200);
        $(".productSubContainer").hide(200);
        $(".orderSubContainer").hide(200);
        $(".usersSubContainer").hide(200);
        $(".mangeAdminSubContainer").hide(200);
    });

    $('.categoriesContainer').click(function() {

        $(".categorySubContainer").show(200);
        $(".productSubContainer").hide(200);
        $(".orderSubContainer").hide(200);
        $(".usersSubContainer").hide(200);
        $(".mangeAdminSubContainer").hide(200);

    });


    $('.productsContainer').click(function() {

        $(".categorySubContainer").hide(200);
        $(".productSubContainer").show(200);
        $(".orderSubContainer").hide(200);
        $(".usersSubContainer").hide(200);
        $(".mangeAdminSubContainer").hide(200);

    });


    $('.ordersContainer').click(function() {

        $(".categorySubContainer").hide(200);
        $(".productSubContainer").hide(200);
        $(".orderSubContainer").show(200);
        $(".usersSubContainer").hide(200);
        $(".mangeAdminSubContainer").hide(200);
    });
    $('.usersContainer').click(function() {

        $(".categorySubContainer").hide(200);
        $(".productSubContainer").hide(200);
        $(".orderSubContainer").hide(200);
        $(".usersSubContainer").show(200);
        $(".mangeAdminSubContainer").hide(200);
    });
    $('.mangeAdminContainer').click(function() {

        $(".categorySubContainer").hide(200);
        $(".productSubContainer").hide(200);
        $(".orderSubContainer").hide(200);
        $(".usersSubContainer").hide(200);
        $(".mangeAdminSubContainer").show(200);
    });


    $('.dashBoard').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.catAdd').click(function() {

        $(".bdcCatAdd").show(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.catDelUpd').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").show(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);



        var txt = $("<div> Category ID </div>");
        txt.addClass("bdcCatDelUpp");
        $("columnSub").append(txt);
        $(".columnSub").css("background-color", "yellow");
        $(".columnSub").text('Hello');


    });

    $('.proAdd').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").show(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.proDelUpp').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").show(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.usersAdd').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").show(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.usersDelUpp').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").show(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.ordSend').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").show(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.mangeAdminAdd').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").show(200);
        $(".bdcMangeAdminDelUpp").hide(200);

    });

    $('.mangeAdminDelUpp').click(function() {

        $(".bdcCatAdd").hide(200);
        $(".bdcCatDelUpp").hide(200);
        $(".bdcProAdd").hide(200);
        $(".bdcProDelUpp").hide(200);
        $(".bdcUseAdd").hide(200);
        $(".bdcUseDelUpp").hide(200);
        $(".bdcOrdSend").hide(200);
        $(".bdcMangeAdminAdd").hide(200);
        $(".bdcMangeAdminDelUpp").show(200);

    });
});