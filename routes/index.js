var express = require('express');
var router = express.Router();
var parametro;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Basejump: Timestamp microservice' });
});

router.get(/(([aA-zZ]+)(%20)(\d)+(,)(%20)(\d)+)/, function(req, res, next) {
     var fecha = req.params[0];
     var mes;
     var dia;
     var anio;
     var nvafecha = fecha.split(' ');
     mes = nvafecha[0];
     dia = nvafecha[1].substr(0,nvafecha[1].length -1);
     anio = nvafecha[2];
     var newDate = mes+'/'+dia+'/'+anio;
     res.json({"unix" : new Date(newDate).getTime(), "natural" : fecha});
});

router.get(/([0-9]+)/, function(req, res, next) {
 res.json({"unix" : req.params[0], "natural" : validaFecha(req.params[0])});
 });
 
 router.get(/(.)/, function(req, res, next) {
 res.json({"unix" : null, "natural" : null});
 });
 
function validaFecha(fecha){
    
    
    var valor = parseInt(fecha);
        //valor = valor * 1000;
    if(isNaN(valor)){
        console.log('No es número');
    }
    console.log(valor);

// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(valor);
// Hours part from the timestamp
var year = date.getFullYear();
var month = date.getMonth();
    console.log(month);
    var monthName = getMonthName(month);
var day = date.getDay();
console.log(year, month, day);


// Will display time in 10:30:23 format
var formattedTime = monthName + ' ' + day+ ', '+year;

console.log(formattedTime);
return formattedTime;
}

function getMonthName(noMes){
    var mes;
  switch (noMes){
         case 0:
             mes = 'Enero';
             break;
         case 1:
             mes = 'Febrero';
             break;
         case 2:
             mes = 'Marzo';
             break;
         case 3:
             mes = 'Abril';
             break;
         case 4:
             mes = 'Mayo';
             break;
         case 5:
             mes = 'Junio';
             break;
         case 6:
             mes = 'Julio';
             break;
         case 7:
             mes = 'Agosto';
             break;
         case 8:
             mes = 'Septiembre';
             break;
         case 9:
             mes = 'Octubre';
             break;
         case 10:
             mes = 'Noviembre';
             break;
         case 11:
             mes = 'Diciembre';
             break;

     }
     return mes;
}
module.exports = router;
