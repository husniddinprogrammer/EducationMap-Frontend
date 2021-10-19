var baseUrl = "http://localhost:8080";

var http = {
    get: function(api, success, error){
        let ajax = new XMLHttpRequest();
        ajax.open("GET", baseUrl + api);
        this.setToken(ajax);
        ajax.onreadystatechange = function (){
           if(this.readyState == 4){
               if(200 <= this.status && this.status < 300){
                   success(this.response);
               } else{
                   error(this.response);
              
                   console.log("boshqa xatoli ro'y berdi")
               }
           }
        }
        ajax.send();

    },
    post: function(api, data, success, error){
        let ajax = new XMLHttpRequest()
        ajax.open("POST", baseUrl + api);
        this.setToken(ajax);
        ajax.onreadystatechange = function (){
            if(this.readyState == 4){
                if(200 <= this.status && this.status < 300){
                    success(this.response);
                } else{
                    error(this.response);
                }
            }
        }
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(data);
    },
    put: function(api, data, success, error){
        let ajax = new XMLHttpRequest()
        ajax.open("PUT", baseUrl + api);
        this.setToken(ajax);
        ajax.onreadystatechange = function (){
            if(this.readyState == 4){
                if(200 <= this.status && this.status < 300){
                    success(this.response);
                } else {
                    error(this.response);
                } 
            }
        }
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(data);
    },
    delete: function(api, success, error){
        let ajax = new XMLHttpRequest();
        ajax.open("DELETE", baseUrl + api);
        this.setToken(ajax);
        ajax.onreadystatechange = function (){
            if(this.readyState == 4){
                if(200 <= this.status && this.status < 300){
                    success(this.response);
                } else{
                    error(this.response);
                } 
            }
        }
        ajax.send();
    },
    setToken: function(ajax){
        const token = localStorage.getItem('token');
        if(token){
            ajax.setRequestHeader("Authorization", "Bearer " + token);
        }
    }
}
