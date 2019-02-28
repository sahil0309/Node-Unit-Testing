module.exports.save=(userName,callback)=>{
    return new Promise((resolve,reject)=>{
            if(!userName){
                reject('Failed');
            }
            resolve('Success')
    })
}