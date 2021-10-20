let reklamaTuriApi = "/api/reklama-turi";
var reklamaTuriService = {
    getAll: function (success, error) {
        return http.get(reklamaTuriApi+"/", success, error);
    },
    getById: function (id, success, error) {
        return http.get(reklamaTuriApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(reklamaTuriApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(reklamaTuriApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(reklamaTuriApi+"/status/"+id, success, error);
    }, 
}