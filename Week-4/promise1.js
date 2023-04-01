
    let pro = new Promise(
        function(resolve, reject){
        
    let getNumber=Math.floor(Math.random() * 10000)

    console.log(getNumber)      

     if(getNumber/5) {
         resolve("Number is divisible by 5")
     }
     else 
         reject("Number is not divisible by 5")
    

    })
    console.log(pro)
    
    pro.then(function(data){
          console.log(data)
      })
