let oquvMarkazApi = "/api/oquv-markaz";
var oquvMarkazService = {
    getAll: function (success, error) {
        return http.get(oquvMarkazApi+"/", success, error);
    },
    getAllSelected: function (success, error) {
        return http.get(oquvMarkazApi+"/selected", success, error);
    },
    getById: function (id, success, error) {
        return http.get(oquvMarkazApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(oquvMarkazApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(oquvMarkazApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(oquvMarkazApi+"/status/"+id, success, error);
    }, 
    getQidirishNomi: function (nomi,success, error) {
        return http.get(oquvMarkazApi+"/qidirish-nomi/"+nomi, success, error);
    }, 
    getQidirishViloyat: function (viloyat,success, error) {
        return http.get(oquvMarkazApi+"/qidirish-viloyat/"+viloyat, success, error);
    }, 
    getSana: function (sana1,sana2,success, error) {
        return http.get(oquvMarkazApi+"/qidirish-sana/"+sana1+"/"+sana2, success, error);
    }, 
    getSanaViloyat: function (sana1,sana2,viloyat,success, error) {
        return http.get(oquvMarkazApi+"/qidirish-sana-viloyat/"+sana1+"/"+sana2+"/"+viloyat, success, error);
    }, 
}