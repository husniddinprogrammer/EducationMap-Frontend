let faolTuriApi = "/api/faol-tur";
var faolTuriService = {
    getAll: function (success, error) {
        return http.get(faolTuriApi+"/", success, error);
    },
    getById: function (id, success, error) {
        return http.get(faolTuriApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(faolTuriApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(faolTuriApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(faolTuriApi+"/status/"+id, success, error);
    }, 
}