
/**
 * Noise Class 
 */
const MathUtility = require('../../utils/MathUtility');
const Asset = require('./Asset');

class Noise extends Asset { }

//defining static variables
Noise.GAUSSIAN = 'Gaussian';
Noise.UNIFORM = 'Uniform';
Noise.MULTIPLICATIVE = 'Multiplicative';
Noise.IMPULSE = 'Impulse';
Noise.LAPLIACIAN = 'Laplacian';
Noise.POISSON = 'Poisson';
Noise.Default = Noise.GAUSSIAN;
Noise.noiseArray = [Noise.GAUSSIAN, Noise.UNIFORM, Noise.MULTIPLICATIVE, Noise.IMPULSE, Noise.LAPLIACIAN, Noise.POISSON];

Noise.getRandom = function () {
    randomNumber = MathUtility.getRandomNumber(0, Noise.noiseArray.length)
    return Noise.noiseArray[randomNumber];
};

Noise.isValid = function (noise) {
    if (Noise.noiseArray.indexOf(noise) >= 0) {
        return true;
    }
    return false;
};

module.exports = Noise;
