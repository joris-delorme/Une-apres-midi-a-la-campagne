import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7M7ZiRIQtHNtIAb5JbJgKdNiBI1LTW4E",
    authDomain: "un-apres-midi-a-la-campagne.firebaseapp.com",
    projectId: "un-apres-midi-a-la-campagne",
    storageBucket: "un-apres-midi-a-la-campagne.appspot.com",
    messagingSenderId: "670745680086",
    appId: "1:670745680086:web:3e813fd9374fc87a8fd177"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        return err.message
    }
};

const logout = () => {
    signOut(auth)
        .then(() => { window.location.reload(true); })
};

const deleteData = async (dataID) => {
    await deleteDoc(doc(db, "prestations", dataID))
    .then(() => window.location.reload(true))
}

const saveData = async (d) => {

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion


    const storageRef = ref(storage, 'prestations/' + d?.title + '/banner.jpg');
    const uploadTask = uploadBytesResumable(storageRef, d?.image);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    console.log('Upload is paused');
                    break;
            }
        },
        (error) => {
            console.log("Error : ");
            console.log(error);
            return error
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                const data = { ...d, image: downloadURL }
                await setDoc(doc(db, "prestations", data.title.toLowerCase().split(" ").join("-")), data)
                    .then(() => {
                        alert('Ajouté avec succès')
                        window.location.reload(true)
                    })
                    .catch((err) => alert(err))
            });
        }
    );

}

const updateData = async (data) => {
    await updateDoc(doc(db, 'prestations/' + data.id), data)
        .then(() => {
            alert('Modifier avec succès')
            window.location.reload(true)
        })
        .catch((err) => alert(err))
}

export {
    auth,
    db,
    logInWithEmailAndPassword,
    logout,
    saveData,
    deleteData,
    updateData
};