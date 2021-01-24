// https://jsonformatter.curiousconcept.com/
// https://jsonformatter.curiousconcept.com/

var api = "https://api.cryptonator.com/api/ticker/btc-usd";

var data =
  '{"ticker":{"base":"BTC","target":"USD","price":"32664.45051477","volume":"30039.76806856","change":"46.27930007"},"timestamp":1611482102,"success":true,"error":""}';

const object = JSON.parse(data);
