import { makeRequest } from './requestHandler.js'
import { addEventListener } from './eventListeners.js'

addEventListener()

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
    $(".bdcMangeAdminDelUpp").hide(200);
    $(".updateAdminCategory").hide();


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

    getAllCategories();
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


function getAllCategories() {
    /*let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getAllCategory");
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
        console.log("In getAll")
        console.log(result);
        return result
    });
    */
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getAllCategory");
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {

        $(".columnSub").remove();
        $(".ColumnSubText").remove();
        $(".ColumnSubText").remove();
        $(".Update").remove();
        $(".Delete").remove();

        for (let i = 0; i < result.length; i++) {
            let columnSub = $("<div></div>");
            columnSub.addClass("columnSub");

            let CategoryID = $("<div></div>");
            CategoryID.text(result[i].CategoryID);
            CategoryID.addClass("ColumnSubText");

            let CategoryName = $("<div></div>");
            CategoryName.text(result[i].CategoryName);
            CategoryName.addClass("ColumnSubText");

            let Update = $("<div></div>");
            Update.text("Update");
            Update.addClass("CategoryID Update");

            Update.on("click", function() {
                $('.Update').click(function() {
                    $(".bdcCatAdd").show(200);
                    $(".bdcCatDelUpp").hide(200);
                    $(".bdcProAdd").hide(200);
                    $(".bdcProDelUpp").hide(200);
                    $(".bdcUseAdd").hide(200);
                    $(".bdcUseDelUpp").hide(200);
                    $(".bdcOrdSend").hide(200);
                    $(".bdcMangeAdminAdd").hide(200);
                    $(".bdcMangeAdminDelUpp").hide(200);
                    $(".bdcMangeAdminDelUpp").hide(200);
                    $(".updateAdminCategory").show();
                    $(".AddAdminCategory").hide();
                    $("#CategoryName").value = $(".ColumnSubText").eq(1).text();
                });
            });
            let Delete = $("<div></div>");
            Delete.text("Delete");
            Delete.addClass("Delete");

            Delete.on("click", function() {
                console.log(i);
                deleteCategory(result[i].CategoryID)
                var index = Delete.index(this);
                $(".columnSub")[i].remove();
            });

            columnSub.append(CategoryID);
            columnSub.append(CategoryName);
            columnSub.append(Update);
            columnSub.append(Delete);
            $(".columnContainer").append(columnSub);
        }
    })
}


function deleteCategory(CategoryID) {
    console.log(CategoryID)
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "delAdminCategory");
    myData.append("CategoryID", CategoryID)
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
        console.log("in req")

        console.log(result);

    });
}



export function addCategory(event) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addAdminCategory");
    myData.append("CategoryName", document.querySelector('input[name=CategoryName]').value)
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {

        if (result) {
            $(".message").text("The category was added successfully");
            $(".message").css('color', 'blue');
            $('#message').fadeIn(3000);
            $('#message').fadeOut(2000);
            $('#CategoryName').text("");
        }
        console.log(result);

    });
}


export function updateCategory(event) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "updateAdminCategory");
    myData.append("CategoryName", document.querySelector('input[name=CategoryName]').value)
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
        if (result) {
            $(".message").text("The category was added successfully");
            $(".message").css('color', 'blue');
            $('#message').fadeIn(3000);
            $('#message').fadeOut(2000);
            $('#CategoryName').text("");
        }
        console.log(result);

    });
}