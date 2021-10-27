let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  kursService.getAll(printpost, console.log("xato"));
  vaqtSelected();
  fanTuriService.getAllSelected(fanTuriSelected,console.log("xato"));
  oqituvchiService.getAllSelected(oqituvchiSelected,console.log("xato"));
  faolTuriService.getAllSelected(faolTuriSelected,console.log("xato"));
  haftaTuriService.getAllSelected(haftaTuriSelected,console.log("xato"));
  oquvMarkazService.getAllSelected(oquvMarkazSelected,console.log("xato"));
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
  console.log(elements);
  elements.forEach(element => {
    i = element.id;
    let faol;
    if(element.status==true){
      faol="O'chirish";
    }
    else{
      faol="Yoqish";
    }
    txt += `
            <tr>
              <td>${element.nomi}</td>
              <td>${element.oqituvchi.ism}</td>
              <td>${element.fan.nomi}</td>
              <td>${element.startWork}</td>
              <td>${element.endWork}</td>
              <td>${element.haftaTartibiTur.nomi}</td>
              <td>${element.narxi}</td>
              <td>${element.soni}</td>
              <td>${element.faolTur.nomi}</td>
              <td>${element.status}</td>
              <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateKursModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
              <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
            </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
Kurs qushish boshlandi
*/
function kursQushish() {
  let form = document.forms['createKursForm'];
  let check = {}
  let faolTuri={};
  let fan={};
  let oqituvchi={};
  let haftaTartibiTur={};
  let oquvMarkaz={};
  check.nomi = form["nomi"].value;
  check.narxi = form["narxi"].value;
  check.maxSoni = form["maxSoni"].value;
  check.soni = form["soni"].value;
  check.qisqaMalumot = form["qisqaMalumot"].value;
  check.startWork = document.getElementById("startWorkSelect").value;
  check.endWork = document.getElementById("endWorkSelect").value;
  faolTuri.id = document.getElementById("faolTuriSelect").value;
  check.faolTur = faolTuri;
  fan.id = document.getElementById("fanSelect").value;
  check.fan = fan;
  oqituvchi.id = document.getElementById("oqituvchiSelect").value;
  check.oqituvchi = oqituvchi;
  haftaTartibiTur.id = document.getElementById("haftaTartibiTurSelect").value;
  check.haftaTartibiTur = haftaTartibiTur;
  oquvMarkaz.id = document.getElementById("oquvMarkazSelect").value;
  check.oquvMarkaz = oquvMarkaz;
  kursService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Kurs qushish tugadi
*/
/**
 * Kurs o'zgartirish boshlandi
*/
function kursUpdate(id) {
  let form = document.forms['updateKursForm'];
  let check = {}
  check.id=id;
  let faolTuri={};
  let fan={};
  let oqituvchi={};
  let haftaTartibiTur={};
  let oquvMarkaz={};
  check.nomi = form["nomiUpdate"].value;
  check.narxi = form["narxiUpdate"].value;
  check.maxSoni = form["maxSoniUpdate"].value;
  check.soni = form["soniUpdate"].value;
  check.qisqaMalumot = form["qisqaMalumotUpdate"].value;
  check.startWork = document.getElementById("startWorkSelectUpdate").value;
  check.endWork = document.getElementById("endWorkSelectUpdate").value;
  faolTuri.id = document.getElementById("faolTuriSelectUpdate").value;
  check.faolTur = faolTuri;
  fan.id = document.getElementById("fanSelectUpdate").value;
  check.fan = fan;
  oqituvchi.id = document.getElementById("oqituvchiSelectUpdate").value;
  check.oqituvchi = oqituvchi;
  haftaTartibiTur.id = document.getElementById("haftaTartibiTurSelectUpdate").value;
  check.haftaTartibiTur = haftaTartibiTur;
  oquvMarkaz.id = document.getElementById("oquvMarkazSelectUpdate").value;
  check.oquvMarkaz = oquvMarkaz;
  kursService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Kurs o'zgartirish tugadi
*/
/**
 * Kurs haqida boshlandi
 */
function poliyaId(id){
  kursService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateKursForm'];
  let check = {}
  document.getElementById("buttonKursUpdate").innerHTML=`
  <button type="button" id="kursUpdate" disabled class="btn btn-primary" onclick="kursUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nomiUpdate"].value=malumot.nomi;
  form["narxiUpdate"].value=malumot.narxi;
  form["maxSoniUpdate"].value=malumot.maxSoni;
  form["soniUpdate"].value=malumot.soni;
  form["qisqaMalumotUpdate"].value=malumot.qisqaMalumot;
  document.getElementById("oqituvchiSelectUpdate").value=malumot.oqituvchi.id;
  document.getElementById("fanSelectUpdate").value=malumot.fan.id;
  document.getElementById("oquvMarkazSelectUpdate").value=malumot.oquvMarkaz.id;
  document.getElementById("haftaTartibiTurSelectUpdate").value=malumot.haftaTartibiTur.id;
  document.getElementById("startWorkSelectUpdate").value=malumot.startWork;
  document.getElementById("endWorkSelectUpdate").value=malumot.endWork;
  document.getElementById("faolTuriSelectUpdate").value=malumot.faolTur.id;
}
/**
 * Kurs haqida tugadi
 */
