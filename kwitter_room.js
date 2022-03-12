var firebaseConfig = {
      apiKey: "AIzaSyB5wvkWzpWt-fc40hLqpRyyUNlgoMs0wOw",
      authDomain: "letschat-83776.firebaseapp.com",
      databaseURL: "https://letschat-83776-default-rtdb.firebaseio.com",
      projectId: "letschat-83776",
      storageBucket: "letschat-83776.appspot.com",
      messagingSenderId: "410069047054",
      appId: "1:410069047054:web:be00b1f22c27b1443ee95f",
      measurementId: "G-WRWYTE363Y"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
