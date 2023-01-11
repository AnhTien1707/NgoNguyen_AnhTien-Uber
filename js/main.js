var UberX = document.querySelector("#uberX");
var UberSuv = document.querySelector("#uberSUV");
var UberBlack = document.querySelector("#uberBlack");
var divXuatTien = document.querySelector("#divThanhTien");
var spanXuatTien = document.querySelector("#xuatTien");
var SoKm = document.querySelector("#SoKm");
var ThoiGianCho = document.querySelector("#ThoiGianCho");
var ThanhTien = 0;
var LoaiUber;
var Uber3 = document.getElementById("Uber3");
var Uber2 = document.getElementById("Uber2");
// ----------------------------NameUber1---------------
var NameUber = document.querySelector(".NameUber");
var NumberKm = document.querySelector(".NumberKm");
var Price = document.querySelector(".Price");
var IntoMoney = document.querySelector(".IntoMoney");
// ----------------------------End NameUber1---------------
// ------------------------NameUber2---------------
var NameUber2 = document.querySelector(".NameUber2");
var NumberKm2 = document.querySelector(".NumberKm2");
var Price2 = document.querySelector(".Price2");
var IntoMoney2 = document.querySelector(".IntoMoney2");
// ----------------------------End NameUber2---------------

// ------------------------NameUber3---------------
var NameUber3 = document.querySelector(".NameUber3");
var NumberKm3 = document.querySelector(".NumberKm3");
var Price3 = document.querySelector(".Price3");
var IntoMoney3 = document.querySelector(".IntoMoney3");
// ----------------------------End NameUber3---------------


// ----------------------------Thời gian chờ ---------------
var TimeWating = document.querySelector(".TimeWating");
var PriceTime = document.querySelector(".PriceTime");
var IntoMoneyTime = document.querySelector(".IntoMoneyTime");
// ------------------------Tổng Tiền --------------------
var Total = document.querySelector(".Total");


function LayLoaixe() {
    if (UberX.checked) {
        LoaiUber = 'UberX';
    }
    else if (UberSuv.checked) {
        LoaiUber = 'UberSuv';
    }
    else if (UberBlack.checked) {
        LoaiUber = 'UberBlack';
    }
    return LoaiUber;
}

// -------------------Số KM-------------------
var fristKm = "1 Km";
var Km2;
// -------------------Giá---------------
var gia1;
var gia2;
var gia3;
var TotalMoney1;
var TotalMoney2;
// ---------------thoi gian cho-------------
var giaCho;
var tongTiencho;
// --------Tien tong--------

