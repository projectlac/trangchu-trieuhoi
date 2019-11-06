$(window).load(function() {    

        var theWindow        = $(window),
            $bg              = $("#bg"),
            aspectRatio      = $bg.width() / $bg.height();

        function resizeBg() {

                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $bg
                        .removeClass()
                        .addClass('bgheight');
                } else {
                    $bg
                        .removeClass()
                        .addClass('bgwidth');
                }

        }

        theWindow.resize(resizeBg).trigger("resize");

});

var dem=0; var demb=0;

var tt =  document.getElementById("tt");
    var tx =  document.getElementById("tx");
    var ts =  document.getElementById("ts");

    var tx1 =  document.getElementById("tx1");
        var tx2 =  document.getElementById("tx2");
            var tx3 =  document.getElementById("tx3");
                var tx4 =  document.getElementById("tx4");
                    var tx5 =  document.getElementById("tx5");
                        var tx6 =  document.getElementById("tx6");
                            var tx7 =  document.getElementById("tx7");
                                var tx8 =  document.getElementById("tx8");
                                    var tx9 =  document.getElementById("tx9");
    var tx10 =  document.getElementById("tx10");


var imgs1 = document.getElementById("imgs1");
var imgs2 = document.getElementById("imgs2");
var imgs3 = document.getElementById("imgs3");
var imgs4 = document.getElementById("imgs4");
var imgs5 = document.getElementById("imgs5");
var imgs6 = document.getElementById("imgs6");
var imgs7 = document.getElementById("imgs7");
var imgs8 = document.getElementById("imgs8");
var imgs9 = document.getElementById("imgs9");
var imgs10 = document.getElementById("imgs10");

    var SSR = ["<p style='color:orange'>SSR - Nhất Mục Liên</p>", "<p style='color:orange '>SSR - Thanh Hành Đăng </p>", "<p style='color:orange'>SSR - Yêu Đao Cơ</p>","<p style='color:orange'>SSR - Diêm Ma</p>","<p style='color:orange '>SSR - Hoang Xuyên chi Chủ</p>","<p style='color:orange '>SSR - Đại Thiên Cẩu </p>",
    "<p style='color:orange '>SSR - Tửu Thôn Đồng Tử </p>",
    "<p style='color:orange '>SSR - Tỳ Mộc Đồng Tử </p>",
    "<p style='color:orange '>SSR - Tiểu Lộc Nam </p>",
    "<p style='color:orange '>SSR - Hoang </p>",
    "<p style='color:orange '>SSR - Hoa Điểu Quyển </p>",
    "<p style='color:orange '>SSR - Huy Dạ Cơ </p>",
    "<p style='color:orange '>SSR - Tuyết Đồng Tử </p>",
    "<p style='color:orange '>SSR - Bỉ Ngạn Hoa </p>",
    "<p style='color:orange '>SSR - Ngự Soạn Tân </p>","<p style='color:orange '>SSR - Ngọc Tảo Tiền </p>","<p style='color:orange '>SSR - Diện Linh Khí </p>",
    "<p style='color:orange '>SSR - Bát Kỵ Đại Xà </p>",
    "<p style='color:orange '>SSR - Đại Nhạc Hoàn </p>",
    "<p style='color:orange '>SSR - Bất Tri Hỏa </p>",
    "<p style='color:orange '>SSR - Quỷ Thiết </p>",
    "<p style='color:#ff6666 '>SP - Ngự Oán Bát Nhã </p>",
    "<p style='color:#ff6666 '>SP - Thương Phong Nhất Mục Liên </p>",
    "<p style='color:#ff6666 '>SP - Luyện Ngục Tỳ Mộc Đồng Tử </p>",
    "<p style='color:#ff6666 '>SP - Thiếu Vũ Đại Thiên Cẩu </p>",
    "<p style='color:#ff6666 '>SP - Xích Ảnh Yêu Đao Cơ </p>",
    "<p style='color:#ff6666 '>SP - Đạo Hà Thần Ngự Soạn Tân </p>"
    
    ];


    var hinh=["img/lien.png", "img/hang.png", "img/dao.png", "img/diem.png","img/xuyen.png" ,"img/cau.png","img/tuu.png","img/ty.png","img/loc.png","img/hoang.png","img/dieu.png","img/tre.png","img/tuyet.png","img/bi.png",
    "img/lua.png",
    "img/noi.png"
    ,"img/dien.png","img/325.webp","img/dainhachoan.png","img/bth.webp","img/Thiet.png"
    ,"img/nhasp.png","img/liensp.webp","img/tysp.png","img/causp.png","img/daosp.webp","img/luasp.png" ]; 


    var SR = [" <p style='color:#ff0066'>SR - Bạch Vô Thường </p> ", "<p style='color:#ff0066'>SR - Cốt Nữ </p> ", "<p style='color:#ff0066'>SR - Đào Hoa Yêu </p>",
    "<p style='color:#ff0066'>SR - Quỷ Nữ Hồng Diệp </p>",
    "<p style='color:#ff0066'>SR - Hắc Vô Thường </p>",
    "<p style='color:#ff0066'>SR - Tuyết Nữ </p>",
    "<p style='color:#ff0066'>SR - Bạch Đồng Tử </p>",
    "<p style='color:#ff0066'>SR - Hắc Đồng Tử </p>",
    
    "<p style='color:#ff0066'>SR - Truy Nguyệt Thần </p>",
"<p style='color:#ff0066'>SR - Miêu Chưởng Quỹ </p>",
"<p style='color:#ff0066'>SR - Mạnh Bà </p>",
"<p style='color:#ff0066'>SR - Yên Yên La </p>",
"<p style='color:#ff0066'>SR - Khôi Lỗi Sư </p>",
"<p style='color:#ff0066'>SR - Hải Phường Chủ </p>",
"<p style='color:#ff0066'>SR - Bách Mục Qủy </p>",
"<p style='color:#ff0066'>SR - Dịch </p>",
"<p style='color:#ff0066'>SR - Cương Thi Ca Ca </p>",
"<p style='color:#ff0066'>SR - Thanh Cơ </p>",
"<p style='color:#ff0066'>SR - Liêm Dứu </p>",
"<p style='color:#ff0066'>SR - Cô Hoạch Điểu </p>",
"<p style='color:#ff0066'>SR - Nhị Khẩu Nữ </p>",
"<p style='color:#ff0066'>SR - Bạch Lang </p>",
"<p style='color:#ff0066'>SR - Thực Mộng Mô </p>",
"<p style='color:#ff0066'>SR - Hỏa Phượng Hoàng </p>",
"<p style='color:#ff0066'>SR - Phán Quan </p>",
"<p style='color:#ff0066'>SR - Yêu Hồ </p>",
"<p style='color:#ff0066'>SR - Yêu Cầm Sư </p>",
"<p style='color:#ff0066'>SR - Kim Ngư Cơ </p>",
"<p style='color:#ff0066'>SR - Huân </p>",
"<p style='color:#ff0066'>SR - Dạ Xoa </p>",

"<p style='color:#ff0066'>SR - Dĩ Tân Chân Thiên </p>",
"<p style='color:#ff0066'>SR - Hạp Trung Thiếu Nữ </p>",
"<p style='color:#ff0066'>SR - Trậm </p>",
"<p style='color:#ff0066'>SR - Tiểu Tông Hoàn </p>",
"<p style='color:#ff0066'>SR - Khuyển Thần </p>",
"<p style='color:#ff0066'>SR - Thư Ông </p>",

"<p style='color:#ff0066'>SR - Huệ Tỷ Thọ </p>",
"<p style='color:#ff0066'>SR - Anh Hoa Yêu </p>",
"<p style='color:#ff0066'>SR - Bát Nhã </p>",
"<p style='color:#ff0066'>SR - Lạc Tân Phụ </p>",
"<p style='color:#ff0066'>SR - Thanh Phường Chủ </p>",
"<p style='color:#ff0066'>SR - Hấp Huyết Cơ </p>"
];


    var hinh1=["img/bvt.png", "img/cn.png", "img/dhy.png","img/dsss.png","img/hvt.png","img/tn.png","img/bdt.png","img/hdtu.png","img/tnt.png",
"img/mcq.png",
"img/mb.png",
"img/yyl.png",
"img/kls.png",
"img/hpc.png",
"img/bmq.png",
"img/dich.png",
"img/kc.png",
"img/tc.png",
"img/ld.png",
"img/chd.png",
"img/nhik.png",
"img/bl.png",
"img/tmm.png",
"img/hph.png",
"img/pq.png",


"img/youko.png",
"img/ycs.png",
"img/knc.png",
"img/h.png",
"img/dx.png",
"img/dtct.png",
"img/httn.png",
"img/t.png","img/tth.png",
"img/kt.png",
"img/to.png",
"img/hue.png",
"img/sakura.png",
"img/bn.png",
"img/ltp.png",

"img/tpc.png",

"img/hhc.png"
 ];


    var R = ["<p style='color:blue'> R - Hà Đông</p>", "<p style='color:blue'> R - Ly Miêu </p>", "<p style='color:blue'> R - Tam Vĩ Hồ </p>",
    "<p style='color:blue'> R - Cửu Mệnh Miêu </p>",
"<p style='color:blue'> R - Đồng Nam</p>",

"<p style='color:blue'> R - Đồng Nữ</p>",

"<p style='color:blue'> R - Ngạ Quỷ</p>",

"<p style='color:blue'> R - Cổ Độc Sư</p>",

"<p style='color:blue'> R - Ô Nha Thiên Cẩu</p>",
"<p style='color:blue'> R - Thực Phát Quỷ</p>",
"<p style='color:blue'> R - Võ Sĩ Chi Linh</p>",
"<p style='color:blue'> R - Tọa Phu Đồng Tử</p>",
"<p style='color:blue'> R - Khiêu Khiêu Muội</p>",
"<p style='color:blue'> R - Binh Dũng</p>",
"<p style='color:blue'> R - Xú Thời Chi Nữ</p>",

"<p style='color:blue'> R - Độc Nhãn Tiểu Tăng</p>",
"<p style='color:blue'> R - Thiết Thử</p>",
"<p style='color:blue'> R - Tiêu Đồ</p>",
"<p style='color:blue'> R - Quản Hồ</p>",
"<p style='color:blue'> R - Sơn Thố</p>",
"<p style='color:blue'> R - Khiêu Khiêu Đệ</p>",
"<p style='color:blue'> R - Vũ Nữ </p>",
"<p style='color:blue'> R - Huỳnh Thảo</p>",
"<p style='color:blue'> R - Sơn Đồng</p>",
"<p style='color:blue'> R - Vô Thủ</p>",
"<p style='color:blue'> R - Hồ Điệp Tinh</p>",
"<p style='color:blue'> R - Giác</p>",
"<p style='color:blue'> R - Từ Khí Thanh Oa</p>",
"<p style='color:blue'> R - Cổ Lung Hoả</p>",
"<p style='color:blue'> R - Trùng Sư</p>"


    ];


    var hinh2=["img/hd.png", "img/lm.png", "img/tvh.png",
    
    "img/cmm.png",
"img/dnam.png",
"img/dnu.png",
"img/nq.png",
"img/cds.png",
"img/ntc.png",
"img/tpq1.png",
"img/vscl.png",
"img/tp.png",
"img/kkm.png",
"img/bd.png",
"img/xtcn.png",
"img/suchot.png",
"img/tt.png",
"img/td.png",
"img/qh.png",
"img/tieutho.png",
"img/kkd.png",
"img/vn.png",
"img/ht.png",
"img/sd.png",
"img/vt.png",
"img/hdt1.png",
"img/g.png",
"img/tkto.png",
"img/clh.png",
"img/ts.png"]; 
   


