let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  faolTuriService.getAll(printpost, console.log("xato"));
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
                       <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateFaolTuriModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
                       <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
                   </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
Faol turi qushish boshlandi
*/
function faolTuriQushish() {
  let form = document.forms['createFaolTuriForm'];
  let check = {}
  check.nomi = form["nomi"].value;
  faolTuriService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Faol turi qushish tugadi
*/
/**
 * Faol turi o'zgartirish boshlandi
*/
function faolTuriUpdate(id) {
  let form = document.forms['updateFaolTuriForm'];
  let check = {}
  check.id=id;
  check.nomi = form["nomiUpdate"].value;
  faolTuriService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Faol turi o'zgartirish tugadi
*/
/**
 * Faol turi haqida boshlandi
 */
function poliyaId(id){
  faolTuriService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateFaolTuriForm'];
  let check = {}
  document.getElementById("buttonFaolTuriUpdate").innerHTML=`
  <button type="button" id="faolTuriUpdate" disabled class="btn btn-primary" onclick="faolTuriUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nomiUpdate"].value=malumot.nomi;
}
/**
 * Faol turi haqida tugadi
 */
/**
 * Faol turi qo'shish yozganda boshlandi
 */
 function faolTuriYozish() {
  let nomi = document.forms['createFaolTuriForm']['nomi'].value;
  let tugma = document.getElementById('faolTuriQushish');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Faol turi qo'shish yozganda tugadi
 */
/**
 * Faol turi o'zgartirish yozganda boshlandi
 */
function faolTuriYozishUpdate() {
  let nomi = document.forms['updateFaolTuriForm']['nomiUpdate'].value;
  let tugma = document.getElementById('faolTuriUpdate');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Faol turi o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  faolTuriService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */








