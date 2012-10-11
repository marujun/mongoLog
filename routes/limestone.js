//     https://github.com/kurokikaze/limestone.git

var limestone = require("limestone").SphinxClient(),
    sys = require("sys");

limestone.connect(9312, // port. 9312 is standard Sphinx port. also 'host:port' allowed
    function(err) { // callback
        if (err) {
            sys.puts('Connection error: ' + err);
        }
        sys.puts('Connected, sending query');
        limestone.query(
            {'query':'Bonus', maxmatches:1},
            function(err, answer) {
                limestone.disconnect();
                console.log(answer);
                sys.puts("Extended search for 'test' yielded " +
                    answer.match_count + " results: " +
                    JSON.stringify(answer));
            }
        );
    }
);

