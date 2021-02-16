var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

var run = function(){
  getJSON('https://plantbase-8314d-default-rtdb.firebaseio.com/PLANT2.json',
  function(err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      //console.log(data.baFh1fmEmzfq7mIygeerTUXh8Um2);
      var temp = document.getElementById("temp");
      var hum = document.getElementById("hum");
      var soil = document.getElementById("soil");
      var salt = document.getElementById("salt");
      var time = document.getElementById("time");
      var lux = document.getElementById("lux");

      var tm = "Temperature: " + data.baFh1fmEmzfq7mIygeerTUXh8Um2.temp + " C";
      temp.innerHTML =(tm);
      var hm = "Hummidity: "  + data.baFh1fmEmzfq7mIygeerTUXh8Um2.hum + "%";
      hum.innerHTML =(hm);
      var sl = "Soil: "  + data.baFh1fmEmzfq7mIygeerTUXh8Um2.soil + "%";
      soil.innerHTML =(sl);
      var slt = "Salt: "  + data.baFh1fmEmzfq7mIygeerTUXh8Um2.salt;
      salt.innerHTML =(slt);
      var tt = "Time: "  + data.baFh1fmEmzfq7mIygeerTUXh8Um2.int;
      time.innerHTML =(tt);
      var lx = "Lux: "  + data.baFh1fmEmzfq7mIygeerTUXh8Um2.lux;
      lux.innerHTML =(lx);
    }
  });
};

var start = function(){
  setInterval(run,1000);
};

start()
