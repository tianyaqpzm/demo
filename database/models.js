/**
 * Created by pei on 2017/6/1.
 */
module.exports = {
    user:{
        name:{type:String,required:true},
        password:{type:String,required:true},
        address:{type:String,required:true},
        admin:{type:Boolean}
    },
    document:{
        fileName:{type:String,require:true},
        contractAddress:{type:String,require:true},
        url:{type:String,require:true}
    }
};
