import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyBivht94AsRuJuTJ8-fWTmPYmTB1dKj7Ts",
  	authDomain: "school70site.firebaseapp.com",
  	databaseURL: "https://school70site.firebaseio.com",
  	projectId: "school70site",
  	storageBucket: "school70site.appspot.com",
  	messagingSenderId: "481783476446",
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		// this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()