var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  var output = {};


  //calculating local sales & tax
  for (entry of salesData){
      //sales  var localsales = 0;
      var totalSales = entry.sales.reduce((total, currentNum) => total + currentNum);
      var totalTax = totalSales*taxRates[entry.province];
      console.log(output);
      if(!output[entry.name]){
        console.log("flag");
        output[entry.name] = {
          totalSales: totalSales,
          totalTax: totalTax
        };
      }
      else{
        output[entry.name].totalSales += totalSales;
        output[entry.name].totalTax += totalTax;
      }

      //tax

  }
  // putting company name into output object
    // output[entry.name] = {};

  console.log(output);

  //sorting data for the same company together

  // for (entry in output){
  //   for (i = 0; i < salesData.length; i++){
  //     if (salesData[i].name === entry){
  //       // console.log(entry.name);
  //       entry.totalSales = totalsales[i];
  //     }
  //   }
  // }




  // console.log(totaltax);
  // console.log(totalsales);
  // return(output);


}

 var results = calculateSalesTax(companySalesData, salesTaxRates);
  // console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/