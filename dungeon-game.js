'use-strict';

const ps = require('prompt-sync');
const prompt = ps({sigint: true});

const dungeon = [
    [{ type: 'start' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
    [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
    [null, null, null, null, null, { type: 'path' }],
    [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
    [{ type: 'path' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
    [{ type: 'end' }, null, null, null, null, null],
]


// Create map out of provided dungeon array
function createMap(map){
    let objects = [];

    map.map(row => {
        let line = [];
        row.map((value, index) => {
            line.push({
                opened: (value === map[0][0]) ? true : false,
                symbol: (value === null) ? 'X' : 'o',
                value: (value === null) ? 'stop' : value.type
            });
        });
        objects.push(line);
    });

    return objects;
}


// Displaying the in the console 
function displayMap(mapObject){
    let rows = [];
    let line = '';

    mapObject.forEach(row => {
        row.forEach(value => {
            line += (!value.opened) ? '-' : value.symbol;
        });
        rows.push(line);
        line = '';
    });

    rows.forEach(row => {
        console.log(row);
    });
}

// Main function
function startGame(map) {
    const dungeon = map;

    currentRow = 0;
    currentCol = 0;

    console.log('Welcome to the dungeon. Do you think you can find the way out?')

    while(dungeon[currentRow][currentCol].value !== 'end'){
        console.log(`Pick a number for what direction you wanna go:
1. go down
2. go up
3. go left
4. go right`);

        displayMap(dungeon);
        console.log(currentRow, currentCol);

        const direction = prompt(`> `);
        console.clear();
        let newRow = currentRow;
        let newCol = currentCol;

        switch(direction){
            case '1':
                newRow++;
                break;
            case '2':
                newRow--;
                break;
            case '3':
                newCol--;
                break;
            case '4':
                newCol++;
                break;
            default:
                console.log('Wrong input. Pick a number.')
                break;
        }
        
        if(dungeon[newRow] === undefined 
        || dungeon[newRow][newCol] === undefined
        || (dungeon[newRow][newCol].value === 'stop')){
            console.log('Stop! Pick another way.')
        } else {
            currentRow = newRow;
            currentCol = newCol;

            dungeon[currentRow][currentCol].opened = true;
        }
    }
    console.log('Congratulations!! You made it out of the dungeon!')
    
}


const mapObject = createMap(dungeon);
startGame(mapObject);