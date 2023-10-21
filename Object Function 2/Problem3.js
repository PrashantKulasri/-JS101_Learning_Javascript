// Write a function called calculateSalesTotals()
// which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.

var Sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  
  var obj = {
  
    sales : Sales,
    caulculateSalesTotals : function(){
      var arr = [];
  
        for(var a=0;a<this.sales.length;a++){
          var obj = {};
          if(this.sales[a].discount === undefined){
            obj.item = this.sales[a].item,
            obj.original = this.sales[a].original,
            obj.sale = this.sales[a].original,
            obj.stock = this.sales[a].stock,
            obj.total = this.sales[a].stock*this.sales[a].original,
  
              arr.push(obj);
          }
          else{
            obj.discount = this.sales[a].discount,
            obj.item = this.sales[a].item,
            obj.original = this.sales[a].original,
            obj.sale = this.sales[a].original-(this.sales[a].original*this.sales[a].discount),
            obj.stock = this.sales[a].stock,
            obj.total = this.sales[a].stock*this.sales[a].original,
  
              arr.push(obj);
          }
        }
      console.log(arr);
    }
  }
  
  obj.caulculateSalesTotals();