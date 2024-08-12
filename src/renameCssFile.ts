const fs = require('fs');
const path = require('path');


/**
 * Renames a CSS file from its original name to a new name within the specified directory.
 * This function is particularly useful in build processes where you need to rename output files dynamically.
 * 
 * @param {string} oldFilename - The current name of the file you want to rename.
 * @param {string} newFilename - The new name you want to give to the file ex: filename.module.min.css.
 * 
 * @example
 * import { renameCssFile } from './utils/renameCssFile';
 * 
 * renameCssFile('filename.module.css', 'filename.module.min.css');
 * 
 * @function
 * @name renameCssFile
 */

export function renameCssFile(oldFilename: string, newFilename: string): void {
    const oldPath = path.join(process.cwd(), 'dist', 'styles', oldFilename);
    const newPath = path.join(process.cwd(), 'dist', 'styles', newFilename);

    fs.rename(oldPath, newPath, (err: string) => {
        if (err) throw err;
        console.log(`${oldFilename} renamed to ${newFilename} successfully.`);
    });
}
