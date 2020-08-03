function censor(text, censoredWords, censorSymbol = '#') {
	  const replaceBanned = (match) => censorSymbol.repeat(match.length);
	  const filter = new RegExp(censoredWords.join('|'), 'gi');

	  return text.replace(filter, replaceBanned);
}
module.exports = censor;