var express = require('express');
var _router = express.Router();

var xlsxtojson = require("xlsx-to-json-lc");

// => localhost:3000/xlfile/getdata

_router.get('/getdata', function(req,res){
    var exceltojson;
    exceltojson = xlsxtojson
            try {
            exceltojson({
                input: './uploads/book2.xlsx',
                output: null,
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    return res.status(501).json({error:err});
                } 
                console.log(result)
                res.json(result);
            });
        } catch (e){
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
});

module.exports = _router;