const server = require('./server');

new server.WWWHandler("/siel/", false, "./www/siel/");
server.start("localhost", 8100, false);
