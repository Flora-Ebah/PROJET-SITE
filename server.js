const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

// ... le reste de votre configuration serveur
