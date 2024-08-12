const fs = require('fs');
const path = require('path');

export function renameCssFile(oldFilename: string, newFilename: string): void {
    const oldPath = path.join(process.cwd(), 'dist', 'styles', oldFilename);
    const newPath = path.join(process.cwd(), 'dist', 'styles', newFilename);

    fs.rename(oldPath, newPath, (err: string) => {
        if (err) throw err;
        console.log(`${oldFilename} renamed to ${newFilename} successfully.`);
    });
}
