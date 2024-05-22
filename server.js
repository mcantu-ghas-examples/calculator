var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// Middleware to check for premium subscription status
app.use('/help-support', function(req, res, next) {
  // Dummy check for premium subscription status
  const isPremiumUser = req.query.premium;
  if (!isPremiumUser) {
    return res.status(403).send('Access Denied: Premium Subscription Required');
  }
  next();
});

// Route to serve help desk support page or feature
app.get('/help-support', function(req, res) {
  // Dummy implementation for language preference
  const language = req.query.lang;
  if (language === 'es') {
    res.send('Página de soporte del servicio de ayuda');
  } else {
    res.send('Help Desk Support Page');
  }
});

app.use(express.static('public'));

var routes = require("./api/routes");
routes(app);

if (! module.parent) {
  app.listen(port);
}

module.exports = app

console.log("Server running on port " + port);
