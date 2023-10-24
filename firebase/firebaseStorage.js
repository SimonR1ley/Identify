import storage from '@react-native-firebase/storage';

// export const uploadToStorage = async (fileUri, refName) => {
//   console.log('Storage', fileUri);

//   try {
//     console.log('Busy Uploading');

//     // Fetch the file as a blob using the Fetch API
//     const response = await fetch(fileUri);
//     const blob = await response.blob();

//     // Upload the blob to Firebase Storage
//     const uploadRef = storage().ref(refName);
//     const uploadSnapshot = await uploadRef.put(blob);

//     // Get the download URL for the uploaded file
//     const downloadURL = await storage()
//       .ref(uploadSnapshot.ref)
//       .getDownloadURL();

//     return downloadURL;
//   } catch (error) {
//     console.error('Error while uploading:', error);
//     throw error;
//   }
// };

export const uploadToStorage = (fileUri, refName) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = storage().ref(refName);
    const response = await fetch(fileUri);
    const blob = await response.blob();

    const uploadTask = storageRef.put(blob);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // You can track the progress here
        console.log(snapshot);
      },
      error => {
        // Handle errors
        console.log(error);
        reject(error);
      },
      async () => {
        try {
          // Get the download URL and resolve the promise with it
          const downloadURL = await storageRef.getDownloadURL();
          resolve(downloadURL);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      },
    );
  });
};
