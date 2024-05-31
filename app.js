
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  import { set, push, ref, getDatabase, onValue} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCv9CMwG0pHgp6HCad-silplowCFrWlCW0",
    authDomain: "carshowroom-77eb3.firebaseapp.com",
    databaseURL: "https://carshowroom-77eb3-default-rtdb.firebaseio.com",
    projectId: "carshowroom-77eb3",
    storageBucket: "carshowroom-77eb3.appspot.com",
    messagingSenderId: "959214955570",
    appId: "1:959214955570:web:ab4ffd17b017907470202b",
    measurementId: "G-KMSV1BGPY2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();


  var name = document.getElementById("name");
  var number = document.getElementById("number");
  var gender = document.getElementById("gender");
  var email = document.getElementById("email");

  //var password = document.getElementById("password")

  var allTask;

  window.addData = function() {
    var obj = {
        name: name.value,
        number: number.value,
        gender: gender.value,
        email: email.value
    }


    name.value = "",
    number.value = "",
    gender.value = "",
    email.value = ""   
    
    // console.log(obj);



obj.id = push(ref(db, "task")).key;
console.log(obj);
    var reference = ref(db, `tasks/${obj.id}`);
    set(reference, obj)

  }

  function getData() {
    const reference = ref(db, `tasks/`);
    onValue(reference, function (taskData){
      allTask = taskData.val();
     //console.log(taskData.val(), "Task Data");
      var arr = Object.values(allTask); 

     // console.log(arr , "Task Data");

//  var table1 = document.getElementById("table")

var parent = document.getElementById("parent");

for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);

  allTask = arr[i]

  parent.innerHTML +=`
  <tbody>
    <tr>
        <td>${allTask.name}</td>
        <td>${allTask.number}</td>
        <td>${allTask.gender}</td>
        <td>${allTask.email}</td>

  </tr>
  </tbody>
  `
}

    });
  }

  getData();


 

