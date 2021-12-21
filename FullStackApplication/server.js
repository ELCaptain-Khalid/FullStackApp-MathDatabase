
/* Khalid Munassar
    
      Full Stack App - Final Project
      server.js
     This is our express server app running on the web server.
 * 
 */

 
var express = require("express");
var app = express();

// Serve static files from the directory named public
app.use(express.static("public"));

// The mysql object allows one to talk to a running
// instance of a MySQL server. 
var mysql = require("mysql");

// Registers an endpoint named 'Math' that will serve and ge the site started when serving the data from the site
//This also logs me in 
app.get( "/Math", myDatabase);

function myDatabase( req, res) {
    console.log( "myDatabase got a call");
    // The connection object allows one to connect to
    // the given MySQL server (in this case on localhost)
   //Logs me in to the sql server
    var conn = mysql.createConnection( {
	    host: "localhost",
	    user: "munassak",
	    password: "$395Kh523",
	    database: "Munassar_Final"
    }
    );

 // Calling the connect function causes the connection
// object to actually connect
// with the credentials specified.
conn.connect( function( err) {
        if( err) {
    
        log("Error connecting: ", err);
        }
        else {
            console.log("Connection established");
        }});
  var sql ="select Name from MathPeople" ; // Here is the sql query that we want to run.
        
// this function is to be run when the query returns a result when fetching the data from the database
function mathyMath(err,rows) {
    console.log("My Database test got a call");
    if( err) {  
        // send back an error code in result
    }
    else {
        res.send( JSON.stringify( rows));
    }      
}

    // this statement actually runs the query on mysql.
    conn.query( sql, mathyMath);

    // this statement will close the connection.
    conn.end();

}

/* ======================================================== */
/* ******************************************************** */
/* ======================================================== */
app.get("/problem", MathProblems);
function MathProblems( req, res) {
    // Grab the parameter to this query, the math problem I want to be displayed.
    let requestedFood = req.query.problem;
    // Create and connect a connection to the MySQL server.
    var conn = mysql.createConnection( {
	    host: "localhost",
	    user: "munassak",
	    password: "$395Kh523",
	    database: "Munassar_Final"
    });

    conn.connect( function( err) {
        if( err) {
            
        }
        else {
            
        }});
        
    // Here is the sql query that we want to run.
    var sql = "select * from MathProblems where Scope = \"" + requestedFood + "\"";
    // Run the query on mysql.
    conn.query( sql, function (err,rows) {
            
            if( err) {  
                // send back an error code in result
            }
            else {
                // Send back the rows (an array of row objects) as a JSON string
                res.send( JSON.stringify( rows));
            }      
        }
    );
    // Close the connection.
    conn.end();
}
// Now that the server is set up, it is started on the
// specified port number, in this case on port 3200
app.listen(3200);
     
console.log("server called on port number 3200");