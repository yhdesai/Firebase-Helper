// Firebase Helper File

function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`Error occured in signing up \nError Code : ${errorCode}\nError Message : ${errorMessage}` );
  });
}

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  email - password.html
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    userIsSignedIn(user);

  } else {
    // User is signed out.
    userIsSignedOut();
  }
});
