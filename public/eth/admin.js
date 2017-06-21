/**
 * Created by pei on 2017/6/15.
 */
var Web3 = require("web3")



$('#listVote').click(function () {
    // 得到admin 的address
    // 管理员用   address 登陆
    // 默认 "0xfd9dd2937283c322b25b9de6005834c9c2ba8106"  eth.account[1]
    // 管理员 刷新 出 最新的  合约地址，去投票
    // 用户 像管理员 发送 合约账户的地址。
    var addr1 = "0xfd9dd2937283c322b25b9de6005834c9c2ba8106";
    var array = new Array();
    var str = getMessage(addr1);
    array = str.split(",")
    for(i=0;i<array.length;i++){
        addOneRecord(i,array[i]);
    }
});

window.admin = {
    refresh:function () {
        
    }
};


window.addEventListener('load',function () {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
});