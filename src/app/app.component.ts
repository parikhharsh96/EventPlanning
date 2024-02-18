import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmshR7QaS9KvH8MXQZxN0r9nhLmtgUXe0",
  authDomain: "event-planning-3828b.firebaseapp.com",
  projectId: "event-planning-3828b",
  storageBucket: "event-planning-3828b.appspot.com",
  messagingSenderId: "245390962153",
  appId: "1:245390962153:web:55d5b3f690079f5f7b6f78",
  measurementId: "G-63VED2QPSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EventPlanning';
}
