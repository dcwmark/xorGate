import brain from 'brain.js';

import './style.css';

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]);

const testSet = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const output = testSet.map(each => {
  return `${each[0]} XOR ${each[1]} :: ${net.run([each[0], each[1]])}`;
});
console.log(output);

document.getElementById("app").innerHTML = output.join('<br/>');

const diagram = brain.utilities.toSVG(net);
document.getElementById("diagram").innerHTML = diagram;
