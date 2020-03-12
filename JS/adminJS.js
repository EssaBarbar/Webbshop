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
            deleteCategoryBtn.addClass("DeleteCategory Delete");

            deleteCategoryBtn.on("click", function() {
                alert(result[i].CategoryID);
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