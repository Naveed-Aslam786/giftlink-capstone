/**
 * sentiment/index.js
 * Example sentiment service using `natural` package (Task requirement: import natural)
 */
const natural = require('natural'); // <-- imports natural (required by task)
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

function analyze(text) {
  if (!text) return { score: 0 };
  const tokens = new natural.WordTokenizer().tokenize(text);
  const score = analyzer.getSentiment(tokens);
  return { score };
}

module.exports = { analyze };
