//var express = require('express');
//var router = express.Router();
//var fs = require('fs');
//
//var en = require('./locales/en');
//var fr = require('./locales/fr');
//var no = require('./locales/no');
//
//
//// Thank you pages
//router.get('/thank-you', function(req, res, next) {
//  var score = (req.query.score === undefined) ? -1 : parseInt(req.query.score);
//  var responseJson;
//  if (score === -1) {
//    res.render('error', {
//      title: 'FlapperHotNews'
//    });
//  }
//  else if (score >= 75) {
//    responseJson = en.thankYou.success;
//  }
//  else if (score >= 30 && score < 75) {
//    responseJson = en.thankYou.average;
//  }
//  else if (score < 30) {
//    responseJson = en.thankYou.fail;
//  }
//
//  res.render('_thank_you', {
//    title: 'FlapperHotNews',
//    translation: responseJson,
//    headerTranslation: en.header,
//    footerTranslation: en.footer
//  });
//});
//
//router.get('/fr/thank-you', function(req, res, next) {
//  var score = (req.query.score === undefined) ? -1 : parseInt(req.query.score);
//  var responseJson;
//  if (score === -1) {
//    res.render('error', {
//      title: 'FlapperHotNews'
//    });
//  }
//  else if (score >= 75) {
//    responseJson = fr.thankYou.success;
//  }
//  else if (score >= 30 && score < 75) {
//    responseJson = fr.thankYou.average;
//  }
//  else if (score < 30) {
//    responseJson = fr.thankYou.fail;
//  }
//  res.render('_thank_you', {
//    title: 'FlapperHotNews',
//    translation: responseJson ,
//    headerTranslation: fr.header,
//    footerTranslation: fr.footer
//  });
//});
//
//
//router.get('/thank-you/investment-managers', function(req, res, next) {
//  res.render('_thank_you', {
//    title: 'FlapperHotNews',
//    translation: en.thankYou.investmentManagers,
//    headerTranslation: en.header,
//    footerTranslation: en.footer
//  });
//});
//
//router.get('/uk/thank-you/investment-managers', function(req, res, next) {
//  res.render('_thank_you', {
//    title: 'FlapperHotNews',
//    translation: en.thankYou.investmentManagers,
//    headerTranslation: en.header,
//    footerTranslation: en.footer
//  });
//});
//
//
//router.get('/fr/thank-you/investment-managers', function(req, res, next) {
//  res.render('_thank_you', {
//    title: 'FlapperHotNews',
//    translation: fr.thankYou.investmentManagers,
//    headerTranslation: fr.header,
//    footerTranslation: fr.footer
//  });
//});
//
//module.exports = router;
