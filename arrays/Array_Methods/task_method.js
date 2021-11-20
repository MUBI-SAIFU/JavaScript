var products=[
    ["001","complan",275,50],   ////id,nameunit price,stock
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names
var product_name=products.map(names=>names[1]);
console.log(product_name);

// print avaialable product name
var available=products.filter(stocks=>stocks[3]!=0).map(prd_name=>prd_name[1]);
console.log(available);

// print out of stock product details
var stock_out=products.filter(stock=>stock[3]==0).map(prd=>prd)
console.log(stock_out);


// list all products whose price > 250
var price_gt_250=products.filter(price=>price[2]>250).map(prdname=>prdname[1])
console.log(price_gt_250);


// is there any item available under 200
var price_lt_200=products.filter(lowprice=>lowprice[2]<200).map(name=>name[1]);
console.log(price_lt_200);


//lowest available stock
var lowest_stock=products.reduce((stock1,stock2)=>stock1[3]<stock2[3]?stock1[3]:stock2[3])
console.log(lowest_stock);