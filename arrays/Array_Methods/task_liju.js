var products=[
    [1000,"wheatpowder",45,15,0],//id,name,unit price,stock,offer price
    [1001,"ricepowder",30,10,0],
    [1002,"goodday",40,50,0],
    [1003,"oreo",40,0,0],
    [1004,"fiftyfifty",20,20,5],
    [1005,"darkfantasy",50,0,0],

]

// 1)print number of items in this shop

var total_product_id=products.map(id=>id[0]).length;
console.log("No of items in the shop = "+total_product_id);



//2) print names of items available in this shop
var avail_items=products.filter(avail=>avail[3]!=0).map(id=>id[1]);
console.log("Available items: "+avail_items);



//3) print names of out of stock product
var out_of_stck=products.filter(stck=>stck[3]==0).map(name=>name[1]);
console.log("Out of stock products= "+out_of_stck);



// 4)print names of product in 30 -50 range
var prod_pr_gt30_ls50=products.filter(id=>id[2]>=30 & id[2]<=50).map(name=>name[1]);
console.log("products price range 30-50 = "+prod_pr_gt30_ls50);


