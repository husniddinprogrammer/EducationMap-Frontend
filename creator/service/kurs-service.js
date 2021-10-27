let kursApi = "/api/kurs";
var kursService = {
    getAll: function (success, error) {
        return http.get(kursApi+"/", success, error);
    },
    getAllSelected: function (success, error) {
        return http.get(kursApi+"/selected", success, error);
    },
    getAllFilter: function (sana1,sana2,oquvMarkazId,oqituvchiId,fanId,success, error) {
        return http.get(kursApi+"/filter/"+sana1+"/"+sana2+"/"+oquvMarkazId+"/"+oqituvchiId+"/"+fanId, success, error);
    },
    getAllQidirish: function (nomi,success, error) {
        return http.get(kursApi+"/qidirish/"+nomi, success, error);
    },
    getById: function (id, success, error) {
        return http.get(kursApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(kursApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(kursApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(kursApi+"/status/"+id, success, error);
    }, 
}