import { BehaviorSubject } from "rxjs";
import app from "firebase/app";
// import app from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

class Firebase {
  colls = {
    events: { ref: null, obs: null, docs: new BehaviorSubject([]) },
    venues: { ref: null, obs: null, docs: new BehaviorSubject([]) }
  };
  state = null;

  constructor() {
    app.initializeApp(firebaseConfig);
    // app.auth = app.auth();
    let db = app.firestore();
    this.setupRefs(db);
  }
  setupRefs(db: any) {
    for (let c in this.colls) {
      this.colls[c]["ref"] = db.collection(c);
    }
  }
  subscribeToCollectionFromFirestore = (
    key: string,
    thing: any,
    updateFunc: any
  ) => {
    this.colls[key].ref.onSnapshot(res => {
      let arr = res.docs.map(doc => {
        let t = new thing();
        t.setConfig(doc.data());
        return t;
      });
      updateFunc(arr);
    });
  };
  setDoc = (collName: string, docId: string, doc: any) => {
    console.log(`setDoc(collName:${collName}, docId:${docId}, doc:${doc})`);
    this.colls[collName].ref.doc(docId).set(doc);
  };
  deleteDoc = (collName: string, docId: string) => {
    console.log(`deleteDoc(collname:${collName}, docId:${docId})`);
    this.colls[collName].ref.doc(docId).delete();
  };
}
const fb = new Firebase();
export default fb;
