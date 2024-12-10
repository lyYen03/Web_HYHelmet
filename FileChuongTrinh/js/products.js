    // Mảng products
    var products = [
        // 

        // 
        {

            id: 1,
            img: "../img/non_12/1.jpg",
            imgindex: "../img/non_12/1.jpg",
            title: "Mũ bảo hiểm H1",
            price: "500,000 VND",
            price_sale: "450,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Đen",
            brand: "H1",
            quantity: 0
        },
        {
            id: 2,
            img: "../img/hanghoa/2.1-scaled.jpg",
            imgindex: "../img/hanghoa/2.1-scaled.jpg",
            title: "KYT Venom Foggia Misano 2021 Replica",
            price: "2,000,000 VND",
            price_sale: "1,800,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Foggia",
            brand: "KYT",
            quantity: 0
        },
        {
            id: 3,
            img: "../img/hanghoa/3.jpg",
            imgindex: "../img/hanghoa/3.jpg",
            title: "Royce XH04 Xám Xi Măng",
            price: "680,000 VND",
            price_sale: "570,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Xám Xi Măng",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 4,
            img: "../img/hanghoa/27.jpg",
            imgindex: "../img/hanghoa/27.jpg",
            title: "KYT NFJ Super Kip",
            price: "2,400,000 VND",
            price_sale: "2,250,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Super Kip",
            brand: "KYT",
            quantity: 0
        },
        {
            id: 5,
            img: "../img/hanghoa/DEN-NHAM-3-scaled.jpg",
            imgindex: "../img/hanghoa/DEN-NHAM-3-scaled.jpg",
            title: "Royce XH04 Đen Nhám",
            price: "680,000 VND",
            price_sale: "570,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Đen Nhám",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 6,
            img: "../img/hanghoa/web-hinh-vuong-rona-r5-trang-e1697428167935.jpg",
            imgindex: "../img/hanghoa/web-hinh-vuong-rona-r5-trang-e1697428167935.jpg",
            title: "Rona R5 Trắng",
            price: "250,000 VND",
            price_sale: "250,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Trắng",
            brand: "Rona",
            quantity: 0
        },
        {
            id: 7,
            img: "../img/hanghoa/web-hinh-vuong-rona-r8-xanh-linh.jpg",
            imgindex: "../img/hanghoa/web-hinh-vuong-rona-r8-xanh-linh.jpg",
            title: "Nón Rona 8 Xanh Rêu",
            price: "480,000 VND",
            price_sale: "480,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Xanh Rêu",
            brand: "Rona",
            quantity: 0
        },
        {
            id: 8,
            img: "../img/hanghoa/bong-tron-xam-chuot-02-copy-scaled-e1679467594512.jpg",
            imgindex: "../img/hanghoa/bong-tron-xam-chuot-02-copy-scaled-e1679467594512.jpg",
            title: "ROC R15 Xám Chuột",
            price: "599,000 VND",
            price_sale: "199,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Xám Chuột",
            brand: "ROC",
            quantity: 0
        },
        {
            id: 9,
            img: "../img/Nón34/1.jpg",
            imgindex: "../img/Nón34/1.jpg",
            title: "ROYCE XH15 Trắng Bóng",
            price: "320,000 VND",
            price_sale: "320,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Trắng Bóng",
            brand: "ROYCE",
            quantity: 0
        },
        {
            id: 10,
            img: "../img/Nón34/2.jpg",
            imgindex: "../img/Nón34/2.jpg",
            title: "ROYCE XH15 Đen Nhám",
            price: "320,000 VND",
            price_sale: "320,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Đen Nhám",
            brand: "ROYCE",
            quantity: 0
        },
        {
            id: 11,
            img: "../img/Nón34/3.jpg",
            imgindex: "../img/Nón34/3.jpg",
            title: "Royce XH26 V3 Nhám",
            price: "720,000 VND",
            price_sale: "570,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Nhám",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 12,
            img: "../img/Nón34/4.jpg",
            imgindex: "../img/Nón34/4.jpg",
            title: "Royce XH26 V6 Nhám",
            price: "720,000 VND",
            price_sale: "570,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Nhám",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 13,
            img: "../img/Nón34/5.jpg",
            imgindex: "../img/Nón34/5.jpg",
            title: "Royce XH26 Trắng Bóng",
            price: "700,000 VND",
            price_sale: "550,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Trắng Bóng",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 14,
            img: "../img/Nón34/6.jpg",
            imgindex: "../img/Nón34/6.jpg",
            title: "Royce XH26 Đen Nhám",
            price: "700,000 VND",
            price_sale: "550,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Đen Nhám",
            brand: "Royce",
            quantity: 0
        },
        {
            id: 15,
            img: "../img/Nón34/7.jpg",
            imgindex: "../img/Nón34/7.jpg",
            title: "Royal M139 Vàng Bóng",
            price: "600,000 VND",
            price_sale: "600,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Vàng Bóng",
            brand: "Royal",
            quantity: 0
        },
        {
            id: 16,
            img: "../img/Nón34/8.jpg",
            imgindex: "../img/Nón34/8.jpg",
            title: "Royal M139 Đen Bóng",
            price: "600,000 VND",
            price_sale: "600,000 VND",
            material: "Nhựa ABS",
            weight: "1200g",
            size: "M/L",
            color: "Đen Bóng",
            brand: "Royal",
            quantity: 0
        }
    ];

    function updateCartItemCount() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartItemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);
        var cartItemCountElement = document.getElementById("cart-item-count");
        cartItemCountElement.textContent = cartItemCount;
    }

    // Thêm sản phẩm vào giỏ hàng
    function addToCart(productId) {
        var product = products.find(p => p.id === productId);
        if (product) {
            var cart = JSON.parse(localStorage.getItem('cart')) || [];

            var existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                product.quantity = 1; // Mỗi lần thêm vào giỏ hàng là 1 sản phẩm
                cart.push({...product }); // Thêm bản sao sản phẩm vào giỏ hàng
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartItemCount();
            alert("Sản phẩm đã được thêm vào giỏ hàng.");
        } else {
            alert("Sản phẩm không tồn tại.");
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        updateCartItemCount();
        var container = document.getElementById("product-container");
        var productsPerPage = 8;
        var productsDisplayed = 0;

        // Function to display products
        function displayProducts(startIndex) {
            for (var i = startIndex; i < Math.min(products.length, startIndex + productsPerPage); i++) {
                var product = products[i];
                var productHTML = `
                <div class="col-3 mt-2">
                    <div class="container cotSanPham"> 
                        <div class="khungAnh">
                            <a href="../html/product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                            <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                        </div>
                        <div class="khungAnh-content">
                            <a href="../html/product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                            <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                        </div>
                    </div>
                </div>
            `;
                container.innerHTML += productHTML;
            }
            // Update the number of products displayed
            productsDisplayed += productsPerPage;

            // Hide "Xem thêm" button if all products are displayed
            if (productsDisplayed >= products.length) {
                loadMoreButton.style.display = "none";
            }
        }

        // Call the function to display initial products
        displayProducts(0);

        // Function to handle "Xem thêm" button click
        var loadMoreButton = document.getElementById("load-more-button");
        loadMoreButton.addEventListener("click", function() {
            displayProducts(productsDisplayed);
        });

        var productId = getUrlParameter('id');
        var product = products.find(p => p.id === parseInt(productId));

        if (product) {
            var productDetailsContainer = document.getElementById('product-details-container');
            var productHTML = `
            <div>
                <img src="${product.imgindex}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Giá: ${product.price}</p>
                <p>Giá khuyến mãi: ${product.price_sale}</p>
            </div>
        `;
            productDetailsContainer.innerHTML = productHTML;
        } else {
            // Handle the case when product is not found
            var productDetailsContainer = document.getElementById('product-details-container');
            productDetailsContainer.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
        }

    });

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }



    // Lưu thông tin giỏ hàng vào Local Storage
    function addToCart(productId) {
        var product = products.find(p => p.id === productId);
        if (product) {
            // Lấy danh sách sản phẩm từ localStorage
            var cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
                existingProduct.quantity += 1;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng với số lượng là 1
                product.quantity = 1;
                cart.push(product);
            }

            // Lưu danh sách sản phẩm vào localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Cập nhật số lượng sản phẩm trong giỏ hàng
            updateCartItemCount();

            alert("Sản phẩm đã được thêm vào giỏ hàng.");
        } else {
            alert("Sản phẩm không tồn tại.");
        }
    }

    function updateCartItemCount() {
        // Lấy danh sách sản phẩm từ localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        var cartItemCount = cart.length;

        // Hiển thị số lượng sản phẩm trên biểu tượng giỏ hàng
        var cartItemCountElement = document.getElementById("cart-item-count");
        cartItemCountElement.textContent = cartItemCount;
    }




    function displayProductsByBrand(brandName) {
        // Lọc các sản phẩm theo nhãn hiệu
        var filteredProducts = products.filter(product => product.brand === brandName);

        // Hiển thị các sản phẩm tương ứng
        displayProducts(filteredProducts);
    }

    function displayProducts(products) {
        // Xóa các sản phẩm hiện có trước khi hiển thị sản phẩm mới
        var container = document.getElementById("product-container");
        container.innerHTML = '';

        // Hiển thị các sản phẩm mới
        products.forEach(product => {
            var productHTML = ` 
            <div class="col-3 mt-2">
                <div class="container cotSanPham">
                    <div class="khungAnh">
                        <a href="../html/product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                        <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                    </div>
                    <div class="../khungAnh-content">
                        <a href="html/product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                        <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                    </div>
                </div>
            </div>
        `;
            container.innerHTML += productHTML;
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        // Lọc sản phẩm khuyến mãi
        var hotSaleProducts = products.filter(product => product.price_sale);

        // Hiển thị danh sách sản phẩm khuyến mãi
        displayHotSaleProducts(hotSaleProducts);
    });

    function displayHotSaleProducts(products) {
        var khuyenMaiHotContainer = document.querySelector('.khuyenmaihot');

        products.forEach(function(product) {
            // Tạo phần tử HTML cho mỗi sản phẩm
            var productHTML = `
        <div class="col-3 mt-2">
        <div class="container cotSanPham">
            <div class="khungAnh">
                <a href="../product_detail.html?id=${product.id}"><img src="${product.img}" alt="${product.title}"></a>
                <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
            </div>
            <div class="khungAnh-content">
                <a href="../product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                <p class="temp1"><img src="../img/anhChiTietSP/image.png" alt=""> <span>GIÁ SỐC CUỐI TUẦN</span></p>
                <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
            </div>
        </div>
    </div>
        `;

            // Thêm sản phẩm vào phần khuyenmaihot
            khuyenMaiHotContainer.innerHTML += productHTML;
        });
    }
    // Function to format the current date
    function getCurrentDate() {
        var today = new Date();
        var weekday = today.toLocaleDateString('vi-VN', { weekday: 'long' });
        var day = today.getDate();
        var month = today.toLocaleDateString('vi-VN', { month: 'long' });
        var year = today.getFullYear();

        return weekday + ', ' + day + ' ' + month + ' ' + year;
    }

    // Update date on page load
    window.onload = function() {
        var currentDate = getCurrentDate();
        document.getElementById("dateNow").textContent = currentDate;
    };