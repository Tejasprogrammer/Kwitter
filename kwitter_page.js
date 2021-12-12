

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCLwTlRj9FNKhuDWqpD3YjI8hulgqDueg0",
      authDomain: "kwitter-76ee3.firebaseapp.com",
      databaseURL: "https://kwitter-76ee3-default-rtdb.firebaseio.com",
      projectId: "kwitter-76ee3",
      storageBucket: "kwitter-76ee3.appspot.com",
      messagingSenderId: "983913753488",
      appId: "1:983913753488:web:28991fe1d502c04275a115"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() 
    {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("Main.html");
    }
    function send() 
    {
          msg = document.getElementById("msg").value;
          console.log("Message"+ msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0

          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data['name'];
message = message_data['message'];
like = message_data['Like'];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";

like_button = "<button class='btn btn-warning' id="+ firebase_message_id+"  value="+ like + "onclick='updatelike(this.id)'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like:" + like + "</span> </button> <hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag ; 
document.getElementById("output").innerHTML += row

//End code
      } });  }); }
getData();

function updatelike(message_id)
{
      console.log("Clicked on the like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes) + 1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update({ 
      like: update_likes
});

}