import {db} from '../config/firebase';
import {uploadToStorage} from './firebaseStorage';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const createUserInDb = async (
  // profileImage,
  username,
  name,
  surname,
  email,
  uid,
) => {
  try {
    await firestore().collection('users').doc(uid).set({
      // profileImage,
      name,
      surname,
      username,
      email,
      createdAt: firestore.Timestamp.now(),
    });
    // console.log('User Added doc id: ' + docRef.id);
  } catch (e) {
    console.log('Something went wrong: ' + e);
  }
};

// Get All Users

export const getAllUsersFromCollection = async () => {
  try {
    var users = [];

    const snapshot = await firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          users.push({...documentSnapshot.data(), id: documentSnapshot.id});
        });
      });

    // getDocs(
    //   query(
    //     collection(db, 'users'),
    //     // .orderBy("year"),
    //     // orderBy("title")
    //   ),
    // );

    // const snapshot = await firestore()
    //   .collection('Users')
    //   .where(Filter('user', '==', 'Tim'))
    //   .where('email', '==', 'tim@example.com')
    //   .get();

    // snapshot.forEach(doc => {
    //   users.push({...doc.data(), id: doc.id});
    // });

    // console.log(users);

    return users;
  } catch (e) {
    console.log('Something went wrong: ' + e);
    return [];
  }
};

// Update User Information

export const updateUserInDb = async (uid, userInfo) => {
  try {
    console.log(uid);
    console.log('DB Profile Picture', userInfo.profileImage);
    // console.log('DB Feature One', userInfo.featureOne);

    const docRef = firestore().collection('Users').doc(uid);
    await docRef.update(userInfo).then(async () => {
      const imageURL = await uploadToStorage(
        userInfo.profileImage,
        `profilepictures/${uid + Math.random().toString(36).substring(2)}`,
      );

      console.log('imageUrl: ', imageURL);
      await docRef.update({profileImage: imageURL});
    });

    // Feature Images

    return true;
  } catch (e) {
    console.log('Something went wrong with user update:', e);
    return false;
  }
};

// Chat System

export const addMessage = async message => {
  console.log('Chat From DB', message);

  try {
    const docRef = await firestore().collection('messages').add(message);
    console.log('Added message successfully', docRef.id);
  } catch (e) {
    console.log('Something went wrong: ' + e);
  }
};

export const getAllMessagesFromCollection = async () => {
  try {
    var messages = [];

    await firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          messages.push({...documentSnapshot.data(), id: documentSnapshot.id});
        });
      });

    return messages;
  } catch (e) {
    console.log('Something went wrong: ' + e);
    return [];
  }
};

export const addImageToCollection = async img => {
  console.log('Image Post', img);
  try {
    const docRef = await firestore().collection('images').add({image: img});

    const imageURL = await uploadToStorage(img, `images/${docRef.id}`);

    console.log('Added image successfully with ID:', docRef.id);
    // Get the download URL for the image stored in Firebase Storage

    const storageRef = storage().ref(`images/${docRef.id}`);
    const url = await storageRef.getDownloadURL();
    // console.log('Image Download URL:', url);
    return imageURL; // Return the download URL
  } catch (e) {
    console.error('Something went wrong: ' + e);
    return null; // Handle the error as needed
  }
};
