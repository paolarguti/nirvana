var results = new Vue({
  el: '#results',
  data: {
    results: {},
    activeYear: {},
    activeDay: {},
    loading: true
  },

  computed: {},

  watch: {
    activeYear: function(year) {
      this.activeDay = year[Object.keys(year).pop()];
    }
  },

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
        var yearKey = data[i].year;
        if(!resultsObject[yearKey]) {
          resultsObject[yearKey] = {}
        }
      }
      for (var i = 0; i < data.length; i++) {
        var year = data[i].year;
        var day = data[i].day;
        if(!resultsObject[year][day]) {
          resultsObject[year][day] = []
        }
        resultsObject[year][day].push(data[i]);
      }

      console.log(resultsObject);

      self.loading = false;
      self.results = resultsObject;

      var yearsCount = Object.keys(self.results).pop();
      self.activeYear = self.results[yearsCount];
    }
  },

  mounted: function() {},
});
