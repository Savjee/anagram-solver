(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/remove-accents/index.js
  var require_remove_accents = __commonJS({
    "node_modules/remove-accents/index.js"(exports, module) {
      var characterMap = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\u1EA4": "A",
        "\u1EAE": "A",
        "\u1EB2": "A",
        "\u1EB4": "A",
        "\u1EB6": "A",
        "\xC6": "AE",
        "\u1EA6": "A",
        "\u1EB0": "A",
        "\u0202": "A",
        "\xC7": "C",
        "\u1E08": "C",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\u1EBE": "E",
        "\u1E16": "E",
        "\u1EC0": "E",
        "\u1E14": "E",
        "\u1E1C": "E",
        "\u0206": "E",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\u1E2E": "I",
        "\u020A": "I",
        "\xD0": "D",
        "\xD1": "N",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\u1ED0": "O",
        "\u1E4C": "O",
        "\u1E52": "O",
        "\u020E": "O",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xDD": "Y",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\u1EA5": "a",
        "\u1EAF": "a",
        "\u1EB3": "a",
        "\u1EB5": "a",
        "\u1EB7": "a",
        "\xE6": "ae",
        "\u1EA7": "a",
        "\u1EB1": "a",
        "\u0203": "a",
        "\xE7": "c",
        "\u1E09": "c",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\u1EBF": "e",
        "\u1E17": "e",
        "\u1EC1": "e",
        "\u1E15": "e",
        "\u1E1D": "e",
        "\u0207": "e",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\u1E2F": "i",
        "\u020B": "i",
        "\xF0": "d",
        "\xF1": "n",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\u1ED1": "o",
        "\u1E4D": "o",
        "\u1E53": "o",
        "\u020F": "o",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xFD": "y",
        "\xFF": "y",
        "\u0100": "A",
        "\u0101": "a",
        "\u0102": "A",
        "\u0103": "a",
        "\u0104": "A",
        "\u0105": "a",
        "\u0106": "C",
        "\u0107": "c",
        "\u0108": "C",
        "\u0109": "c",
        "\u010A": "C",
        "\u010B": "c",
        "\u010C": "C",
        "\u010D": "c",
        "C\u0306": "C",
        "c\u0306": "c",
        "\u010E": "D",
        "\u010F": "d",
        "\u0110": "D",
        "\u0111": "d",
        "\u0112": "E",
        "\u0113": "e",
        "\u0114": "E",
        "\u0115": "e",
        "\u0116": "E",
        "\u0117": "e",
        "\u0118": "E",
        "\u0119": "e",
        "\u011A": "E",
        "\u011B": "e",
        "\u011C": "G",
        "\u01F4": "G",
        "\u011D": "g",
        "\u01F5": "g",
        "\u011E": "G",
        "\u011F": "g",
        "\u0120": "G",
        "\u0121": "g",
        "\u0122": "G",
        "\u0123": "g",
        "\u0124": "H",
        "\u0125": "h",
        "\u0126": "H",
        "\u0127": "h",
        "\u1E2A": "H",
        "\u1E2B": "h",
        "\u0128": "I",
        "\u0129": "i",
        "\u012A": "I",
        "\u012B": "i",
        "\u012C": "I",
        "\u012D": "i",
        "\u012E": "I",
        "\u012F": "i",
        "\u0130": "I",
        "\u0131": "i",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u1E30": "K",
        "\u1E31": "k",
        "K\u0306": "K",
        "k\u0306": "k",
        "\u0139": "L",
        "\u013A": "l",
        "\u013B": "L",
        "\u013C": "l",
        "\u013D": "L",
        "\u013E": "l",
        "\u013F": "L",
        "\u0140": "l",
        "\u0141": "l",
        "\u0142": "l",
        "\u1E3E": "M",
        "\u1E3F": "m",
        "M\u0306": "M",
        "m\u0306": "m",
        "\u0143": "N",
        "\u0144": "n",
        "\u0145": "N",
        "\u0146": "n",
        "\u0147": "N",
        "\u0148": "n",
        "\u0149": "n",
        "N\u0306": "N",
        "n\u0306": "n",
        "\u014C": "O",
        "\u014D": "o",
        "\u014E": "O",
        "\u014F": "o",
        "\u0150": "O",
        "\u0151": "o",
        "\u0152": "OE",
        "\u0153": "oe",
        "P\u0306": "P",
        "p\u0306": "p",
        "\u0154": "R",
        "\u0155": "r",
        "\u0156": "R",
        "\u0157": "r",
        "\u0158": "R",
        "\u0159": "r",
        "R\u0306": "R",
        "r\u0306": "r",
        "\u0212": "R",
        "\u0213": "r",
        "\u015A": "S",
        "\u015B": "s",
        "\u015C": "S",
        "\u015D": "s",
        "\u015E": "S",
        "\u0218": "S",
        "\u0219": "s",
        "\u015F": "s",
        "\u0160": "S",
        "\u0161": "s",
        "\u0162": "T",
        "\u0163": "t",
        "\u021B": "t",
        "\u021A": "T",
        "\u0164": "T",
        "\u0165": "t",
        "\u0166": "T",
        "\u0167": "t",
        "T\u0306": "T",
        "t\u0306": "t",
        "\u0168": "U",
        "\u0169": "u",
        "\u016A": "U",
        "\u016B": "u",
        "\u016C": "U",
        "\u016D": "u",
        "\u016E": "U",
        "\u016F": "u",
        "\u0170": "U",
        "\u0171": "u",
        "\u0172": "U",
        "\u0173": "u",
        "\u0216": "U",
        "\u0217": "u",
        "V\u0306": "V",
        "v\u0306": "v",
        "\u0174": "W",
        "\u0175": "w",
        "\u1E82": "W",
        "\u1E83": "w",
        "X\u0306": "X",
        "x\u0306": "x",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "Y\u0306": "Y",
        "y\u0306": "y",
        "\u0179": "Z",
        "\u017A": "z",
        "\u017B": "Z",
        "\u017C": "z",
        "\u017D": "Z",
        "\u017E": "z",
        "\u017F": "s",
        "\u0192": "f",
        "\u01A0": "O",
        "\u01A1": "o",
        "\u01AF": "U",
        "\u01B0": "u",
        "\u01CD": "A",
        "\u01CE": "a",
        "\u01CF": "I",
        "\u01D0": "i",
        "\u01D1": "O",
        "\u01D2": "o",
        "\u01D3": "U",
        "\u01D4": "u",
        "\u01D5": "U",
        "\u01D6": "u",
        "\u01D7": "U",
        "\u01D8": "u",
        "\u01D9": "U",
        "\u01DA": "u",
        "\u01DB": "U",
        "\u01DC": "u",
        "\u1EE8": "U",
        "\u1EE9": "u",
        "\u1E78": "U",
        "\u1E79": "u",
        "\u01FA": "A",
        "\u01FB": "a",
        "\u01FC": "AE",
        "\u01FD": "ae",
        "\u01FE": "O",
        "\u01FF": "o",
        "\xDE": "TH",
        "\xFE": "th",
        "\u1E54": "P",
        "\u1E55": "p",
        "\u1E64": "S",
        "\u1E65": "s",
        "X\u0301": "X",
        "x\u0301": "x",
        "\u0403": "\u0413",
        "\u0453": "\u0433",
        "\u040C": "\u041A",
        "\u045C": "\u043A",
        "A\u030B": "A",
        "a\u030B": "a",
        "E\u030B": "E",
        "e\u030B": "e",
        "I\u030B": "I",
        "i\u030B": "i",
        "\u01F8": "N",
        "\u01F9": "n",
        "\u1ED2": "O",
        "\u1ED3": "o",
        "\u1E50": "O",
        "\u1E51": "o",
        "\u1EEA": "U",
        "\u1EEB": "u",
        "\u1E80": "W",
        "\u1E81": "w",
        "\u1EF2": "Y",
        "\u1EF3": "y",
        "\u0200": "A",
        "\u0201": "a",
        "\u0204": "E",
        "\u0205": "e",
        "\u0208": "I",
        "\u0209": "i",
        "\u020C": "O",
        "\u020D": "o",
        "\u0210": "R",
        "\u0211": "r",
        "\u0214": "U",
        "\u0215": "u",
        "B\u030C": "B",
        "b\u030C": "b",
        "\u010C\u0323": "C",
        "\u010D\u0323": "c",
        "\xCA\u030C": "E",
        "\xEA\u030C": "e",
        "F\u030C": "F",
        "f\u030C": "f",
        "\u01E6": "G",
        "\u01E7": "g",
        "\u021E": "H",
        "\u021F": "h",
        "J\u030C": "J",
        "\u01F0": "j",
        "\u01E8": "K",
        "\u01E9": "k",
        "M\u030C": "M",
        "m\u030C": "m",
        "P\u030C": "P",
        "p\u030C": "p",
        "Q\u030C": "Q",
        "q\u030C": "q",
        "\u0158\u0329": "R",
        "\u0159\u0329": "r",
        "\u1E66": "S",
        "\u1E67": "s",
        "V\u030C": "V",
        "v\u030C": "v",
        "W\u030C": "W",
        "w\u030C": "w",
        "X\u030C": "X",
        "x\u030C": "x",
        "Y\u030C": "Y",
        "y\u030C": "y",
        "A\u0327": "A",
        "a\u0327": "a",
        "B\u0327": "B",
        "b\u0327": "b",
        "\u1E10": "D",
        "\u1E11": "d",
        "\u0228": "E",
        "\u0229": "e",
        "\u0190\u0327": "E",
        "\u025B\u0327": "e",
        "\u1E28": "H",
        "\u1E29": "h",
        "I\u0327": "I",
        "i\u0327": "i",
        "\u0197\u0327": "I",
        "\u0268\u0327": "i",
        "M\u0327": "M",
        "m\u0327": "m",
        "O\u0327": "O",
        "o\u0327": "o",
        "Q\u0327": "Q",
        "q\u0327": "q",
        "U\u0327": "U",
        "u\u0327": "u",
        "X\u0327": "X",
        "x\u0327": "x",
        "Z\u0327": "Z",
        "z\u0327": "z"
      };
      var chars = Object.keys(characterMap).join("|");
      var allAccents = new RegExp(chars, "g");
      var firstAccent = new RegExp(chars, "");
      var removeAccents = function(string) {
        return string.replace(allAccents, function(match) {
          return characterMap[match];
        });
      };
      var hasAccents = function(string) {
        return !!string.match(firstAccent);
      };
      module.exports = removeAccents;
      module.exports.has = hasAccents;
      module.exports.remove = removeAccents;
    }
  });

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/crypto-js/core.js
  var require_core = __commonJS({
    "node_modules/crypto-js/core.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define([], factory);
        } else {
          root.CryptoJS = factory();
        }
      })(exports, function() {
        var CryptoJS = CryptoJS || function(Math2, undefined) {
          var crypto;
          if (typeof window !== "undefined" && window.crypto) {
            crypto = window.crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
          }
          if (!crypto && typeof window !== "undefined" && window.msCrypto) {
            crypto = window.msCrypto;
          }
          if (!crypto && typeof global !== "undefined" && global.crypto) {
            crypto = global.crypto;
          }
          if (!crypto && typeof __require === "function") {
            try {
              crypto = require_crypto();
            } catch (err) {
            }
          }
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if (typeof crypto.getRandomValues === "function") {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
              }
              if (typeof crypto.randomBytes === "function") {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || function() {
            function F() {
            }
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = function() {
            return {
              extend: function(overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                  subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              init: function() {
              },
              mixIn: function(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i = 0; i < thatSigBytes; i++) {
                  var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
              } else {
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math2.ceil(sigBytes / 4);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            random: function(nBytes) {
              var words = [];
              for (var i = 0; i < nBytes; i += 4) {
                words.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              }
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
              }
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            _append: function(data) {
              if (typeof data == "string") {
                data = Utf8.parse(data);
              }
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              if (doFlush) {
                nBlocksReady = Math2.ceil(nBlocksReady);
              } else {
                nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
              }
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                  this._doProcessBlock(dataWords, offset);
                }
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            finalize: function(messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 512 / 32,
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        }(Math);
        return CryptoJS;
      });
    }
  });

  // node_modules/crypto-js/md5.js
  var require_md5 = __commonJS({
    "node_modules/crypto-js/md5.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        (function(Math2) {
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var T = [];
          (function() {
            for (var i = 0; i < 64; i++) {
              T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
            }
          })();
          var MD5 = C_algo.MD5 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                1732584193,
                4023233417,
                2562383102,
                271733878
              ]);
            },
            _doProcessBlock: function(M, offset) {
              for (var i = 0; i < 16; i++) {
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
              }
              var H = this._hash.words;
              var M_offset_0 = M[offset + 0];
              var M_offset_1 = M[offset + 1];
              var M_offset_2 = M[offset + 2];
              var M_offset_3 = M[offset + 3];
              var M_offset_4 = M[offset + 4];
              var M_offset_5 = M[offset + 5];
              var M_offset_6 = M[offset + 6];
              var M_offset_7 = M[offset + 7];
              var M_offset_8 = M[offset + 8];
              var M_offset_9 = M[offset + 9];
              var M_offset_10 = M[offset + 10];
              var M_offset_11 = M[offset + 11];
              var M_offset_12 = M[offset + 12];
              var M_offset_13 = M[offset + 13];
              var M_offset_14 = M[offset + 14];
              var M_offset_15 = M[offset + 15];
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              a = FF(a, b, c, d, M_offset_0, 7, T[0]);
              d = FF(d, a, b, c, M_offset_1, 12, T[1]);
              c = FF(c, d, a, b, M_offset_2, 17, T[2]);
              b = FF(b, c, d, a, M_offset_3, 22, T[3]);
              a = FF(a, b, c, d, M_offset_4, 7, T[4]);
              d = FF(d, a, b, c, M_offset_5, 12, T[5]);
              c = FF(c, d, a, b, M_offset_6, 17, T[6]);
              b = FF(b, c, d, a, M_offset_7, 22, T[7]);
              a = FF(a, b, c, d, M_offset_8, 7, T[8]);
              d = FF(d, a, b, c, M_offset_9, 12, T[9]);
              c = FF(c, d, a, b, M_offset_10, 17, T[10]);
              b = FF(b, c, d, a, M_offset_11, 22, T[11]);
              a = FF(a, b, c, d, M_offset_12, 7, T[12]);
              d = FF(d, a, b, c, M_offset_13, 12, T[13]);
              c = FF(c, d, a, b, M_offset_14, 17, T[14]);
              b = FF(b, c, d, a, M_offset_15, 22, T[15]);
              a = GG(a, b, c, d, M_offset_1, 5, T[16]);
              d = GG(d, a, b, c, M_offset_6, 9, T[17]);
              c = GG(c, d, a, b, M_offset_11, 14, T[18]);
              b = GG(b, c, d, a, M_offset_0, 20, T[19]);
              a = GG(a, b, c, d, M_offset_5, 5, T[20]);
              d = GG(d, a, b, c, M_offset_10, 9, T[21]);
              c = GG(c, d, a, b, M_offset_15, 14, T[22]);
              b = GG(b, c, d, a, M_offset_4, 20, T[23]);
              a = GG(a, b, c, d, M_offset_9, 5, T[24]);
              d = GG(d, a, b, c, M_offset_14, 9, T[25]);
              c = GG(c, d, a, b, M_offset_3, 14, T[26]);
              b = GG(b, c, d, a, M_offset_8, 20, T[27]);
              a = GG(a, b, c, d, M_offset_13, 5, T[28]);
              d = GG(d, a, b, c, M_offset_2, 9, T[29]);
              c = GG(c, d, a, b, M_offset_7, 14, T[30]);
              b = GG(b, c, d, a, M_offset_12, 20, T[31]);
              a = HH(a, b, c, d, M_offset_5, 4, T[32]);
              d = HH(d, a, b, c, M_offset_8, 11, T[33]);
              c = HH(c, d, a, b, M_offset_11, 16, T[34]);
              b = HH(b, c, d, a, M_offset_14, 23, T[35]);
              a = HH(a, b, c, d, M_offset_1, 4, T[36]);
              d = HH(d, a, b, c, M_offset_4, 11, T[37]);
              c = HH(c, d, a, b, M_offset_7, 16, T[38]);
              b = HH(b, c, d, a, M_offset_10, 23, T[39]);
              a = HH(a, b, c, d, M_offset_13, 4, T[40]);
              d = HH(d, a, b, c, M_offset_0, 11, T[41]);
              c = HH(c, d, a, b, M_offset_3, 16, T[42]);
              b = HH(b, c, d, a, M_offset_6, 23, T[43]);
              a = HH(a, b, c, d, M_offset_9, 4, T[44]);
              d = HH(d, a, b, c, M_offset_12, 11, T[45]);
              c = HH(c, d, a, b, M_offset_15, 16, T[46]);
              b = HH(b, c, d, a, M_offset_2, 23, T[47]);
              a = II(a, b, c, d, M_offset_0, 6, T[48]);
              d = II(d, a, b, c, M_offset_7, 10, T[49]);
              c = II(c, d, a, b, M_offset_14, 15, T[50]);
              b = II(b, c, d, a, M_offset_5, 21, T[51]);
              a = II(a, b, c, d, M_offset_12, 6, T[52]);
              d = II(d, a, b, c, M_offset_3, 10, T[53]);
              c = II(c, d, a, b, M_offset_10, 15, T[54]);
              b = II(b, c, d, a, M_offset_1, 21, T[55]);
              a = II(a, b, c, d, M_offset_8, 6, T[56]);
              d = II(d, a, b, c, M_offset_15, 10, T[57]);
              c = II(c, d, a, b, M_offset_6, 15, T[58]);
              b = II(b, c, d, a, M_offset_13, 21, T[59]);
              a = II(a, b, c, d, M_offset_4, 6, T[60]);
              d = II(d, a, b, c, M_offset_11, 10, T[61]);
              c = II(c, d, a, b, M_offset_2, 15, T[62]);
              b = II(b, c, d, a, M_offset_9, 21, T[63]);
              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
              var nBitsTotalL = nBitsTotal;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
              data.sigBytes = (dataWords.length + 1) * 4;
              this._process();
              var hash = this._hash;
              var H = hash.words;
              for (var i = 0; i < 4; i++) {
                var H_i = H[i];
                H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
              }
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          function FF(a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function GG(a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          C.MD5 = Hasher._createHelper(MD5);
          C.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);
        return CryptoJS.MD5;
      });
    }
  });

  // node_modules/html-es6cape/dist/index.cjs.js
  var require_index_cjs = __commonJS({
    "node_modules/html-es6cape/dist/index.cjs.js"(exports, module) {
      "use strict";
      var t = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" };
      var e = new RegExp(Object.keys(t).join("|"), "g");
      module.exports = function(n) {
        return n === void 0 && (n = ""), String(n).replace(e, function(e2) {
          return t[e2];
        });
      };
    }
  });

  // node_modules/html-template-tag/dist/index.cjs.js
  var require_index_cjs2 = __commonJS({
    "node_modules/html-template-tag/dist/index.cjs.js"(exports, module) {
      "use strict";
      function r(r2) {
        return r2 && typeof r2 == "object" && "default" in r2 ? r2 : { default: r2 };
      }
      var e = r(require_index_cjs());
      module.exports = function(r2) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return r2.raw.reduce(function(n2, u, a) {
          var i = t[a - 1];
          return Array.isArray(i) ? i = i.join("") : r2.raw[a - 1] && r2.raw[a - 1].endsWith("$") ? n2 = n2.slice(0, -1) : i = e.default(i), n2 + i + u;
        });
      };
    }
  });

  // src-common/alphabetize.ts
  var import_remove_accents = __toESM(require_remove_accents());
  function alphabetize(word) {
    const alpha = word.toLowerCase().split("").sort().join("");
    return (0, import_remove_accents.remove)(alpha);
  }

  // src-common/getHashPrefix.ts
  var import_md5 = __toESM(require_md5());
  var PREFIX_LENGTH = 3;
  function getHashPrefix(word) {
    return (0, import_md5.default)(word).toString().substring(0, PREFIX_LENGTH);
  }

  // src-common/languages.ts
  var languages = [
    {
      name: "English",
      code: "en"
    },
    {
      name: "Dutch",
      code: "nl"
    },
    {
      name: "French",
      code: "fr"
    },
    {
      name: "Spanish",
      code: "es"
    }
  ];

  // src-www/js/main.ts
  var html = require_index_cjs2();
  var $ = function(id) {
    return document.getElementById(id);
  };
  var anagramInpt = $("anagram");
  var solveButton = $("solveButton");
  var languageSelect = $("language");
  var resultsDiv = $("results");
  async function solve() {
    const alpha = alphabetize(anagramInpt.value);
    const prefix = getHashPrefix(alpha);
    const lang = languageSelect.value;
    const res = await fetch(`api/v1/${lang}/${prefix}.json`);
    const data = await res.json();
    const solutions = data.data.find((el) => el.alpha === alpha);
    if (solutions && solutions.words.length > 0) {
      console.log(solutions.words);
      console.log(typeof solutions.words);
      resultsDiv.innerHTML = html`
            <ul>
                ${solutions.words.map((solution) => {
        return `
                    <li>${solution}</li>
                `;
      })}
            </ul>
        `;
    } else {
      resultsDiv.innerHTML = `
            <ul>
                <li>No results</li>
            </ul>
        `;
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    languageSelect.innerHTML = html`
        ${languages.map((lang) => `
            <option value="${lang.code}">${lang.name}</option>
        `)}
    `;
  });
  anagramInpt.addEventListener("keyup", function(event) {
    if (event.key === "Enter" || event.key === "13") {
      solve();
    }
  });
  solveButton.addEventListener("click", () => {
    solve();
  });
})();