$("#card").flip({
  trigger: 'manual',speed:'150'
});

function as(){
  $("#card").flip(true);
}

function as1(){
  $("#card1").flip(true);
   $("#card2").flip(true);
    $("#card3").flip(true); 
     $("#card4").flip(true);
      $("#card5").flip(true);
       $("#card6").flip(true);
        $("#card7").flip(true);
         $("#card8").flip(true); $("#card9").flip(true);
          $("#card10").flip(true);
          
}

// function as2(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
  
// }

// function as3(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as4(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as5(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as6(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as7(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as8(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as9(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }

// function as10(){
//   $("#card1").flip(true);
//   $("#card2").flip(true);
//     $("#card3").flip(true); 
//      $("#card4").flip(true);
//       $("#card5").flip(true);
//       $("#card6").flip(true);
//         $("#card7").flip(true);
//          $("#card8").flip(true); $("#card9").flip(true);
//           $("#card10").flip(true);
          
// }


$("#card1").flip({
  trigger: 'manual', speed:'150'
});

$("#card2").flip({
  trigger: 'manual', speed:'250'
});

$("#card3").flip({
  trigger: 'manual', speed:'150'
});

$("#card4").flip({
  trigger: 'manual', speed:'250'
});

$("#card5").flip({
  trigger: 'manual', speed:'150'
});

$("#card6").flip({
  trigger: 'manual', speed:'150'
});

$("#card7").flip({
  trigger: 'manual', speed:'250'
});

$("#card8").flip({
  trigger: 'manual', speed:'150'
});

$("#card9").flip({
  trigger: 'manual', speed:'250'
});

$("#card10").flip({
  trigger: 'manual', speed:'150'
});
