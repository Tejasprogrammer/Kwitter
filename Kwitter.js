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

function adduser() {
        user_name = document.getElementById("user_name").value;
    
        localStorage.setItem("Username",user_name);
    
        window.location = "kwitter_room.html";
}
