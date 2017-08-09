$.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(results) {
            console.log(results[0].content);
            var quote = results[0].content;
            // alert(res);
            $(".quote").append(quote);

 } });