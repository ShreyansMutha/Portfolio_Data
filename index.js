// used to grab onto firebase -> Connection
var config = {
    apiKey: "AIzaSyCJXJFmLrnm_i03qGW5_OMhZudpznK9Poc",
    authDomain: "shree-s-portfolio.firebaseapp.com",
    databaseURL: "https://shree-s-portfolio.firebaseio.com",
    projectId: "shree-s-portfolio",
    storageBucket: "shree-s-portfolio.appspot.com",
    messagingSenderId: "966411242090",
    appId: "1:966411242090:web:0650a388abe76e76f15813",
    measurementId: "G-DL2Q0C01R8"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('Contact_Data');

const tablebody = document.querySelector('#tableforjs');

// getting data from firebase and showing in table format
formMessage.on("value", function (snapshot) {
    snapshot.forEach(function (chilSnapshot) {
        var tr = document.createElement('tr');
        var data = chilSnapshot.val();
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        td1.textContent = data.name;
        td2.textContent = data.email;
        td3.textContent = data.purpose;
        td4.textContent = data.message;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tablebody.appendChild(tr);
    });
    document.getElementsByClassName('container')
})



