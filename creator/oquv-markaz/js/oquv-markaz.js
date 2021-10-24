let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  vaqtSelected();
  userService.getSelected(userSelected,console.log("xato"));
  oquvMarkazService.getAll(printpost, console.log("xato"));
}
/**
 * Yuklash tugadi
 */
/**
 * Jadval boshlandi
 */
function printpost(res) {
  txt="";
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
                          <td>${element.boshliq.username}</td>
                          <td>${element.admin.username}</td>
                          <td>${element.nomer}</td>
                          <td>${element.viloyat}</td>     
                          <td>${element.status}</td>
                         <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateOquvMarkazModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
                         <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
                         <td class="rollMalumot"><button id="button1" type="button" class="btn btn-primary">Malumot</button></td>
                     </tr>`;
    });
    tbody.innerHTML = txt;  
  }
/**
Fan turi qushish boshlandi
*/
function oquvMarkazQushish() {
  let form = document.forms['createOquvMarkazForm'];
  let check = {};
  let userId1={};
  let userId2={};
  check.nomi = form["nomi"].value;
  check.manzil = form["manzil"].value;
  check.koordinataX = form["koordinataX"].value;
  check.koordinataY = form["koordinataY"].value;
  check.googleManzil = form["googleManzil"].value;
  check.tuman = form["tuman"].value;
  check.qisqaMalumot = form["qisqaMalumot"].value;
  check.nomer = form["nomer"].value;
  check.sayt = form["sayt"].value;
  check.telegram = form["telegram"].value;
  check.viloyat = document.getElementById("viloyat").value;
  check.startWork = document.getElementById("startWork").value;
  check.endWork = document.getElementById("endWork").value;
  userId1.id = document.getElementById("boshliq").value;
  check.boshliq = userId1;
  userId2.id = document.getElementById("admin").value
  check.admin  = userId2;
  oquvMarkazService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Fan turi qushish tugadi
*/
/**
 * Fan turi o'zgartirish boshlandi
*/
function oquvMarkazUpdate(id) {
  let form = document.forms['updateOquvMarkazForm'];
  let check = {};
  let userId1={};
  let userId2={};
  check.id=id;
  check.nomi = form["nomiUpdate"].value;
  check.manzil = form["manzilUpdate"].value;
  check.koordinataX = form["koordinataXUpdate"].value;
  check.koordinataY = form["koordinataYUpdate"].value;
  check.googleManzil = form["googleManzilUpdate"].value;
  check.tuman = form["tumanUpdate"].value;
  check.qisqaMalumot = form["qisqaMalumotUpdate"].value;
  check.nomer = form["nomerUpdate"].value;
  check.sayt = form["saytUpdate"].value;
  check.telegram = form["telegramUpdate"].value;
  check.viloyat = document.getElementById("viloyatUpdate").value;
  check.startWork = document.getElementById("startWorkUpdate").value;
  check.endWork = document.getElementById("endWorkUpdate").value;
  userId1.id = document.getElementById("boshliqUpdate").value;
  check.boshliq = userId1;
  userId2.id = document.getElementById("adminUpdate").value
  check.admin  = userId2;
  oquvMarkazService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Fan turi o'zgartirish tugadi
*/
/**
 * Fan turi haqida boshlandi
 */
function poliyaId(id){
  oquvMarkazService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateOquvMarkazForm'];
  document.getElementById("buttonOquvMarkazUpdate").innerHTML=`
  <button type="button" id="oquvMarkazUpdate" disabled class="btn btn-primary" onclick="oquvMarkazUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nomiUpdate"].value=malumot.nomi;
  form["manzilUpdate"].value=malumot.manzil;
  form["koordinataXUpdate"].value=malumot.koordinataX;
  form["koordinataYUpdate"].value=malumot.koordinataY;
  form["googleManzilUpdate"].value=malumot.googleManzil;
  form["tumanUpdate"].value=malumot.tuman;
  form["qisqaMalumotUpdate"].value=malumot.qisqaMalumot;
  form["nomerUpdate"].value=malumot.nomer;
  form["saytUpdate"].value=malumot.sayt;
  form["telegramUpdate"].value=malumot.telegram;
  document.getElementById("viloyatUpdate").value=malumot.viloyat;
  document.getElementById("startWorkUpdate").value=malumot.startWork;
  document.getElementById("endWorkUpdate").value=malumot.endWork;
  document.getElementById("boshliqUpdate").value=malumot.boshliq.id;
  document.getElementById("adminUpdate").value=malumot.admin.id;
}
/**
 * Fan turi haqida tugadi
 */
