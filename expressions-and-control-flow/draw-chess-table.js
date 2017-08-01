'use strict';

console.log("Here is your chessboard:");

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            process.stdout.write("%");
        }
        process.stdout.write(" ");
    }
    console.log();
}
