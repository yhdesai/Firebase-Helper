/*
<body>
  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"></script>

  <!-- Add Firebase products that you want to use -->
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-database.js"></script>

  <script>
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
      // ...
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  </script>

</body>
*/


/* Firebase Authentication */

signUp(email, password);

signIn(email, password);

signOut();

function userIsSignedIn(user) {
  // TODO: Enter code here that needs to be run when the user is signed in

  // var displayName = user.displayName;
  // var email = user.email;
  // var emailVerified = user.emailVerified;
  // var photoURL = user.photoURL;
  // var isAnonymous = user.isAnonymous;
  // var uid = user.uid;
  // var providerData = user.providerData;
}

function userIsSignedOut() {
  // TODO: Enter code here that needs to be run when the user is signed out
}


/* Firebase Database */

// Read Data
var data = readDataFromDB(db.collection("cities").doc("LA"))

// Write Data
writeDataToDB('post/helloworld', {
  firstname: "Hello",
  lastname: "World"
})


/* Firebase Firestore */

var firestore = firebase.firestore();


// Read Data
var data = readDatafromFirestore(firestore.collection("cities").doc("LA"))

// Write Data
writeDataToFirestore(firestore.collection("posts").doc("one"), {
  firstname: "Hello",
  lastname: "World"
})
