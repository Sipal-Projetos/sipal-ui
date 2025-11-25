const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exec } = require('child_process');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const currentVersion = packageJson.version;

console.log(`\n📦  Current version: ${currentVersion}`);
console.log('Select update type:');
console.log('1) Patch (x.x.X)');
console.log('2) Minor (x.X.x)');
console.log('3) Major (X.x.x)');
console.log('4) Custom');
console.log('0) Cancel');

rl.question('\nOption: ', (answer) => {
    let newVersion = '';
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    switch (answer.trim()) {
        case '1':
            newVersion = `${major}.${minor}.${patch + 1}`;
            break;
        case '2':
            newVersion = `${major}.${minor + 1}.0`;
            break;
        case '3':
            newVersion = `${major + 1}.0.0`;
            break;
        case '4':
            rl.question('Enter custom version: ', (customVer) => {
                confirmAndUpdate(customVer);
            });
            return;
        case '0':
            console.log('Cancelled.');
            rl.close();
            return;
        default:
            console.log('Invalid option.');
            rl.close();
            return;
    }

    if (newVersion) {
        confirmAndUpdate(newVersion);
    }
});

function confirmAndUpdate(version) {
    console.log(`\n🚀  New version will be: ${version}`);
    rl.question('Confirm update? (y/N): ', (confirm) => {
        if (confirm.toLowerCase() === 'y') {
            updateVersion(version);
        } else {
            console.log('Cancelled.');
            rl.close();
        }
    });
}

function updateVersion(version) {
    console.log(`\nUpdating to ${version}...`);

    // Using npm version to handle package.json and package-lock.json updates
    // --no-git-tag-version to avoid auto-tagging if the user wants to commit manually, 
    // but usually for a helper script we might want to let npm handle it or just update files.
    // Let's use --no-git-tag-version to be safe and just update the files, 
    // allowing the user to review changes before committing.

    exec(`npm version ${version} --no-git-tag-version`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error updating version: ${error.message}`);
            rl.close();
            return;
        }

        console.log('✅  Version updated successfully!');
        console.log('📄  package.json and package-lock.json updated.');
        console.log(`\nDon't forget to commit and push your changes:`);
        console.log(`git add .`);
        console.log(`git commit -m "chore: release v${version}"`);
        console.log(`git tag v${version}`);
        console.log(`git push && git push --tags`);

        rl.close();
    });
}
