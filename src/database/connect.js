require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@larasantanadev.5p4nmo1.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=larasantanadev`;

    await mongoose.connect(uri);
    console.log('Conectado ao MongoDB!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

module.exports = connectToDatabase;
