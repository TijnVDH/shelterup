db.collection('shelter-up-pwa').onSnapshot((snapshot) => {
    console.log(snapshot.docChanges());
})