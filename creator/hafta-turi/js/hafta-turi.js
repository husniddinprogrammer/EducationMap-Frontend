let tbody = document.getElementById("tbody");
let txt = "";
let i;
var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
    info();
    haftaTuriService.getAll(printpost, console.log("xato"));
}
/**
 * Yuklash tugadi
 */
/**
 * Jadval boshlandi
 */
function printpost(res) {
    let elements = JSON.parse(res);
    elements.forEach(element => {
        i = element.id;
        let faol;
        if (element.status == 1) {
            faol = "O'chirish";
        } else {
            faol = "Yoqish";
        }
        txt += `
              <tr>
                        <td>${element.nomi}</td>
                        <td>${element.kunlar}</td>
                        <td>${element.status}</td>
                       <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateHaftaTuriModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
                       <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
                   </tr>`;
    });
    tbody.innerHTML = txt;
}
/**
Hafta turi qushish boshlandi
*/
function haftaTuriQushish() {
    let form = document.forms['createHaftaTuriForm'];
    let check = {}
    check.nomi = form["nomi"].value;
    check.kunlar = form["kunlar"].value;
    haftaTuriService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Hafta turi qushish tugadi
*/
/**
 * Hafta turi o'zgartirish boshlandi
 */
function haftaTuriUpdate(id) {
    let form = document.forms['updateHaftaTuriForm'];
    let check = {}
    check.id = id;
    check.nomi = form["nomiUpdate"].value;
    check.kunlar = form["kunlarUpdate"].value;
    haftaTuriService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Hafta turi o'zgartirish tugadi
*/
/**
 * Hafta turi haqida boshlandi
 */
function poliyaId(id) {
    haftaTuriService.getById(id, malumotQuy, console.log("xato"));
}

function malumotQuy(success) {
    let malumot = JSON.parse(success);
    let form = document.forms['updateHaftaTuriForm'];
    let check = {}
    document.getElementById("buttonHaftaTuriUpdate").innerHTML = `
  <button type="button" id="haftaTuriUpdate" disabled class="btn btn-primary" onclick="haftaTuriUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
    form["nomiUpdate"].value = malumot.nomi;
    form["kunlarUpdate"].value = malumot.kunlar;
}
/**
 * Hafta turi haqida tugadi
 */
/**
 * Hafta turi qo'shish yozganda boshlandi
 */
function haftaTuriYozish() {
    let nomi = document.forms['createHaftaTuriForm']['nomi'].value;
    let kunlar = document.forms['createHaftaTuriForm']['kunlar'].value;
    let tugma = document.getElementById('haftaTuriQushish');
    if (nomi == "" || kunlar == "") {
        tugma.disabled = true;
    } else {
        tugma.disabled = false;
    }
}
/**
 * Hafta turi qo'shish yozganda tugadi
 */
/**
 * Hafta turi o'zgartirish yozganda boshlandi
 */
function haftaTuriYozishUpdate() {
    let nomi = document.forms['updateHaftaTuriForm']['nomiUpdate'].value;
    let kunlar = document.forms['updateHaftaTuriForm']['kunlarUpdate'].value;
    let tugma = document.getElementById('haftaTuriUpdate');
    if (nomi == "" || kunlar == "") {
        tugma.disabled = true;
    } else {
        tugma.disabled = false;
    }
}
/**
 * Hafta turi o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id) {
    haftaTuriService.getStatus(id, location.reload(), console.log("xato"))
}
/**
 Status o'zgartirish
 */