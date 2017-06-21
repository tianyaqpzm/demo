/**
 * Created by pei on 2017/6/1.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require("./models");

// 模型是从我们的Schema定义编译的花式构造函数。
// 这些模型的实例表示可以从我们的数据库中保存和检索的文档。
// 数据库的所有文档创建和检索都由这些模型来处理。

for(var m in models){
    mongoose.model(m,new Schema(models[m]));
}

module.exports = {
    getModel: function(type){
        return _getModel(type);
    },

    getAddress: function (type) {
        return _getAddress(type);
    }
};

var _getModel = function(type){
    return mongoose.model(type);
};
var _getAddress = function (type) {
    return mongoose.model(type);
};