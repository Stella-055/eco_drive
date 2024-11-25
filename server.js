import auth from '@react-native-firebase/auth';

function signIn() {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log('User signed in!'))
    .catch(error => console.error(error));
}
