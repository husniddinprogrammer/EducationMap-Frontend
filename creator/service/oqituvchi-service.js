let oqituvchiApi = "/api/oqituvchi";
var oqituvchiService = {
    getAll: function (success, error) {
        return http.get(oqituvchiApi+"/", success, error);
    },
    getAllQidiruvIsm: function (ism,success, error) {
        return http.get(oqituvchiApi+"/qidiruv-ism/"+ism, success, error);
    },
    getAllQidiruvSana: function (sana1,sana2,success, error) {
        return http.get(oqituvchiApi+"/qidiruv-sana/"+sana1+"/"+sana2, success, error);
    },
    getAllQidiruvFan: function (fanId,success, error) {
        return http.get(oqituvchiApi+"/qidiruv-fan/"+fanId, success, error);
    },
    getAllQidiruvSanaFan: function (sana1,sana2,fanId,success, error) {
        return http.get(oqituvchiApi+"/qidiruv-sana-fan/"+sana1+"/"+sana2+"/"+fanId, success, error);
    },
    getAllSelected: function (success, error) {
        return http.get(oqituvchiApi+"/selected", success, error);
    },
    getById: function (id, success, error) {
        return http.get(oqituvchiApi +"/"+id, success, error);
    },
    create: function (data, success, error){
        return    http.post(oqituvchiApi+"/", data, success, error);
    },
    update: function (data,success, error){
        return    http.put(oqituvchiApi +"/", data, success, error);
    },
    getStatus: function (id,success, error) {
        return http.get(oqituvchiApi+"/status/"+id, success, error);
    }, 
}