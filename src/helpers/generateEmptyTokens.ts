function generateEmptyTokens(): void {
    const emptyToken = require('../data/emptyTokens.json');
    const fs = require('fs');

    fs.writeFileSync('src/data/tokens.json', JSON.stringify(emptyToken));
}

generateEmptyTokens();
