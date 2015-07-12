/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */
   
   'getSheriffSales': function(){
        var saleData = Scrape.website("http://www4.co.hennepin.mn.us/webforeclosure/resultbyname.asp");
        console.log(saleData);
    }
});
