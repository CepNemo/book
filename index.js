/**
 * Created by Nemo on 23.08.2017.
 */
let doc = window.document;


;(function() {
    let addNewTel = doc.getElementById('addNewTel');
    let contData = doc.forms['contData'];
    let newPhone = doc.getElementById('newPhone');
    let addContact = doc.getElementById('add');
    let createCont = doc.getElementById('newCont');
    let search = doc.getElementById('searchBlock');
    let save = doc.getElementById('save');
    let cancel = doc.getElementById('cancel');
    let tdList = doc.getElementById('tdList');
    let dell = doc.getElementById('delete');
///

    // вивод полей ввола
    let addCont = function (){
            createCont.style.display = 'block';
            search.style.display = 'none';
            tdList.style.display = 'none';

        };
    // возрат поля поиска
    let cancel1 = function(){
        createCont.style.display = 'none';
        search.style.display = 'inline';
    };
    //запись даних
    let addData = function(){

        let name  = doc.getElementById('name').value;
        let mail  = doc.getElementById('mail').value;
        let tel  = doc.getElementById('phone').value;
        let idDate = {
            time :new Date().getTime()
        };
        let idDate1 = [idDate['time']];
        let allInfo = {
            name:name,
            mail:mail,
            tel:tel
        };
        let allinfo1 = [allInfo['name'],
                        allInfo['mail'],
                        allInfo['tel']];

        if (allinfo1[0] == ""){
            return  alert ('Заполните поля');
        }
        if (allinfo1[0] !== "")
        {
            localStorage.setItem(JSON.stringify(idDate1), JSON.stringify(allinfo1));
            alert ('Контакт добавлен');
        }


    };
    for (let o = 0; o < localStorage.length;o++) {

        let arrKey="";
        let str = "";
        arrKey = localStorage.key(o);
       // let div2 =document.createElement("div");
       // div2.className = "idHover";
        let div = document.createElement("div");
        div.className = localStorage.key(o);
        tdList.appendChild(div);
        //tdList.appendChild(div2);//.style.display = 'none';
        str = JSON.parse(localStorage.getItem(localStorage.key(o)))+"" ;
        let narry = str.split(',');

        console.log(arrKey);

        div.innerHTML =(
        "<ul><li>"+"Имя:"+" " + narry[0] + "</li>" +" "+
        "<li>" + "Емайл:"+" " + narry[1] + "</li>" +" "+
        "<li>" + "Телефон:"+" " + narry[2] + "</li>" +
        "<li><button id = 'delete' onclick = dell("+arrKey+")>Delele</button>"+
        "<button id ='edit'>Edit</button></li></ul>");
    }
    let addNewInput = function(){
        if(newPhone.style.display='none') {
            newPhone.style.display = 'block';
        }
    };


    addNewTel.addEventListener('click',addNewInput);
    cancel.addEventListener('click',cancel1);
   save.addEventListener('click', addData);
    addContact.addEventListener('click', addCont);


})();


function dell(a) {
    let q = a;
    for (let o = 0; o < localStorage.length; o++) {
        if (q == q) {
            localStorage.removeItem("["+q+"]");
        }
        else {
            return false;
        }
    }
    }


