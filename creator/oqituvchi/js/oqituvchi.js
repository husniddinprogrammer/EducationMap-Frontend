let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  oqituvchiService.getAll(printpost, console.log("xato"));
  fanTuriService.getAllSelected(fanTuriSelected,console.log("xato"));
  oquvMarkazService.getAllSelected(oquvMarkazSelected,console.log("xato"));
}
/**
 * Yuklash tugadi
 */
/**
 * Jadval boshlandi
 */
function printpost(res) {
  let elements = JSON.parse(res);
  txt="";
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
              <td>${element.ism}</td>
              <td>${element.familiya}</td>
              <td>${element.nomer}</td>
              <td>${element.tajriba}</td>
              <td>${element.togilganYili}</td>
              <td>${element.oquvchiSoni}</td>
              <td>${element.kursSoni}</td>
              <td>${element.status}</td>
              <td>${element.fan1.nomi}</td>
              <td>${element.fan2.nomi}</td>
              <td>${element.fan3.nomi}</td>
              <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateOqituvchiModal" data-toggle="modal" onclick="poliyaId(${element.id})">O'zgartirish</button><br></td>
              <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${element.id})">${faol}</button></td>
              </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
O'qituvchi qushish boshlandi
*/
function oqituvchiQushish() {
  let form = document.forms['createOqituvchiForm'];
  let check = {};
  let fan1 = {};
  let fan2 = {};
  let fan3 = {};
  let oquvMarkaz = {};
  check.ism = form["ism"].value;
  check.familiya = form["familiya"].value;
  check.nomer = form["nomer"].value;
  check.tajriba = form["tarjiba"].value;
  check.togilganYili = form["togilganYili"].value;
  check.qisqaMalumot = form["qisqaMalumot"].value;
  fan1.id=document.getElementById("fan1").value;
  fan2.id=document.getElementById("fan2").value;
  fan3.id=document.getElementById("fan3").value;
  oquvMarkaz.id=document.getElementById("oquvMarkazSelected").value;
  check.fan1=fan1;
  check.fan2=fan2;
  check.fan3=fan3;
  check.oquvMarkaz=oquvMarkaz;
  oqituvchiService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
O'qituvchi qushish tugadi
*/
/**
 * O'qituvchi o'zgartirish boshlandi
*/
function oqituvchiUpdate(id) {
  let form = document.forms['updateOqituvchiForm'];
  let check = {}
  let fan1 = {};
  let fan2 = {};
  let fan3 = {};
  let oquvMarkaz = {};
  check.id=id;
  check.ism = form["ismUpdate"].value;
  check.familiya = form["familiyaUpdate"].value;
  check.nomer = form["nomerUpdate"].value;
  check.tajriba = form["tarjibaUpdate"].value;
  check.togilganYili = form["togilganYiliUpdate"].value;
  check.qisqaMalumot = form["qisqaMalumotUpdate"].value;
  fan1.id=document.getElementById("fan1Update").value;
  fan2.id=document.getElementById("fan2Update").value;
  fan3.id=document.getElementById("fan3Update").value;
  oquvMarkaz.id=document.getElementById("oquvMarkazSelectedUpdate").value;
  check.fan1=fan1;
  check.fan2=fan2;
  check.fan3=fan3;
  check.oquvMarkaz=oquvMarkaz;
  oqituvchiService.update(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
O'qituvchi o'zgartirish tugadi
*/
/**
 * O'qituvchi haqida boshlandi
 */
function poliyaId(id){
  oqituvchiService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateOqituvchiForm'];
  let check = {}
  document.getElementById("buttonOqituvchiUpdate").innerHTML=`
  <button type="button" id="oqituvchiUpdate" disabled class="btn btn-primary" onclick="oqituvchiUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["ismUpdate"].value=malumot.ism;
  form["familiyaUpdate"].value=malumot.familiya;
  form["nomerUpdate"].value=malumot.nomer;
  form["tajribaUpdate"].value=malumot.tajriba;
  form["togilganYiliUpdate"].value=malumot.togilganYili;
  form["qisqaMalumotUpdate"].value=malumot.qisqaMalumot;
  document.getElementById("fan1Update").value=malumot.fan1.id;
  document.getElementById("fan2Update").value=malumot.fan2.id;
  document.getElementById("fan3Update").value=malumot.fan3.id;
  document.getElementById("oquvMarkazSelectedUpdate").value=malumot.oquvMarkaz.id;
}
/**
 * O'qituvchi haqida tugadi
 */
/**
 * O'qituvchi qo'shish yozganda boshlandi
 */
 function oqituvchiYozish() {
  let tugma = document.getElementById('oqituvchiQushish');
  let ism = document.forms['createOqituvchiForm']['ism'].value;
  let familiya = document.forms['createOqituvchiForm']['familiya'].value;
  let nomer = document.forms['createOqituvchiForm']['nomer'].value;
  let tajriba = document.forms['createOqituvchiForm']['tajriba'].value;
  let togilganYili = document.forms['createOqituvchiForm']['togilganYili'].value;
  let qisqaMalumot = document.forms['createOqituvchiForm']['qisqaMalumot'].value;
  if (ism == "" || familiya == "" || nomer == "" || tajriba == "" || togilganYili == "" || qisqaMalumot == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * O'qituvchi qo'shish yozganda tugadi
 */
/**
 * O'qituvchi o'zgartirish yozganda boshlandi
 */
function oqituvchiYozishUpdate() {
  let tugma = document.getElementById('oqituvchiUpdate');
  let ism = document.forms['updateOqituvchiForm']['ismUpdate'].value;
  let familiya = document.forms['updateOqituvchiForm']['familiyaUpdate'].value;
  let nomer = document.forms['updateOqituvchiForm']['nomerUpdate'].value;
  let tajriba = document.forms['updateOqituvchiForm']['tajribaUpdate'].value;
  let togilganYili = document.forms['updateOqituvchiForm']['togilganYiliUpdate'].value;
  let qisqaMalumot = document.forms['updateOqituvchiForm']['qisqaMalumotUpdate'].value;
  if (ism == "" || familiya == "" || nomer == "" || tajriba == "" || togilganYili == "" || qisqaMalumot == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * O'qituvchi o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  oqituvchiService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */
/**
 * Fan turlari selected boshlandi
 */
 function fanTuriSelected(success){
  let malumot=JSON.parse(success);
  let fan1=document.getElementById("fan1");
  let fan2=document.getElementById("fan2");
  let fan3=document.getElementById("fan3");
  let fan1Update=document.getElementById("fan1Update");
  let fan2Update=document.getElementById("fan2Update");
  let fan3Update=document.getElementById("fan3Update");
  let fanQidiruv=document.getElementById("fanQidiruv");
  let fanlar="";
  for(let i=0;i<malumot.length;i++){
    fanlar += `<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;
  }
  fan1.innerHTML=fanlar;
  fan2.innerHTML=fanlar;
  fan3.innerHTML=fanlar;
  fan1Update.innerHTML=fanlar;
  fan2Update.innerHTML=fanlar;
  fan3Update.innerHTML=fanlar;
  fanQidiruv.innerHTML=`<option value="0">Barcha</option>`+fanlar;
}
/**
 * Fan turlari selected tugadi
 */
/**
 * O'quv markazlar selected boshlandi
 */
 function oquvMarkazSelected(success){
  let malumot=JSON.parse(success);
  let oquvMarkazSelected=document.getElementById("oquvMarkazSelected");
  let oquvMarkazSelectedUpdate=document.getElementById("oquvMarkazSelectedUpdate");
  let oquvMarkazlar="";
  for(let i=0;i<malumot.length;i++){
    oquvMarkazlar  += `<option value="${malumot[i].id}">${malumot[i].nomi}</option>`;
  }
  oquvMarkazSelected.innerHTML=oquvMarkazlar;
  oquvMarkazSelectedUpdate.innerHTML=oquvMarkazlar;
}
/**
 * O'quv markazlar selected tugadi
 */
/**
 * Qidirish boshlandi
 */
 function qidirish() {
  let dateStart=document.getElementById("dateStart");
  let dateEnd=document.getElementById("dateEnd");
  let fanQidiruv=document.getElementById("fanQidiruv");
  if(fanQidiruv.value==0){
    oqituvchiService.getAllQidiruvSana(dateStart.value,dateEnd.value,printpost,console.log("xato"));
  }
  else{
    oqituvchiService.getAllQidiruvSanaFan(dateStart.value,dateEnd.value,fanQidiruv.value,printpost,console.log("xato"));
  }
}
/**
 * Qidirish tugadi
 */
/**
 * Qidiruv nomi boshlandi
 */
function qidirishNomi(){
  let nomi=document.getElementById("ismQidirish");
  oqituvchiService.getAllQidiruvIsm(nomi.value,printpost,console.log("xato"));
}
/**
 * Qidiruv nomi tugadi
 */