export async function postBD(data,url){
 try{
    const response = await fetch(url,{
        method:'POST',
        headers:{ "Content-Type": "application/x-www-form-urlencoded" },
        body:JSON.stringify(data)
    })

 }catch(error){
    console.log(error)
 }
}