import {Alert} from 'react-native';
import {createUserInDb} from './firebaseDb';
import auth from '@react-native-firebase/auth';

export const registerNewUser = async (email, password) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('New User: ' + user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ': ' + errorMessage);
    });
};

export const signinUser = async (email, password) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in: ' + user.email);

      Alert.alert("You're in", 'Successfully logged in', [
        {
          text: 'Thank you',
          onPress: () => {},
        },
      ]);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + ': ' + errorMessage);
      Alert.alert('Oops!', [
        {
          text: 'Try again',
          onPress: () => {},
        },
      ]);
    });
};

export const signoutUser = async () => {
  await auth()
    .signOut()
    .then(() => {
      console.log('Logged out Successfully');
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const updateAuthProfile = async (username, imageUrl) => {
  console.log('Username: ' + username + ' ImageURL: ' + imageUrl);
  try {
    await auth().currentUser.updateProfile({
      displayName: username,
      photoURL: imageUrl,
    });
    console.log('Profile updated in Auth Successfully');
    return true;
  } catch (error) {
    console.log('Something went wrong in Update Auth: ' + error);
    return false;
  }
};
