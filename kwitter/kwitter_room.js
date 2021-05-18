
  
  var firebaseConfig = {
    apiKey: "AIzaSyB8f6phvC6yQ4eRszDp1kb8v5ZdgG0ZSvI",
    authDomain: "kwitter-256cd.firebaseapp.com",
    databaseURL: "https://kwitter-256cd-default-rtdb.firebaseio.com",
    projectId: "kwitter-256cd",
    storageBucket: "kwitter-256cd.appspot.com",
    messagingSenderId: "582585715103",
    appId: "1:582585715103:web:51622973f4af8e660c95aa"
  };
 firebase.initializeApp(firebaseConfig);
  
  







  function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
      Room_names = childKey;
   console.log("Room Name- " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
     });
     });
     }
getData();
function addRoom() { 
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; 
    }

function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
}
 function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";
     
 }



 






















