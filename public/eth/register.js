/**
 * Created by pei on 2017/6/6.
 */

// import {default as Web3} from 'web3';
// var HookedWeb3Provider = require("hooked-web3-provider");

$("#register1").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var password1 = $("#password1").val();
    if(password !== password1){
        $("#password").css("border","1px solid red");
        $("#password1").css("border","1px solid red");
    }else if(password === password1){
        Register.start();
        var data = {"uname":username,"upwd":password};
        $.ajax({
            url: '/register',
            type: 'post',
            data: data,
            success: function(data,status){
                if(status == 'success'){
                    location.href = 'login';
                }
            },
            error: function(data,err){
                location.href = 'register';
            }
        });
    }
});

window.Register = {
    start: function () {
        var self = this;
//      方式2
//         var provider = new HookedWeb3Provider({
//             host: "http://localhost:8545",
//             transaction_signer: accounts
//         });
//         web3.setProvider(provider);
//         var Accounts = require('ethereumjs-accounts');
//         var accounts = new Accounts({minPassphraseLength: 6}); // or new Accounts(..) if using dist.
//         var password = parseInt(document.getElementById("password").value);
// // Generate a new account encrypted with a passphrase
//         var accountObject = accounts.new(password);
//         alert(accountObject);
        // console(web3.currentProvider);
        // 方式一  失败
        // // 创建新账户
        // // 获取 用户密码
        // var password = parseInt(document.getElementById("password").value);
        // var newAccount = web3_ipc.personal.newAccount(password, function (error,result) {
        //     if(error){
        //         alert("账户创建失败");
        //     }else{
        //         alert(result);
        //     }
        // })
        // console(newAccount);
    }

}
//
// window.addEventListener('load',function () {
//     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//     if (typeof web3 !== 'undefined') {
//         console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
//         // Use Mist/MetaMask's provider
//         window.web3 = new Web3(web3.currentProvider);
//     } else {
//         console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
//         // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//         window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//
//         // var client = new net.;
//         // window.web3_ipc = new Web3(new Web3.providers.IpcProvider("/Users/pei/program/DApp/chain/geth.ipc",client));
//         // web3 = new Web3(new Web3.providers.IpcProvider('./geth.ipc',client));
//     }
// })