import { firebase, auth } from "../../firebaseConfig";
export class Authentication {
  constructor() {
    this.authUpdatedStatus = {
      online: true,
      loggedUser: {},
      set setUser(result) {
        if (this.online === false && void 0 !== result) this.loggedUser = {};
        const {
          additionalUserInfo: { isNewUser, profile, providerId },
          user: { metadata }
        } = result;
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
      }
    };
  }
  login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);

      this.authUpdatedStatus.setUser = result;
      console.log(this.authUpdatedStatus);
    } catch (error) {
      console.error(JSON.stringify(error.message));
    }

    // console.log(auth);
    // console.log(firebase);
    // console.log(result);
    // this.authUpdatedStatus.prototype._isUserSubscribed = function () {};
    // this.authUpdatedStatus.prototype._lastSignedOn = function () {};
    // this.authUpdatedStatus.prototype._subcribedOn = function () {};
  };
}
