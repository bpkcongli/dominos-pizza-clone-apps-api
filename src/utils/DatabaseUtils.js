const {MongoClient} = require('mongodb');

module.exports = {
  conn: null,

  async createConnection() {
    try {
      if (this.conn === null) {
        this.conn = await MongoClient.connect(process.env.MONGO_HOST, {
          useNewUrlParser: true,
        });
      }
      return await this.conn.db(process.env.DATABASE_NAME);
    } catch (err) {
      console.error(err);
    }
  },

  async closeConnection() {
    try {
      await this.conn.close();
      this.conn = null;
    } catch (err) {
      console.error(err);
    }
  },
};
