
/*
 * GET home page.
 */
//dependency library
var fs = require('fs');

//store data
var mogodb = {};

exports.index = function(req, res){
  res.render('index', { title: 'webcam' });
};
exports.shop = function(req, res){
  res.render('index', { title: 'webcam' });
};
exports.upload = function(req, res){
	  var base64Data,dataBuffer,imgData,i=0;

    mogodb.img = {};
    //接收前台POST过来的base64
    mogodb.img[req.body.name] = req.body.data;
    imgData = req.body.data;

    //过滤data:URL,因为前端toDataURL的格式data:image/png;base64,xxxxx ，真正的图像数据是在后面xxxx部分
    base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    dataBuffer = new Buffer(base64Data, 'base64');

    fs.writeFile('./public/uploads/'+ req.body.name+".png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send(req.body.name+' -- upload success !');
        }
    });
};
exports.userInfo = function(req,res) {
    var info = {};
    info.age = req.body.age; //get form data from client
    info.sex = req.body.sex; 
    info.weight = req.body.weight; 
    info.height = req.body.height; 
    info.email = req.body.email; 
    info.password = req.body.password; 

    mogodb.info = info;

    console.log(info);
    console.log(req.query);
    res.end();
};