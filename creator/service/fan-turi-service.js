let fanTuriApi = "/api/fan-turi";
var fanTuriService = {
    getAll: function (success, error) {
        return http.get(fanTuriApi+"/", success, error);
    },
    getAllSelected: function (success, error) {
        return http.get(fanTuriApi+"/selected", success, error);
    },
    getById: function (id, success, error) {
        return http.get(fanTuriApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(fanTuriApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(fanTuriApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(fanTuriApi+"/status/"+id, success, error);
    }, 
}