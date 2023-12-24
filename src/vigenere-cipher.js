const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let charCode = ((message.charCodeAt(i) - 65 + (key.charCodeAt(j % key.length) - 65)) % 26) + 65;
        encryptedMessage += String.fromCharCode(charCode);
        j++;
      } else {
        encryptedMessage += message.charAt(i);
      }
    }

    if (this.isReverse) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
        let charCode = ((encryptedMessage.charCodeAt(i) - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(charCode);
        j++;
      } else {
        decryptedMessage += encryptedMessage.charAt(i);
      }
    }

    if (this.isReverse) {
      return decryptedMessage;
    } else {
      return decryptedMessage.split('').reverse().join('');
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};
