let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  fanTuriService.getAll(printpost, console.log("xato"));
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
                       <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateFanTuriModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
                       <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
                   </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
Fan turi qushish boshlandi
*/
function fanTuriQushish() {
  let form = document.forms['createFanTuriForm'];
  let check = {}
  check.nomi = form["nomi"].value;
  fanTuriService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Fan turi qushish tugadi
*/
/**
 * Fan turi o'zgartirish boshlandi
*/
function fanTuriUpdate(id) {
  let form = document.forms['updateFanTuriForm'];
  let check = {}
  check.id=id;
  check.nomi = form["nomiUpdate"].value;
  fanTuriService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Fan turi o'zgartirish tugadi
*/
/**
 * Fan turi haqida boshlandi
 */
function poliyaId(id){
  fanTuriService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateFanTuriForm'];
  let check = {}
  document.getElementById("buttonFanTuriUpdate").innerHTML=`
  <button type="button" id="fanTuriUpdate" disabled class="btn btn-primary" onclick="fanTuriUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nomiUpdate"].value=malumot.nomi;
}
/**
 * Fan turi haqida tugadi
 */
/**
 * Fan turi qo'shish yozganda boshlandi
 */
 function fanTuriYozish() {
  let nomi = document.forms['createFanTuriForm']['nomi'].value;
  let tugma = document.getElementById('fanTuriQushish');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Fan turi qo'shish yozganda tugadi
 */
/**
 * Fan turi o'zgartirish yozganda boshlandi
 */
function fanTuriYozishUpdate() {
  let nomi = document.forms['updateFanTuriForm']['nomiUpdate'].value;
  let tugma = document.getElementById('fanTuriUpdate');
  if (nomi == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Fan turi o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  fanTuriService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */








