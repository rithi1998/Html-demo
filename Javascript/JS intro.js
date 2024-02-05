window.localStoragewithExpiry={
    setItem: function(key,value,expiryTIme){
        let result={
            value,
            expiryTime: Date.now()+expiryTime
        };
        localStorage.setItem(key,JSON.stringify(result));
    },
    getItem: function(key){
        let data=localStorage.getItem(key);
        data=JSON.parse(data);

        if(data.expiryTIme <= Date.now()){
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    },
    removeItem: function(key){
        localStorage.removeItem(key);
    },
    clear: function(){
        localStorage.clear();
    }


}

localStoragewithExpiry.setItem("abc","pqr","1000");
setTimeout(()=>{
    console.log(localStoragewithExpiry.getItem("abc"));
},1500)