import { makeRequest } from './requestHandler.js'
import { addEventListener } from './eventListeners.js'
var imgCover, imgPng

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

    $(function() {
        let myData = new FormData();
        myData.append("entity", "enjoy");
        myData.append("endpoint", "getAllCategory");
        makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
            $('select').empty()
            $('select[name="CategoryName"]')
                .append($('<option />')
                    .text("Select Category Name")
                );
            for (let i = 0; i < result.length; i++) {
                $('select[name="CategoryName"]')
                    .append($('<option />')
                        .text(result[i].CategoryName)
                    );
            }
        });
    });

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


    getAllProducts()
});


function getAllProducts() {

    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getAllProducts");
    makeRequest("./../API/recivers/productReciver.php", "POST", myData, (result) => {

        $(".columnSub").remove();
        $(".ColumnSubText").remove();
        $(".ColumnSubText").remove();
        $(".Update").remove();
        $(".Delete").remove();

        for (let i = 0; i < result.length; i++) {
            let columnSub = $("<div></div>");
            columnSub.addClass("columnSub");

            let ProductID = $("<div></div>");
            ProductID.text(result[i].ProductID);
            ProductID.addClass("ColumnSubText ProductID");

            let CategoryID = $("<div></div>");
            CategoryID.text(result[i].CategoryID);
            CategoryID.addClass("ColumnSubText CategoryID");

            let ProductName = $("<div></div>");
            ProductName.text(result[i].ProductName);
            ProductName.addClass("ColumnSubText ProductName");

            let UnitInStock = $("<div></div>");
            UnitInStock.text(result[i].UnitInStock);
            UnitInStock.addClass("ColumnSubText UnitInStock");

            let Price = $("<div></div>");
            Price.text(result[i].Price);
            Price.addClass("ColumnSubText Price");

            let Update = $("<div></div>");
            Update.text("Update");
            Update.addClass("ProductID Update");

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

            ///// Delete Product function

            let deleteProductBtn = $("<div></div>");
            deleteProductBtn.text("Delete");
            deleteProductBtn.addClass("deleteProductBtn Delete");

            deleteProductBtn.on("click", function() {               
                deleteProduct(result[i].ProductID)
                $(".columnSub")[i].remove();
            });

            //// End Delete Product Function

            columnSub.append(ProductID);
            columnSub.append(CategoryID);
            columnSub.append(ProductName);
            columnSub.append(UnitInStock);
            columnSub.append(Price);
            columnSub.append(Update);
            columnSub.append(deleteProductBtn);
            $(".columnContainer").append(columnSub);
        }
    });
}


function deleteProduct(productID) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "delAdminProduct");
    myData.append("productID", productID)
    makeRequest("./../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result);
    });
}


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
    getAllNewsletters();

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
    
    getOrder();

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

            ///// Delete Category function

            let deleteCategoryBtn = $("<div></div>");
            deleteCategoryBtn.text("Delete");
            deleteCategoryBtn.addClass("deleteCategoryBtn Delete");

            deleteCategoryBtn.on("click", function() {               
                console.log(result[i].CategoryID);
                deleteCategory(result[i].CategoryID)
                $(".columnSub")[i].remove();
            });
            //// End Delete category function

            columnSub.append(CategoryID);
            columnSub.append(CategoryName);
            columnSub.append(Update);
            columnSub.append(deleteCategoryBtn);
            $(".columnContainer").append(columnSub);
        }
    })
}


function deleteCategory(CategoryID) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "delAdminCategory");
    myData.append("CategoryID", CategoryID)
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
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




$('#addCoverPicBtn').click(function() {
    var fileTag = document.getElementById("addCoverPicBtn"),
        preview = document.getElementById("CoverPicture");
    fileTag.addEventListener("change", function() {
        changeImageCover(this);
    });

    function changeImageCover(input) {
        var reader;
        var imgPath;
        var files = input.files;
        if (input.files && input.files[0]) {
            reader = new FileReader();
            reader.onload = function(readerEvt) {
                preview.setAttribute('src', readerEvt.target.result);
                readerEvt.target.fileName;
            }
            reader.readAsDataURL(input.files[0]);
        }
        for (var i = 0; i < files.length; i++) {
            imgPath = "./images/coverpictures/" + $('select[name=CategoryName]').val() + "/" + files[i].name;
        }
        imgCover = imgPath
    }
});

$('#addPngPicBtn').click(function() {
    var fileTag = document.getElementById("addPngPicBtn"),
        preview = document.getElementById("PNGPicture");
    fileTag.addEventListener("change", function() {
        changeImagePng(this);
    });

    function changeImagePng(input) {
        var reader;
        var imgPath;
        var files = input.files;
        if (input.files && input.files[0]) {
            reader = new FileReader();
            reader.onload = function(readerEvt) {
                preview.setAttribute('src', readerEvt.target.result);
                readerEvt.target.fileName;
            }
            reader.readAsDataURL(input.files[0]);
        }
        for (var i = 0; i < files.length; i++) {
            imgPath = "./images/pngpictures/" + $('select[name=CategoryName]').val() + "/" + files[i].name;

        }
        imgPng = imgPath
    }

});


