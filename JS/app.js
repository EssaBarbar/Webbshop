import { makeRequest } from './requestHandler.js'
import { addEventListener } from './eventListeners.js'
var imgCover, imgPng

addEventListener()

$('.dashBoard').click(function () {

    $(".categorySubContainer").hide(200);
    $(".productSubContainer").hide(200);
    $(".orderSubContainer").hide(200);
    $(".usersSubContainer").hide(200);
    $(".mangeAdminSubContainer").hide(200);
});


$('.categoriesContainer').click(function () {

    $(".categorySubContainer").show(200);
    $(".productSubContainer").hide(200);
    $(".orderSubContainer").hide(200);
    $(".usersSubContainer").hide(200);
    $(".mangeAdminSubContainer").hide(200);

});


$('.productsContainer').click(function () {

    $(".categorySubContainer").hide(200);
    $(".productSubContainer").show(200);
    $(".orderSubContainer").hide(200);
    $(".usersSubContainer").hide(200);
    $(".mangeAdminSubContainer").hide(200);

});


$('.ordersContainer').click(function () {

    $(".categorySubContainer").hide(200);
    $(".productSubContainer").hide(200);
    $(".orderSubContainer").show(200);
    $(".usersSubContainer").hide(200);
    $(".mangeAdminSubContainer").hide(200);
});
$('.usersContainer').click(function () {

    $(".categorySubContainer").hide(200);
    $(".productSubContainer").hide(200);
    $(".orderSubContainer").hide(200);
    $(".usersSubContainer").show(200);
    $(".mangeAdminSubContainer").hide(200);
});
$('.mangeAdminContainer').click(function () {

    $(".categorySubContainer").hide(200);
    $(".productSubContainer").hide(200);
    $(".orderSubContainer").hide(200);
    $(".usersSubContainer").hide(200);
    $(".mangeAdminSubContainer").show(200);
});


