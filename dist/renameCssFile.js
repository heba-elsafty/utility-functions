"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameCssFile = renameCssFile;
var fs = require('fs');
var path = require('path');
function renameCssFile(oldFilename, newFilename) {
    var oldPath = path.join(process.cwd(), 'dist', 'styles', oldFilename);
    var newPath = path.join(process.cwd(), 'dist', 'styles', newFilename);
    fs.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log("".concat(oldFilename, " renamed to ").concat(newFilename, " successfully."));
    });
}
