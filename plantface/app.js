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
  getJSON('https://plantbase-8314d-default-rtdb.firebaseio.com/PLANT1.json',
  function(err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      //console.log(data.baFh1fmEmzfq7mIygeerTUXh8Um2);

      var tm = "Temperature: " + data.baFh1fmEmzfq7mIygeerTUXh8Um2.temp + " C";
      var val = data.baFh1fmEmzfq7mIygeerTUXh8Um2.temp;
      //url with value
      src = 'http://6112dd87ce59.ngrok.io/' + val;
      img = document.createElement('img');
      img.src = src;
      document.body.appendChild(img);

    }
  });
};

var start = function(){
  setInterval(run,60000);
};

start()