/**
 * Kurs qo'shish yozganda boshlandi
 */
 function kursYozish() {
  let tugma = document.getElementById('kursQushish');
  let nomi = document.forms['createKursForm']['nomi'].value;
  let narxi = document.forms['createKursForm']['narxi'].value;
  let maxSoni = document.forms['createKursForm']['maxSoni'].value;
  let soni = document.forms['createKursForm']['soni'].value;
  let qisqaMalumot = document.forms['createKursForm']['qisqaMalumot'].value;
  if (nomi == "" || narxi == "" || maxSoni == "" || soni == "" || qisqaMalumot == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Kurs qo'shish yozganda tugadi
 */
/**
 * Kurs o'zgartirish yozganda boshlandi
 */
function kursYozishUpdate() {
  let tugma = document.getElementById('kursUpdate');
  let nomi = document.forms['updateKursForm']['nomiUpdate'].value;
  let narxi = document.forms['updateKursForm']['narxiUpdate'].value;
  let maxSoni = document.forms['updateKursForm']['maxSoniUpdate'].value;
  let soni = document.forms['updateKursForm']['soniUpdate'].value;
  let qisqaMalumot = document.forms['updateKursForm']['qisqaMalumotUpdate'].value;
  if (nomi == "" || narxi == "" || maxSoni == "" || soni == "" || qisqaMalumot == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Kurs o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  kursService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */
/**
 * Vaqt selected boshlandi
 */
 function vaqtSelected(){
  let startWork=document.getElementById("startWorkSelect");
  let endWork=document.getElementById("endWorkSelect");
  let startWorkUpdate=document.getElementById("startWorkSelectUpdate");
  let endWorkUpdate=document.getElementById("endWorkSelectUpdate");
    let vaqtlar="";
    vaqtlar +=`<option value="0:00">0:00</option>`;
    vaqtlar +=`<option value="0:30">0:30</option>`;
    for(let i=1;i<24;i++){
      vaqtlar+=`<option value="${i}:00">${i}:00</option>`; 
      vaqtlar+=`<option value="${i}:30">${i}:30</option>`;     
    }
    startWork.innerHTML=vaqtlar;
    endWork.innerHTML=vaqtlar;
    startWorkUpdate.innerHTML=vaqtlar;
    endWorkUpdate.innerHTML=vaqtlar;
}
/**
 * Vaqt selected tugadi
 */
/**
 * O'qituvchi selected boshlandi
 */
 function oqituvchiSelected(success){
  let malumot=JSON.parse(success);
  let oqituvchiSelected=document.getElementById("oqituvchiSelect");
  let oqituvchiSelectedUpdate=document.getElementById("oqituvchiSelectUpdate");
  let oqituvchiQidiruvchi=document.getElementById("oqituvchiQidiruv");
  let oqituvchilar="";
  for(let i=0;i<malumot.length;i++){
    oqituvchilar+=`<option value="${malumot[i].id}">${malumot[i].ism}</option>`;     
  }
  oqituvchiQidiruvchi.innerHTML=`<option value="0">Barcha</option>`+oqituvchilar;
  oqituvchiSelected.innerHTML=oqituvchilar;
  oqituvchiSelectedUpdate.innerHTML=oqituvchilar;
}
/**
 * O'qituvchi selected tugadi
 */
/**
 * Fan turi selected boshlandi
 */
 function fanTuriSelected(success){
  let malumot=JSON.parse(success);
  let fanTuriSelected=document.getElementById("fanSelect");
  let fanTuriSelectedUpdate=document.getElementById("fanSelectUpdate");
  let fanQidiruv=document.getElementById("fanQidiruv");
  let fanlar="";
  for(let i=0;i<malumot.length;i++){
    fanlar+=`<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;     
  }
  fanQidiruv.innerHTML=`<option value="0">Barcha</option>`+fanlar;
  fanTuriSelected.innerHTML=fanlar;
  fanTuriSelectedUpdate.innerHTML=fanlar;
}
/**
 * Fan turi selected tugadi
 */
/**
 * Faol turi selected boshlandi
 */
 function faolTuriSelected(success){
  let malumot=JSON.parse(success);
  let faolTuriSelected=document.getElementById("faolTuriSelect");
  let faolTuriSelectedUpdate=document.getElementById("faolTuriSelectUpdate");
  let faolTurilar="";
  for(let i=0;i<malumot.length;i++){
    faolTurilar+=`<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;     
  }
  faolTuriSelected.innerHTML=faolTurilar;
  faolTuriSelectedUpdate.innerHTML=faolTurilar;
}
/**
 * Faol turi selected tugadi
 */
/**
 * Hafta turi selected boshlandi
 */
 function haftaTuriSelected(success){
  let malumot=JSON.parse(success);
  let haftaTuriSelected=document.getElementById("haftaTartibiTurSelect");
  let haftaTuriSelectedUpdate=document.getElementById("haftaTartibiTurSelectUpdate");
  let haftaTurilar="";
  for(let i=0;i<malumot.length;i++){
    haftaTurilar+=`<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;     
  }
  haftaTuriSelected.innerHTML=haftaTurilar;
  haftaTuriSelectedUpdate.innerHTML=haftaTurilar;
}
/**
 * Hafta turi selected tugadi
 */
/**
 * O'quv Markaz selected boshlandi
 */
 function oquvMarkazSelected(success){
  let malumot=JSON.parse(success);
  let oquvMarkazSelected=document.getElementById("oquvMarkazSelect");
  let oquvMarkazSelectedUpdate=document.getElementById("oquvMarkazSelectUpdate");
  let oquvMarkazQidiruv=document.getElementById("oquvMarkazQidiruv");
  let oquvMarkazlar="";
  for(let i=0;i<malumot.length;i++){
    oquvMarkazlar+=`<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;     
  }
  oquvMarkazQidiruv.innerHTML=`<option value="0">Barcha</option>`+oquvMarkazlar;
  oquvMarkazSelected.innerHTML=oquvMarkazlar;
  oquvMarkazSelectedUpdate.innerHTML=oquvMarkazlar;
}
/**
 * O'quv Markaz selected tugadi
 */
function qidirish(){
  let dateStart=document.getElementById("dateStart").value;
  let dateEnd=document.getElementById("dateEnd").value;
  let fanQidiruv=document.getElementById("fanQidiruv").value;
  let oqituvchiQidiruv=document.getElementById("oqituvchiQidiruv").value;
  let oquvMarkazQidiruv=document.getElementById("oquvMarkazQidiruv").value;
  kursService.getAllFilter(dateStart,dateEnd,oquvMarkazQidiruv,oqituvchiQidiruv,fanQidiruv,printpost,console.log("xato"));
}
function qidirishNomi(){
  let nomiQidirish=document.getElementById("nomiQidirish").value;
  kursService.getAllQidirish(nomiQidirish,printpost,console.log("xato"));
}