$('.dashBoard').click(function () {

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

$('.catAdd').click(function () {

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

$('.catDelUpd').click(function () {

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

$('.proAdd').click(function () {

    $(".bdcCatAdd").hide(200);
    $(".bdcCatDelUpp").hide(200);
    $(".bdcProAdd").show(200);
    $(".bdcProDelUpp").hide(200);
    $(".bdcUseAdd").hide(200);
    $(".bdcUseDelUpp").hide(200);
    $(".bdcOrdSend").hide(200);
    $(".bdcMangeAdminAdd").hide(200);
    $(".bdcMangeAdminDelUpp").hide(200);

    $(function () {
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

$('.proDelUpp').click(function () {

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

            var UpdateProductBtn = $("<div></div>");
            UpdateProductBtn.text("Update");
            UpdateProductBtn.addClass("update UpdateProductBtn");

            UpdateProductBtn.click(function () {
                updateProduct(result[i].ProductID, result[i].CategoryID, result[i].ProductName, result[i].UnitInStock, result[i].Price, result[i].CoverPicture, result[i].PNGPicture, result[i].Description);
                getAllProducts()
                
            });

            ///// End Update Product function

            var deleteProductBtn = $("<div></div>");
            deleteProductBtn.text("Delete");
            deleteProductBtn.addClass("deleteProductBtn Delete");

            deleteProductBtn.on("click", function () {               
                deleteProduct(result[i].ProductID)
                $(".columnSub")[i].remove();
                getAllProducts()
            });

            //// End Delete Product Function

            columnSub.append(ProductID);
            columnSub.append(CategoryID);
            columnSub.append(ProductName);
            columnSub.append(UnitInStock);
            columnSub.append(Price);
            columnSub.append(UpdateProductBtn);
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


$('.usersAdd').click(function () {

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

$('.usersDelUpp').click(function () {

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


$('.ordSend').click(function () {
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

$('.mangeAdminAdd').click(function () {

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

$('.mangeAdminDelUpp').click(function () {

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
            CategoryID.addClass("ColumnSubText CategoryID");

            let CategoryName = $("<div></div>");
            CategoryName.text(result[i].CategoryName);
            CategoryName.addClass("ColumnSubText CategoryName");

            
            let UpdateCategoryBtn = $("<div></div>");
            UpdateCategoryBtn.text("Update");
            UpdateCategoryBtn.addClass("Update UpdateCategoryBtn");

            UpdateCategoryBtn.click(function () {
                updateCategory(result[i].CategoryID)
                getAllCategories();
            });


            ///// Delete Category function

            let deleteCategoryBtn = $("<div></div>");
            deleteCategoryBtn.text("Delete");
            deleteCategoryBtn.addClass("deleteCategoryBtn Delete");

            deleteCategoryBtn.on("click", function () {
                console.log(result[i].CategoryID);
                deleteCategory(result[i].CategoryID)
                $(".columnSub")[i].remove();
                getAllCategories()
            });
            //// End Delete category function

            columnSub.append(CategoryID);
            columnSub.append(CategoryName);
            columnSub.append(UpdateCategoryBtn);
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
            $('#message').fadeIn(1000);
            $('#message').fadeOut(1000);
            $('#CategoryName').text("");
        }
        console.log(result);
    });
}


export function updateCategory(CategoryID) {   
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "updateCategory");
    myData.append("CategoryID", CategoryID)
    myData.append("CategoryName", document.querySelector('input[name=categoryNameText]').value)
    makeRequest("./../API/recivers/categoryReciver.php", "POST", myData, (result) => {
        if (result) {
            $(".message").text("The category was added successfully");
            $(".message").css('color', 'blue');
            $('#message').fadeIn(1000);
            $('#message').fadeOut(1000);
            $('#CategoryName').text("");
        }
        console.log(result);

    });
}

function sendOrder(OrderID, OrderDate, UserID, ShipperID, Recieved) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "updateAdminOrder");
    myData.append("OrderID", OrderID)
    myData.append("OrderDate", OrderDate)
    myData.append("UserID", UserID)
    myData.append("ShipperID", ShipperID)
    myData.append("Recieved", Recieved)
    myData.append("Shipped", "1")
    makeRequest("./../API/recivers/orderReciver.php", "POST", myData, (result) => {
        if (result) {
            $(".message").text("The Order had sent to Customer");
            $(".message").css('color', 'blue');
            $('#message').fadeIn(1000);
            $('#message').fadeOut(1000);
        }
        console.log(result);

    });
}


function updateProduct(ProductID, CategoryID, ProductName, Price, CoverPicture, PNGPicture, Description) {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "updateAdminProduct");
    myData.append("ProductID", ProductID)
    myData.append("CategoryID", CategoryID)
    myData.append("ProductName", ProductName)
    myData.append("Price", Price)
    myData.append("CoverPicture", CoverPicture)
    myData.append("PNGPicture", PNGPicture)
    myData.append("Description", Description)
    myData.append("UnitInStock", document.querySelector('input[name=UnitInStockText]').value)
    makeRequest("./../API/recivers/productReciver.php", "POST", myData, (result) => {
        if (result) {
            $(".message").text("The product was updated successfully");
            $(".message").css('color', 'blue');
            
        }
        console.log(result);

    });
}


$('#addCoverPicBtn').click(function () {
    var fileTag = document.getElementById("addCoverPicBtn"),
        preview = document.getElementById("CoverPicture");
    fileTag.addEventListener("change", function () {
        changeImageCover(this);
    });

    function changeImageCover(input) {
        var reader;
        var imgPath;
        var files = input.files;
        if (input.files && input.files[0]) {
            reader = new FileReader();
            reader.onload = function (readerEvt) {
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

$('#addPngPicBtn').click(function () {
    var fileTag = document.getElementById("addPngPicBtn"),
        preview = document.getElementById("PNGPicture");
    fileTag.addEventListener("change", function () {
        changeImagePng(this);
    });

    function changeImagePng(input) {
        var reader;
        var imgPath;
        var files = input.files;
        if (input.files && input.files[0]) {
            reader = new FileReader();
            reader.onload = function (readerEvt) {
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
            $('#message').fadeIn(1000);
            $('#message').fadeOut(1000);
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
            NewsletterID.addClass("ColumnSubText NewsletterID");

            let UserID = $("<div></div>");
            UserID.text(result[i].UserID);
            UserID.addClass("ColumnSubText UserID");

            let FirstName = $("<div></div>");
            FirstName.text(result[i].FirstName);
            FirstName.addClass("ColumnSubText FirstName");

            let LastName = $("<div></div>");
            LastName.text(result[i].LastName);
            LastName.addClass("ColumnSubText LastName");

            let Email = $("<div></div>");
            Email.text(result[i].Email);
            Email.addClass("ColumnSubText Email");


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
            OrderID.addClass("ColumnSubText OrderID");

            let OrderDate = $("<div></div>");
            OrderDate.text(result[i].OrderDate);
            OrderDate.addClass("ColumnSubText OrderDate");

            let UserID = $("<div></div>");
            UserID.text(result[i].UserID);
            UserID.addClass("ColumnSubText UserID");

            let ShipperID = $("<div></div>");
            ShipperID.text(result[i].ShipperID);
            ShipperID.addClass("ColumnSubText ShipperID");

            let Recieved = $("<div></div>");
            Recieved.text(result[i].Recieved);
            Recieved.addClass("ColumnSubText Recieved");

            let Shipped = $("<div></div>");
            Shipped.text(result[i].Shipped);
            Shipped.addClass("ColumnSubText Shipped");

            let showOrderDetailsBtn = $("<div></div>");
            showOrderDetailsBtn.text("Show");
            showOrderDetailsBtn.addClass("showOrderDetailsBtn Delete");

            showOrderDetailsBtn.on("click", function () {
                getOrderDetails(result[i].OrderID)               
            });

            //// End show Order function

            let SendOrderBtn = $("<div></div>");
            SendOrderBtn.text("Send");
            SendOrderBtn.addClass("SendOrderBtn update");

            SendOrderBtn.on("click", function () {
                sendOrder(result[i].OrderID, result[i].OrderDate, result[i].UserID, result[i].ShipperID, result[i].Recieved)
                getOrder()
            });



            columnSub.append(OrderID);
            columnSub.append(OrderDate);
            columnSub.append(UserID);
            columnSub.append(ShipperID);
            columnSub.append(Recieved);
            columnSub.append(Shipped);
            columnSub.append(SendOrderBtn);
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
            ProductID.addClass("ColumnSubTextD ProductID");

            let Quantity = $("<div></div>");
            Quantity.text(result[i].Quantity);
            Quantity.addClass("ColumnSubTextD Quantity");

            let UnitPrice = $("<div></div>");
            UnitPrice.text(result[i].UnitPrice);
            UnitPrice.addClass("ColumnSubTextD UnitPrice");


            //// End show Order Details function

            columnSubD.append(ProductID);
            columnSubD.append(Quantity);
            columnSubD.append(UnitPrice);
            $(".columnContainerD").append(columnSubD);
        }
    })
}