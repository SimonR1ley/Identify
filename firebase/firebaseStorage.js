import storage from '@react-native-firebase/storage';

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