/**
 * Fan turi qo'shish yozganda boshlandi
 */
 function oquvMarkazYozish() {
  let tugma = document.getElementById('oquvMarkazQushish');
  let nomi = document.forms['createOquvMarkazForm']['nomi'].value;
  let manzil = document.forms['createOquvMarkazForm']['manzil'].value;
  let koordinataX = document.forms['createOquvMarkazForm']['koordinataX'].value;
  let koordinataY = document.forms['createOquvMarkazForm']['koordinataY'].value;
  let googleManzil = document.forms['createOquvMarkazForm']['googleManzil'].value;
  let tuman = document.forms['createOquvMarkazForm']['tuman'].value;
  let qisqaMalumot = document.forms['createOquvMarkazForm']['qisqaMalumot'].value;
  let nomer = document.forms['createOquvMarkazForm']['nomer'].value;
  let sayt = document.forms['createOquvMarkazForm']['sayt'].value;
  let telegram = document.forms['createOquvMarkazForm']['telegram'].value;
  if (nomi == "" || manzil == "" || koordinataX == "" || koordinataY == "" || googleManzil == "" || tuman == "" || qisqaMalumot == "" || nomer == "" || sayt == "" || telegram == "") {
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
function oquvMarkazYozishUpdate() {
  let tugma = document.getElementById('oquvMarkazUpdate');
  let nomi = document.forms['updateOquvMarkazForm']['nomiUpdate'].value;
  let manzil = document.forms['updateOquvMarkazForm']['manzilUpdate'].value;
  let koordinataX = document.forms['updateOquvMarkazForm']['koordinataXUpdate'].value;
  let koordinataY = document.forms['updateOquvMarkazForm']['koordinataYUpdate'].value;
  let googleManzil = document.forms['updateOquvMarkazForm']['googleManzilUpdate'].value;
  let tuman = document.forms['updateOquvMarkazForm']['tumanUpdate'].value;
  let qisqaMalumot = document.forms['updateOquvMarkazForm']['qisqaMalumotUpdate'].value;
  let nomer = document.forms['updateOquvMarkazForm']['nomerUpdate'].value;
  let sayt = document.forms['updateOquvMarkazForm']['saytUpdate'].value;
  let telegram = document.forms['updateOquvMarkazForm']['telegramUpdate'].value;
  if (nomi == "" || manzil == "" || koordinataX == "" || koordinataY == "" || googleManzil == "" || tuman == "" || qisqaMalumot == "" || nomer == "" || sayt == "" || telegram == "") {
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
  oquvMarkazService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */
/**
 * Vaqt selected boshlandi
 */
function vaqtSelected(){
  let startWork=document.getElementById("startWork");
  let endWork=document.getElementById("endWork");
  let startWorkUpdate=document.getElementById("startWorkUpdate");
  let endWorkUpdate=document.getElementById("endWorkUpdate");
    let txt="";
    txt +=`<option value="0">0:00</option>`;
    for(let i=1;i<24;i++){
        txt+=`<option value="${i}">${i}:00</option>`;     
    }
    startWork.innerHTML=txt;
    endWork.innerHTML=txt;
    startWorkUpdate.innerHTML=txt;
    endWorkUpdate.innerHTML=txt;
}
/**
 * Vaqt selected tugadi
 */
/**
 * User selected boshlandi
 */
function userSelected(success){
  let malumot=JSON.parse(success);
  let boshliq=document.getElementById("boshliq");
  let admin=document.getElementById("admin");
  let boshliqUpdate=document.getElementById("boshliqUpdate");
  let adminUpdate=document.getElementById("adminUpdate");
  let userlar="";
  for(let i=0;i<malumot.length;i++){
    userlar += `<option value="${malumot[i].id}">${malumot[i].username}</option>`;
  }
  boshliq.innerHTML=userlar;
  admin.innerHTML=userlar;
  boshliqUpdate.innerHTML=userlar;
  adminUpdate.innerHTML=userlar;
}
/**
 * User selected tugadi
 */
/**
 * Qidirish boshlandi
 */
function qidirish() {
  let dateStart=document.getElementById("dateStart");
  let dateEnd=document.getElementById("dateEnd");
  let viloyatQidiruv=document.getElementById("viloyatQidiruv");
  if(viloyatQidiruv.value==0){
    oquvMarkazService.getSana(dateStart.value,dateEnd.value,printpost,console.log("xato"));
  }
  else{
    oquvMarkazService.getSanaViloyat(dateStart.value,dateEnd.value,viloyatQidiruv.value,printpost,console.log("xato"));
  }
}
/**
 * Qidirish tugadi
 */
/**
 * Qidiruv nomi boshlandi
 */
function qidirishNomi(){
  let nomi=document.getElementById("nomiQidirish");
  oquvMarkazService.getQidirishNomi(nomi.value,printpost,console.log("xato"));
}
/**
 * Qidiruv nomi tugadi
 */
