export function addProduct(event) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addAdminProduct");
    myData.append("CategoryID", $("select")[0].selectedIndex)
    myData.append("ProductName", document.querySelector('input[name=ProductName]').value)
    myData.append("UnitInStock", document.querySelector('input[name=UnitInStock]').value)
    myData.append("Price", document.querySelector('input[name=Price]').value)
    myData.append("CoverPicture", imgCover)
    myData.append("PNGPicture", imgPng)
    myData.append("Description", document.querySelector('input[name=Description]').value)
    makeRequest("./../API/recivers/productReciver.php", "POST", myData, (result) => {
        console.log(result);
        if (result) {
            $(".message").text("The Product was added successfully");
            $(".message").css('color', 'blue');
            $('#message').fadeIn(3000);
            $('#message').fadeOut(2000);
            $('#CategoryName').text("");
        }
    });
}


function getAllNewsletters() {    
    makeRequest("./../API/recivers/newsletterReciver.php", "GET", null, (result) => {
       
        $(".columnSub").remove();
        $(".ColumnSubText").remove();
        $(".ColumnSubText").remove();
       
        for (let i = 0; i < result.length; i++) {
            let columnSub = $("<div></div>");
            columnSub.addClass("columnSub");

            let NewsletterID = $("<div></div>");
            NewsletterID.text(result[i].NewsletterID);
            NewsletterID.addClass("ColumnSubText");

            let UserID = $("<div></div>");
            UserID.text(result[i].UserID);
            UserID.addClass("ColumnSubText");

            let FirstName = $("<div></div>");
            FirstName.text(result[i].FirstName);
            FirstName.addClass("ColumnSubText");

            let LastName = $("<div></div>");
            LastName.text(result[i].LastName);
            LastName.addClass("ColumnSubText");

            let Email = $("<div></div>");
            Email.text(result[i].Email);
            Email.addClass("ColumnSubText");

            
            //// End show  newsletters function

            columnSub.append(NewsletterID);
            columnSub.append(UserID);
            columnSub.append(FirstName);
            columnSub.append(LastName);
            columnSub.append(Email);                      
            $(".columnContainer").append(columnSub);
        }
    })
}


function getOrder() {    
    makeRequest("./../API/recivers/orderReciver.php", "GET", null, (result) => {
       
        $(".columnSub").remove();
        $(".ColumnSubText").remove();
        $(".ColumnSubText").remove();
       
        for (let i = 0; i < result.length; i++) {
            let columnSub = $("<div></div>");
            columnSub.addClass("columnSub");

            
            let OrderID = $("<div></div>");
            OrderID.text(result[i].OrderID);
            OrderID.addClass("ColumnSubText");

            let OrderDate = $("<div></div>");
            OrderDate.text(result[i].OrderDate);
            OrderDate.addClass("ColumnSubText");

            let UserID = $("<div></div>");
            UserID.text(result[i].UserID);
            UserID.addClass("ColumnSubText");

            let ShipperID = $("<div></div>");
            ShipperID.text(result[i].ShipperID);
            ShipperID.addClass("ColumnSubText");

            let Recieved = $("<div></div>");
            Recieved.text(result[i].Recieved);
            Recieved.addClass("ColumnSubText");

            let Shipped = $("<div></div>");
            Shipped.text(result[i].Shipped);
            Shipped.addClass("ColumnSubText");

            let showOrderDetailsBtn = $("<div></div>");
            showOrderDetailsBtn.text("Show");
            showOrderDetailsBtn.addClass("showOrderDetailsBtn Delete");

            columnSub.on("click", function() {
                getOrderDetails(result[i].OrderID)
                $(".columnSub")[i].remove();
            });

                                    
            //// End show Order function

            columnSub.append(OrderID);
            columnSub.append(OrderDate);
            columnSub.append(UserID);
            columnSub.append(ShipperID);
            columnSub.append(Recieved);
            columnSub.append(Shipped);                                       
            columnSub.append(showOrderDetailsBtn);  
            $(".columnContainer").append(columnSub);
        }
    })
}



function getOrderDetails(OrderID) {  
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getOrderDetails");
    myData.append("OrderID", OrderID)    
    makeRequest("./../API/recivers/orderDetailsReciver.php", "POST", myData, (result) => {
       
        $(".columnSubD").remove();
        $(".ColumnSubTextD").remove();
        $(".ColumnSubTextD").remove();
       
        for (let i = 0; i < result.length; i++) {
            let columnSubD = $("<div></div>");
            columnSubD.addClass("columnSubD");

            let ProductID = $("<div></div>");
            ProductID.text(result[i].ProductID);
            ProductID.addClass("ColumnSubTextD");

            let Quantity = $("<div></div>");
            Quantity.text(result[i].Quantity);
            Quantity.addClass("ColumnSubTextD");

            let UnitPrice = $("<div></div>");
            UnitPrice.text(result[i].UnitPrice);
            UnitPrice.addClass("ColumnSubTextD");

                        
            //// End show Order Details function

            columnSubD.append(ProductID);
            columnSubD.append(Quantity);
            columnSubD.append(UnitPrice);                               
            $(".columnContainerD").append(columnSubD);
        }
    })
}