const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const dbconfig = require("../../db/db.config");

const conection = admin.initializeApp({
  credential: admin.credential.cert(dbconfig.firebase.credentials),
});

class FirebaseContainer {
  constructor(collection) {
    const db = getFirestore();
    this.query = db.collection(collection);
  }

  static connect() {
    return conection;
  }

  async getAll(filter = {}) {
    const docRef = await this.query.get();
    const documents = docRef.docChanges;
    return documents.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  async getById(id) {
    const docRef = await this.query.get(id);
    if (!docRef) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    const document = await docRef.get();
    return document.data();
  }

  async save(item) {
    const docRef = this.query.doc();
    return await docRef.set(item);
  }

  async update(id, item) {
    const docRef = this.query.doc(id);
    if (!docRef) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return await docRef.update(item);
  }

  async delete(id) {
    const docRef = this.query.doc(id);
    return await docRef.delete();
  }
}

module.exports = FirebaseContainer;
