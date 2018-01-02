var results = new Vue({
      el: '#results',
      data: {
        results: {},
        activeDay: {},
        loading: true
      },

      computed: {},

      methods: {},

      created: function() {
        var self = this;
        var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/11mrRGlu44WtLR3zZd4hQS8ue06jVhtmJNEAHEOWBb9c/edit?usp=sharing';

        Tabletop.init( { key: publicSpreadsheetUrl,
                       callback: showInfo,
                       simpleSheet: true } )

        function showInfo(data, tabletop) {
          var resultsObject = {};

          for (var i = 0; i < data.length; i++) {
            var key = data[i].day;
            console.log(key);
            if(!resultsObject[key]) {
              resultsObject[key] = []
            }
            resultsObject[key].push(data[i]);
          }
          console.log(resultsObject);

          self.loading = false;
          self.results = resultsObject;

          var daysCount = Object.keys(self.results).length;
          self.activeDay = self.results[daysCount];
        }
      },

      mounted: function() {},
});
