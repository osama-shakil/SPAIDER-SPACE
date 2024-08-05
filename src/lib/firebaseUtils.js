export const getFirebase = async () => {
    const firebase = (await import('../config/firebase')).default; // Adjust the path as necessary
    return firebase;
};

// Function to get the users collection from Firestore
export const getUsersCollection = async () => {
    const firebase = await getFirebase();
    return firebase.firestore().collection("users");
};