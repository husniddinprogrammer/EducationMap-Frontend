let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  reklamaTuriService.getAll(printpost, console.log("xato"));
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
    if(element.status==1){
      faol="O'chirish";
    }
    else{
      faol="Yoqish";
    }
    txt += `
              <tr>
                        <td>${element.nomi}</td>
                        <td>${element.status}</td>
                       <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateReklamaTuriModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
                       <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
                   </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
Reklama turi qushish boshlandi
*/
function reklamaTuriQushish() {
  let form = document.forms['createReklamaTuriForm'];
  let check = {}
  check.nomi = form["nomi"].value;
  reklamaTuriService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Reklama turi qushish tugadi
*/
/**
 * Reklama turi o'zgartirish boshlandi
*/
function reklamaTuriUpdate(id) {
  let form = document.forms['updateReklamaTuriForm'];
  let check = {}
  check.id=id;
  check.nomi = form["nomiUpdate"].value;
  reklamaTuriService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Reklama turi o'zgartirish tugadi
*/
/**
 * Reklama turi haqida boshlandi
 */
function poliyaId(id){
  reklamaTuriService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateReklamaTuriForm'];
  let check = {}
  document.getElementById("buttonReklamaTuriUpdate").innerHTML=`
  <button type="button" id="reklamaTuriUpdate" disabled class="btn btn-primary" onclick="reklamaTuriUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nomiUpdate"].value=malumot.nomi;
}
/**
 * Reklama turi haqida tugadi
 */
/**
 * Reklama turi qo'shish yozganda boshlandi
 */
 function reklamaTuriYozish() {
  let nomi = document.forms['createReklamaTuriForm']['nomi'].value;
  let tugma = document.getElementById('reklamaTuriQushish');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Reklama turi qo'shish yozganda tugadi
 */
/**
 * Reklama turi o'zgartirish yozganda boshlandi
 */
function reklamaTuriYozishUpdate() {
  let nomi = document.forms['updateReklamaTuriForm']['nomiUpdate'].value;
  let tugma = document.getElementById('reklamaTuriUpdate');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Reklama turi o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  reklamaTuriService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */




