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
     
     var requestWithAgent = request.defaults({
    headers: { "User-Agent": "Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0" }
});
        
          try {
    var res = requestWithAgent.postSync("http://www4.co.hennepin.mn.us/webforeclosure/resultbyname.asp");
    if (res.response.statusCode == 200) {
        console.log(res.body);
        var $ = cheerio.load(res.body);
        console.log($);
        var table = $('td table');
        console.log(table);
        console.log(table['1']);
    }
} catch (error) {
    // See below for info on errors
    console.error(error);
}
    }
});
