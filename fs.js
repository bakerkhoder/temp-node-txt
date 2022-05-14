//sync method
//const {readFileSync,writeFileSync}=require('fs')
//const txt=readFileSync('./text.txt','ascii')
//writeFileSync('write.txt',`${txt}`,{flag:'a'})
//the object flag and the a is using to append the text (rewrite it)


//async 
const {readFile,writeFile}=require('fs')
const txt=readFile('./text.txt','ascii',(err,data)=>{
    if(err){
        console.log(error)
        return
    }
   // console.log(data)
})
writeFile('./write.txt','lets try',(err,data)=>{
    if(err)
{
    console.log(error)
    return
}
console.log('mission done')


})