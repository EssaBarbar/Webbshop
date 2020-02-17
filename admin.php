<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/77e9819b86.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="./CSS/adminStyling.css">
    <script defer src="./JS/app.js"></script>
    <title>Admin interface</title>
</head>

<body>
    <header>
        <div class="logo">ENJOY</div>
        <div id="adminName">Bara Abdullatif</div>
        <div id="logout"><i class="fas fa-sign-out-alt"></i></div>
    </header>

    <main>
        <div class="mainContainer">

            <div class="bodyLeft">
                <div class="dashBoard container">DASH BOARD </div>

                <div class="categoriesContainer container">CATEGORIES</div>

                <div class="categorySubContainer subContainerHideShow">
                    <div class="catAdd add">Add</div>
                    <div class="catDelUpd delUpp">Delete/Update</div>
                </div>

                <div class="productsContainer container">PRODUCT</div>
                <div class="productSubContainer subContainerHideShow">
                    <div class="proAdd add">Add</div>
                    <div class="proDelUpp delUpp">Delete/Update</div>
                </div>

                <div class="ordersContainer container">ORDER </div>
                <div class="orderSubContainer subContainerHideShow">
                    <div class="ordSend add">Send Order</div>
                </div>

                <div class="usersContainer container">USERS</div>
                <div class="usersSubContainer subContainerHideShow">
                    <div class="usersAdd add">#</div>
                    <div class="usersDelUpp delUpp">#</div>
                </div>

                <div class="mangeAdminContainer container">MANGE ADMIN</div>
                <div class="mangeAdminSubContainer subContainerHideShow">
                    <div class="mangeAdminAdd add">Active Admin</div>
                    <div class="mangeAdminDelUpp delUpp">#</div>
                </div>

            </div>

            <div class="bodyRight">
                <div class="message" id="message">The category was added successfully</div>
                <div class="bodyRightContainer">
                    <div class="bdcCatAdd bdc">
                        <div class="addText">Add Category</div>
                        <div class="inputContainer">

                            <div class="row">
                                <div class="label-left">Category Name</div>
                                <input name="CategoryName" type="text" id="CategoryName" tabindex="1"
                                    placeholder="Category Name">
                            </div>

                            <div class="rowButton">
                                <input name="addCategory" type="button" id="button" tabindex="2" value="Add Category" onclick="msg()">
                            </div>

                        </div>
                    </div>

                    <div class="bdcCatDelUpp bdc">
                        <div class="addText">Update/Delete Category</div>
                        <div class="columnContainer">

                            <div class="columnMain">
                                <div class="columnMainText">Category ID</div>
                                <div class="columnMainText">Category Name</div>

                            </div>

                            <div class="columnSub">
                                <div name="CategoryID" id="ColumnSubText">1</div>
                                <div name="CategoryName" id="ColumnSubText">X-BOX</div>
                                <div name="Update" id="Update" onclick="">Update</div>
                                <div name="Delete" id="Delete" onclick="">Delete</div>
                            </div>

                            <div class="columnSub">
                                <div name="CategoryID" id="ColumnSubText">2</div>
                                <div name="CategoryName" id="ColumnSubText">PST</div>
                                <div name="Update" id="Update" onclick="">Update</div>
                                <div name="Delete" id="Delete" onclick="">Delete</div>
                            </div>

                            <div class="columnSub">
                                <div name="CategoryID" id="ColumnSubText">3</div>
                                <div name="CategoryName" id="ColumnSubText">PC</div>
                                <div name="Update" id="Update" onclick="">Update</div>
                                <div name="Delete" id="Delete" onclick="">Delete</div>
                            </div>

                            
                        </div>
                    </div>

                    <div class="bdcProAdd bdc">
                        <div class="addText">Add Product</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                    <div class="bdcProDelUpp bdc">
                        <div class="addText">Update/Delete Product</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                    <div class="bdcUseAdd bdc">
                        <div class="addText">Add User</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                    <div class="bdcUseDelUpp bdc">
                        <div class="addText">Update/Delete User</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                    <div class="bdcOrdSend bdc">
                        <div class="addText">Send Order</div>
                        <div class="inputContainer">


                        </div>
                    </div>


                    <div class="bdcMangeAdminAdd bdc">
                        <div class="addText">Manege Admin</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                    <div class="bdcMangeAdminDelUpp bdc">
                        <div class="addText">#</div>
                        <div class="inputContainer">


                        </div>
                    </div>

                </div>

            </div>
        </div>
    </main>
</body>

</html>