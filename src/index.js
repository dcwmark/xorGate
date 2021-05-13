import brain from 'brain.js';

import './style.css';

const config = {
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  binaryThresh: 0.5,
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

net.train(trainingData);

const testSet = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const neuralNetwork = testSet.map(each => {
  return `${each[0]} XOR ${each[1]} :: ${net.run([each[0], each[1]])}`;
});
document.getElementById("NeuralNetwork").innerHTML =
  '<h1>NeuralNetwork</h1>' + neuralNetwork.join('<br/>');

const neuralNetworkDiagram = brain.utilities.toSVG(net);
document.getElementById("NeuralNetworkDiagram").innerHTML = neuralNetworkDiagram;

const rnnConf = {
  inputSize: 20,
  inputRange: 20,
  hiddenLayers: [20, 20],
  outputSize: 20,
  learningRate: 0.01,
  decayRate: 0.999,
};

const rnn = new brain.recurrent.RNN(rnnConf);

rnn.train(trainingData);

const rnnNetwork = testSet.map(each => {
  return `${each[0]} XOR ${each[1]} :: ${rnn.run([each[0], each[1]])}`;
});
document.getElementById("RNNNeuralNetwork").innerHTML =
  '<h1>RNN (Recurrent) NeuralNetwork</h1>' + rnnNetwork.join('<br/>');

const rnnNetworkDiagram = brain.utilities.toSVG(rnn);
document.getElementById("RNNNeuralNetworkDiagram").innerHTML = rnnNetworkDiagram;

