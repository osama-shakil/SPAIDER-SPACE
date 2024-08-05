import { getFirebase } from "@/lib/firebaseUtils";
import toast from "react-hot-toast";




/**
 * Converts a timestamp object with seconds and nanoseconds to a human-readable date string.
 * @param {Object} timestamp - The timestamp object with seconds and nanoseconds.
 * @param {number} timestamp.seconds - The seconds part of the timestamp.
 * @param {number} timestamp.nanoseconds - The nanoseconds part of the timestamp.
 * @returns {string} - The formatted date string.
 */
export function convertToDate(timestamp) {
  const { seconds } = timestamp;

  const date = new Date(seconds * 1000);

  return date.toLocaleDateString(); 
}

   export const convertTimestampToDate = (timestamp) => {
    console.log('timestamp: ', timestamp);
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-GB");
  };

  export function convertDateFormat(isoDateString) {
    const date = new Date(isoDateString);
  
    // Get the day, month, and year from the date
    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1 for 1-12
    let year = date.getFullYear().toString().substr(-2); // Get last two digits of the year
  
    // Ensure day and month are always two digits
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
  
    return `${month}/${day}/${year}`;
  }

  export function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const dayOfWeek = date.getDay(); // This returns a number (0-6) representing the day of the week
    return days[dayOfWeek];
}

export const getInitials = (name) => {
  if (!name) return '';

  const words = name.split(' ');
  const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
  return initials;
};

export const validateVideoLink = (link) => {
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  const vimeoRegex = /^(https?\:\/\/)?(www\.)?(vimeo\.com|player\.vimeo\.com\/video)\/.+$/;
  const loomRegex = /^(https?\:\/\/)?(www\.)?(loom\.com)\/.+$/;
  const wistiaRegex = /^(https?\:\/\/)?(www\.)?(wistia\.com|wi\.st)\/.+$/;

  return youtubeRegex.test(link) || vimeoRegex.test(link) || loomRegex.test(link) || wistiaRegex.test(link);
};


export const uploadFile = async (file, storagePath) => {
  try {
    const firebase = await getFirebase();
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const fileRef = storageRef.child(storagePath);

    const uploadTaskSnapshot = await fileRef.put(file);

    const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
    console.log("File uploaded successfully");
    return downloadURL;

  } catch (error) {
    console.error("Error: ", error);
    toast.error("Error uploading file, please try again");
    return false;
  }
};

export const getLevel = (points) => {
  if (points >= 33015) return 9;
  if (points >= 8015) return 8;
  if (points >= 2015) return 7;
  if (points >= 515) return 6;
  if (points >= 155) return 5;
  if (points >= 65) return 4;
  if (points >= 20) return 3;
  if (points >= 5) return 2;
  return 1;
};

export function capitalizeFullName(fullName) {
  return fullName
    .split(' ')
    .map(name => capitalizeFirstLetter(name))
    .join(' ');
}