const fs = require('fs');
const { execSync } = require('child_process');
const packageJson = require('./package.json');

try {
    const gitInfo = {
        elixirMasterPort: process.env.ELIXIR_MASTER_PORT
    };

    fs.writeFileSync('environment.json', JSON.stringify(gitInfo));
} catch (error) {
    console.error('Error fetching Git hash:', error);
}
