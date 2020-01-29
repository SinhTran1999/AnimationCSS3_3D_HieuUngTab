 $(function(){
 	//click vao nut .bonnut li nao thi nut do thuc hien len

 	$('.bonnut li').click(function(){
 		// Ban dau no xoa het cac class la active
 		$('.bonnut li').removeClass('active');
 		// roi them class active vao de nhan cai nao thi cac do hien ra
 		$(this).addClass('active');

 		// Hien vi tri cua phan tu khi nhan vao roi gan cho x
 		x=$(this).index();
 		// Vi trong mang thi phan tu dau tien co gia tri 0
 		x=x+1;
 		// Ban dau no cung xoa het cac classs hienlen khi bi click
 		$(".bonnd ul li").removeClass("hienlen");
 		// .bonnd ul li:nth-child("+x+") la chi dinh vi tri x de them class vao li
 		// vi trong nth-child(number) nen muon them x ta phai noi ("+x+")
 		$(".bonnd ul li:nth-child("+x+") ").addClass("hienlen");
 	})
 }) 
 