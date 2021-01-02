
import { firebase, auth } from "../../firebaseConfig";
export class Authentication {
  constructor() {
    this.authUpdatedStatus = {
      online: false,
      loggedUser: {},
      set setUser(result) {
        const shouldLoggedUserUpdate = this.online === true && null === result;
        switch (shouldLoggedUserUpdate) {
          case true:
            this.loggedUser = {};
            break;

          default:
            const {
              additionalUserInfo: { isNewUser, profile, providerId },
              user: { metadata }
            } = void 0 !== result && null !== result && result;
            this.loggedUser = {
              isNewUser: isNewUser,
              authType: providerId,
              profile: {
                id: profile.id,
                localeLanguage: profile.locale,
                name: profile.name,
                email: profile.email,
                verified_email: profile.verified_email,
                avatar: profile.picture
              },
              metadata: metadata
            };
            break;
        }
      }
    };
  }
  login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const user = auth.currentUser;
      if (!user.hasOwnProperty("uid")) this.authUpdatedStatus.online = false;
      this.authUpdatedStatus.setUser = result;
      this.authUpdatedStatus.online = true;
    } catch (error) {
      console.error(JSON.stringify(error.message));
    }
  };
  logout = () => {
    auth
      .signOut()
      .then(() => {
        this.authUpdatedStatus.setUser = null;
        this.authUpdatedStatus.online = false;
      })
      .catch((error) => {
        console.log(JSON.stringify(error.message));
      });
  };
  currentLoginState = () => {
    console.log(this.authUpdatedStatus);
    return this.authUpdatedStatus;
  };
}

