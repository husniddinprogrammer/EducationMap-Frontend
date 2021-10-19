let userApi = "/api/";
var userService = {
    getAll: function (success, error) {
        return http.get(userApi+"user/", success, error);
    },
    getSana: function (sana,success, error) {
        return http.get(userApi+"user/sana/"+sana, success, error);
    },
    getQidirish: function (username,success, error) {
        return http.get(userApi+"user/qidirish/"+username, success, error);
    },
    getById: function (id, success, error) {
        return http.get(userApi +"user/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(userApi+"account/register", data, success, error);
    },
    update: function (data,id, success, error){
        return    http.put(userApi +"user/"+id, data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(userApi+"user/status/"+id, success, error);
    }, 
}