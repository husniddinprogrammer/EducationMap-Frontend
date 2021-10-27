let haftaTuriApi = "/api/hafta-tartibi-tur";
var haftaTuriService = {
    getAll: function (success, error) {
        return http.get(haftaTuriApi+"/", success, error);
    },
    getAllSelected: function (success, error) {
        return http.get(haftaTuriApi+"/selected", success, error);
    },
    getById: function (id, success, error) {
        return http.get(haftaTuriApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(haftaTuriApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(haftaTuriApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(haftaTuriApi+"/status/"+id, success, error);
    }, 
}