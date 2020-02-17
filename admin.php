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
                                <input name="addCategory" type="button" id="button" tabindex="2" value="Add Category"
                                    onclick="msg()">
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
                        <div class="divContainer">
                            <div class="leftContainer">

                                <div class="row">
                                    <div class="label-left">Category Name</div>
                                    <select name="CategoryName" id="CategoryName" tabindex="1"
                                        placeholder="Category Name">
                                        <option value="AddCategory">Choice Category</option>
                                        <option value="PC">PC</option>
                                        <option value="X-Box">X-Box</option>
                                        <option value="PST">PST</option>
                                    </select>
                                </div>

                                <div class="row">
                                    <div class="label-left">Product Name</div>
                                    <input name="ProductName" type="text" id="ProductName" tabindex="2"
                                        placeholder="Category Name">
                                </div>

                                <div class="row">
                                    <div class="label-left">Unit In Stock</div>
                                    <input name="UnitInStock" type="text" id="UnitInStock" tabindex="3"
                                        placeholder="Unit In Stock">
                                </div>

                                <div class="row">
                                    <div class="label-left">Price</div>
                                    <input name="Price" type="text" id="Price" tabindex="4" placeholder="Price">
                                </div>

                                <div class="row">
                                    <div class="label-left">Product Name</div>
                                    <input name="Description" type="text" id="Description" tabindex="5"
                                        placeholder="Description">
                                </div>

                                <div class="row">
                                    <div class="rowButton">
                                        <input name="CoverPicture" type="button" id="buttonAdd" tabindex="6"
                                            value="Add Cover Picture" onclick="">
                                    </div>

                                    <div class="rowButton">
                                        <input name="PNGPicture" type="button" id="buttonAdd" tabindex="7"
                                            value="Add PNG Picture" onclick="">
                                    </div>

                                </div>

                            </div>

                            <div class="rightContainer">
                                <div class="imgContainer">
                                    <div class="row">
                                        <div class="label-left">Add Cover Picture</div>
                                        <div class="CoverPicture" name="CoverPictureBtn"></div>
                                    </div>
                                    <div class="row">
                                        <div class="label-left">Add PNG Picture</div>
                                        <div class="PNGPicture" name="PNGPictureBtn" ></div>
                                    </div>
                                </div>
                                <div class="rowButton">
                                    <input name="addCategory" type="button" id="button" tabindex="8"
                                        value="Add Category" onclick="">
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

                <div class="bdcProDelUpp bdc">
                <div class="addText">Update/Delete Category</div>
                        <div class="columnContainer">

                            <div class="columnMain">
                                <div class="columnMainText">ProductID</div>
                                <div class="columnMainText">CategoryID</div>
                                <div class="columnMainText">ProductName</div>
                                <div class="columnMainText">UnitInStock</div>
                                <div class="columnMainText">Price</div>
                                <div class="columnMainText">CoverPicture</div>
                                <div class="columnMainText">PNGPicture</div>
                                <div class="columnMainText">Description</div>

                            </div>

                            <div class="columnSub">
                                <div name="ProductID" id="ColumnSubText">ProductID</div>
                                <div name="CategoryID" id="ColumnSubText">CategoryID</div>
                                <div name="ProductName" id="ColumnSubText">ProductName</div>
                                <div name="UnitInStock" id="ColumnSubText">UnitInStock</div>                                
                                <div name="Price" id="ColumnSubText">Price</div>
                                <div name="CoverPicture" id="ColumnSubText">CoverPicture</div>
                                <div name="PNGPicture" id="ColumnSubText">PNGPicture</div>
                                <div name="Description" id="ColumnSubText">Description</div>
                                <div name="Update" id="Update" onclick="">Update</div>
                                <div name="Delete" id="Delete" onclick="">Delete</div>
                            </div>
                            
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