class Pipeline2 {
    pipeLineTwo(path1,path2,spawn){
        return new Promise(function(resolve) {
            const childPython = spawn('python',
                ["./python/pipline2.py"
                    , `./DataBasesImages/TransactionType2/${path1}.jpg`
                    , `./DataBasesImages/TransactionType2/${path2}.jpg`]);

            childPython.stdout.on('data',(data)=>{
                let result = data.toString()
                result = JSON.parse(result)
                resolve(result)
            });
        })
    }
}
module.exports = {
    Pipeline2
}