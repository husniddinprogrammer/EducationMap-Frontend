let tbody = document.getElementById("tbody");
let txt = "";
let i;var malumotId;
/**
 * Yuklash boshlandi
 */
function yuklash() {
  info();
  userService.getAll(printpost, console.log("xato"));
}
/**
 * Yuklash tugadi
 */
/**
 * Jadval boshlandi
 */
function printpost(res) {
  let studentlar = JSON.parse(res);
  studentlar.forEach(xabarlar => {
    i = xabarlar.id;
    let faol;
    if(xabarlar.status==true){
      faol="O'chirish";
    }
    else{
      faol="Yoqish";
    }
    txt += `
              <tr>
                       <td>${xabarlar.username}</td>
                       <td>${xabarlar.name}</td>
                       <td>${xabarlar.number}</td>
                       <td>${xabarlar.qushilganVaqti}</td>
                       <td>${xabarlar.status}</td>
                       <td class="rollUpdate"><button id="button1" type="button" class="btn btn-primary" id="${i}" data-target="#updateAdminModal" data-toggle="modal" onclick="poliyaId(${xabarlar.id})">O'zgartirish</button><br></td>
                       <td class="rollRemove"><button type="button" class="btn btn-sm btn-danger" onclick="removePost(${xabarlar.id})">${faol}</button></td>
                   </tr>`;
  });
  tbody.innerHTML = txt;
}
/**
Admin qushish boshlandi
*/
function adminQushish() {
  let form = document.forms['createAdminForm'];
  let check = {}
  check.name = form["name"].value;
  check.number = form["number"].value;
  check.password = form["password"].value;
  check.username = form["username"].value;
  check.qushilganVaqti=null;
  check.status=null;
  userService.create(JSON.stringify(check), location.reload(), console.log("xato"));
}
/**
Admin qushish tugadi
*/
/**
Admin qushish boshlandi
*/
function adminUpdate(id) {
  let form = document.forms['updateAdminForm'];
  let check = {}
  check.name = form["nameUpdate"].value;
  check.number = form["numberUpdate"].value;
  check.password = form["passwordUpdate"].value;
  check.username = form["usernameUpdate"].value;
  userService.update(JSON.stringify(check),id, console.log("xato"), console.log("xato"));
}
/**
Admin qushish tugadi
*/
/**
 * Admin haqida boshlandi
 */
function poliyaId(id){
  userService.getById(id,malumotQuy,console.log("xato"));  
}
function malumotQuy(success){
  let malumot=JSON.parse(success);
  let form = document.forms['updateAdminForm'];
  let check = {}
  document.getElementById("buttonAdminUpdate").innerHTML=`
  <button type="button" id="adminUpdate" disabled class="btn btn-primary" onclick="adminUpdate(${malumot.id})">
  <i class="fa fa-plus" aria-hidden="true"></i> O'zgartirish
</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiqish</button>
  `
  form["nameUpdate"].value=malumot.name;
  form["numberUpdate"].value=malumot.number;
  form["usernameUpdate"].value=malumot.username;
}
/**
 * Admin haqida tugadi
 */
/**
 * Admin qo'shish yozganda boshlandi
 */
 function adminYozish() {
  let username = document.forms['createAdminForm']['username'].value;
  let name = document.forms['createAdminForm']['name'].value;
  let number = document.forms['createAdminForm']['number'].value;
  let password = document.forms['createAdminForm']['password'].value;
  let tugma = document.getElementById('adminQushish');
  if (username == "" || name == "" || number == "" || password == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Admin qo'shish yozganda tugadi
 */
/**
 * Admin o'zgartirish yozganda boshlandi
 */
function adminYozishUpdate() {
  let username = document.forms['updateAdminForm']['usernameUpdate'].value;
  let name = document.forms['updateAdminForm']['nameUpdate'].value;
  let number = document.forms['updateAdminForm']['numberUpdate'].value;
  let password = document.forms['updateAdminForm']['passwordUpdate'].value;
  let tugma = document.getElementById('adminUpdate');
  if (username == "" || name == "" || number == "" || password == "") {
    tugma.disabled = true;
  } else {
    tugma.disabled = false;
  }
}
/**
 * Admin o'zgartirish yozganda tugadi
 */
/**
Status o'zgartirish boshlandi
*/
function removePost(id){
  userService.getStatus(id,location.reload(),console.log("xato"))
}
/**
 Status o'zgartirish
 */
/**
 * User sana boshlandi
 */
function userSana(){
  let sana=document.getElementById("sana");
  userService.getSana(sana.value,printpost,console.log(""));
}
/**
 * User sana tugadi
 */
/**
 * Qidirish boshlandi
 */
function qidir(){
  let userLike=document.getElementById("user-like").value;
  userService.getQidirish(userLike,printpost,console.log("xato"));
}
/**
 * Qidirish tugadi
 */