function TinhTien() {
    divXuatTien.style.display = "block";
    if (UberX.checked == true) {
        if (SoKm.value <= 1) {
            ThanhTien = parseFloat(SoKm.value) * 8000 + parseFloat(ThoiGianCho.value * 2000);

        }
        else if (SoKm.value > 1 && SoKm.value <= 20) {
            ThanhTien = 1 * 8000 + parseFloat(SoKm.value - 1) * 12000 + parseFloat(ThoiGianCho.value * 2000);
        }
        else if (SoKm.value >= 21) {
            ThanhTien = 1 * 8000 + 20 * 12000 + parseFloat(SoKm.value - 21) * 10000 + parseFloat(ThoiGianCho.value * 2000);
        }
    }
    else if (UberSuv.checked == true) {
        if (SoKm.value <= 1) {
            ThanhTien = parseFloat(SoKm.value) * 9000 + parseFloat(ThoiGianCho.value * 3000);
        }
        else if (SoKm.value > 1 && SoKm.value <= 20) {
            ThanhTien = 1 * 9000 + parseFloat(SoKm.value - 1) * 14000 + parseFloat(ThoiGianCho.value * 3000);
        }
        else if (SoKm.value >= 21) {
            ThanhTien = 1 * 9000 + 20 * 14000 + parseFloat(SoKm.value - 21) * 12000 + parseFloat(ThoiGianCho.value * 3000);
        }
    }
    else if (UberBlack.checked == true) {
        if (SoKm.value <= 1) {
            ThanhTien = parseFloat(SoKm.value) * 10000 + parseFloat(ThoiGianCho.value * 4000);
        }
        else if (SoKm.value > 1 && SoKm.value <= 20) {
            ThanhTien = 1 * 10000 + parseFloat(SoKm.value - 1) * 16000 + parseFloat(ThoiGianCho.value * 4000);
        }
        else if (SoKm.value >= 21) {
            ThanhTien = 1 * 10000 + 20 * 16000 + parseFloat(SoKm.value - 21) * 14000 + parseFloat(ThoiGianCho.value * 4000);
        }
    }
    else {
        alert("Bạn Cần Chọn Loại Xe");
        divXuatTien.style.display = "none";
    }

    spanXuatTien.innerHTML = ThanhTien;
    var LoaiXe = LayLoaixe();
    switch (LoaiXe) {
        case ('UberX'):
            if (SoKm.value == 1) {
                Uber2.style.display = "none";
                Uber3.style.display = "none";
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "none";
            }
            else if (SoKm.value >= 21) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "table-row";
            }
            break;
        case ('UberSuv'):
            if (SoKm.value == 1) {
                Uber2.style.display = "none";
                Uber3.style.display = "none";
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "none";
            }
            else if (SoKm.value >= 21) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "table-row";
            }
            break;
        case ('UberBlack'):
            if (SoKm.value == 1) {
                Uber2.style.display = "none";
                Uber3.style.display = "none";
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "none";
            }
            else if (SoKm.value >= 21) {
                Uber2.style.display = "table-row";
                Uber3.style.display = "table-row";
            }
            break;
    }
    switch (LoaiXe) {
        case ('UberX'):
            var gia1 = 8000;
            var gia2 = 12000;
            var gia3 = 10000;
            var TotalMoney1 = gia1;
            var TotalMoney2 = gia2 * parseFloat(SoKm.value - 1);
            var TotalMoney3 = gia3 * parseFloat(SoKm.value - 21);

            var giaCho = 2000;
            var tongTiencho = parseFloat(ThoiGianCho.value * 1) * giaCho;
            if (SoKm.value <= 1) {
                NameUber.innerHTML = "UberX"
                NumberKm.innerHTML = fristKm;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                PriceTime.innerHTML = giaCho;
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = 8000 + tongTiencho;
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                NameUber.innerHTML = "UberX"
                NameUber2.innerHTML = "UberX"
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = parseFloat(SoKm.value - 1) + " Km";
                Price2.innerHTML = gia2;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = TotalMoney2
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + TotalMoney2 + tongTiencho;
            }
            else if (SoKm.value >= 21) {
                NameUber.innerHTML = "UberX"
                NameUber2.innerHTML = "UberX"
                NameUber3.innerHTML = "UberX"
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = "20 Km";
                NumberKm3.innerHTML = parseFloat(SoKm.value - 21) + " Km";
                Price.innerHTML = gia1;
                Price2.innerHTML = gia2;
                Price3.innerHTML = gia3;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = 20 * 12000;
                IntoMoney3.innerHTML = TotalMoney3
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + (20 * 12000) + TotalMoney3 + tongTiencho;
            }
            break;
        case ('UberSuv'):
            var gia1 = 9000;
            var gia2 = 14000;
            var gia3 = 12000;
            var TotalMoney1 = gia1;
            var TotalMoney2 = gia2 * parseFloat(SoKm.value - 1);
            var TotalMoney3 = gia3 * parseFloat(SoKm.value - 21);

            var giaCho = 3000;
            var tongTiencho = parseFloat(ThoiGianCho.value * 1) * giaCho;
            if (SoKm.value <= 1) {
                NameUber.innerHTML = "UberSuv"
                NumberKm.innerHTML = fristKm;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                PriceTime.innerHTML = giaCho;
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = 9000 + tongTiencho;
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                NameUber.innerHTML = "UberSuv"
                NameUber2.innerHTML = "UberSuv"
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = parseFloat(SoKm.value - 1) + " Km";
                Price2.innerHTML = gia2;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = TotalMoney2
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + TotalMoney2 + tongTiencho;
            }
            else if (SoKm.value >= 21) {
                NameUber.innerHTML = "UberSuv";
                NameUber2.innerHTML = "UberSuv";
                NameUber3.innerHTML = "UberSuv";
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = "20 Km";
                NumberKm3.innerHTML = parseFloat(SoKm.value - 21) + " Km";
                Price.innerHTML = gia1;
                Price2.innerHTML = gia2;
                Price3.innerHTML = gia3;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = 20 * 14000;
                IntoMoney3.innerHTML = TotalMoney3
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + (20 * 14000) + TotalMoney3 + tongTiencho;
            }
            break;
        case ('UberBlack'):
            var gia1 = 10000;
            var gia2 = 16000;
            var gia3 = 14000;
            var TotalMoney1 = gia1;
            var TotalMoney2 = gia2 * parseFloat(SoKm.value - 1);
            var TotalMoney3 = gia3 * parseFloat(SoKm.value - 21);

            var giaCho = 4000;
            var tongTiencho = parseFloat(ThoiGianCho.value * 1) * giaCho;
            if (SoKm.value <= 1) {
                NameUber.innerHTML = "UberBlack"
                NumberKm.innerHTML = fristKm;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                PriceTime.innerHTML = giaCho;
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = 10000 + tongTiencho;
            }
            else if (SoKm.value > 1 && SoKm.value <= 20) {
                NameUber.innerHTML = "UberBlack"
                NameUber2.innerHTML = "UberBlack"
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = parseFloat(SoKm.value - 1) + " Km";
                Price2.innerHTML = gia2;
                Price.innerHTML = gia1;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = TotalMoney2
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + TotalMoney2 + tongTiencho;
            }
            else if (SoKm.value >= 21) {
                NameUber.innerHTML = "UberBlack";
                NameUber2.innerHTML = "UberBlack";
                NameUber3.innerHTML = "UberBlack";
                NumberKm.innerHTML = fristKm;
                NumberKm2.innerHTML = "20 Km";
                NumberKm3.innerHTML = parseFloat(SoKm.value - 21) + " Km";
                Price.innerHTML = gia1;
                Price2.innerHTML = gia2;
                Price3.innerHTML = gia3;
                IntoMoney.innerHTML = gia1;
                IntoMoney2.innerHTML = 20 * 16000;
                IntoMoney3.innerHTML = TotalMoney3
                PriceTime.innerHTML = giaCho;
                TimeWating.innerHTML = parseFloat(ThoiGianCho.value * 1) + " Phút";
                IntoMoneyTime.innerHTML = tongTiencho;
                Total.innerHTML = TotalMoney1 + (20 * 16000) + TotalMoney3 + tongTiencho;
            }
            break;
    }

}






