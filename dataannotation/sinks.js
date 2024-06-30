const fs = require('fs');

/// Structs

// Point on map
class Point {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// System entity
class Entity {
    type = '';
    point = new Point();

    constructor(type, x, y) {
        this.type = type;
        this.point.x = x;
        this.point.y = y;
    }

    // Adds coordinates to the Entity's ones.
    // Returns: point - a new point on the map
    // Args:
    //      x - map column
    //      y - map row
    addCoordinates(x, y) {
        return new Point(this.point.x + x, this.point.y + y);
    }

    // Compares the Entity to the another one.
    // Returns: void
    // Args:
    //      entity - an entity to compare with
    isSame(entity) {
        return this.point.x === entity.point.x && this.point.y === entity.point.y;
    }

    // (DEBUG) Prints the Entity in convenient way.
    // Returns: void
    print() {
        return this.type + ' ' + this.point.x + ' ' + this.point.y;
    }
}


/// Dictionaries
const EntityDirectionDict = {
    '*': [0, 1, 2, 3],
    '═': [3, 2],
    '║': [0, 2],
    '╔': [2, 1],
    '╗': [3, 2],
    '╚': [0, 1],
    '╝': [3, 0],
    '╠': [0, 1, 2],
    '╣': [0, 2, 3],
    '╦': [1, 2, 3],
    '╩': [0, 1, 3]
}

const DirectionShiftDict = [
    new Point(0, -1), // T 0
    new Point(1, 0),  // R 1
    new Point(0, 1),  // B 2
    new Point(-1, 0)  // L 3
];

const DirectionConformityDict = {
    0: 2,
    1: 3,
    2: 0,
    3: 1
}


/// Global Variables
let maxX = 0; // A width of the system map
let maxY = 0; // A height of the system map
const DataPath = './data.txt'


/// Utils

// Reads data file.
// Returns:
//      entityTable - a table of organized entities
//      source      - a source entity
// Args:
//      path - a path to the data file
function readData(path) {
    const entityTable = [];
    let source = null;

    fs.readFileSync(path, 'utf8').split('\n').filter(line => line.trim().length).forEach((entry) => {
        const entryData = entry.split(' ');
        const y = parseInt(entryData[1]);
        const x = parseInt(entryData[2]);

        if (y > maxY) maxY = y;
        if (x > maxX) maxX = x;
        if (entry[0] === '*')
            source = new Entity(entry[0], x, y);

        if (!entityTable[y]) entityTable[y] = [];
        entityTable[y].push(new Entity(entry[0], x, y));
    });

    return [entityTable, source];
}

// (DEBUG) Builds a map of the sink system.
// Returns: void
// Args:
//      table   - a table of entities
function buildMap(table) {
    const map = Array.from(Array(maxY + 1)).fill(' '.repeat(maxX + 1));
    table.forEach((row, rowIndex) => {
        row.forEach((entity) => {
            const colStart = entity.point.x - 1 <= 0 ? 0 : entity.point.x - 1;
            const colEnd = entity.point.x === 0 ? entity.point.x + 1 : entity.point.x;
            map[rowIndex] = map[rowIndex].slice(0, colStart) + entity.type + map[rowIndex].slice(colEnd);
        })
    });
    console.log(map.join('\n'));
}

// Finds a next entity connected to the current one.
// Returns: [0, 1]
//      0 - an entity connected to the current one
//      1 - an indicator of amount of the connected entities to the current one (true, if >2 connections; false otherwise)
// Args:
//      table       - a table of entities
//      curr        - a current entity to search from
//      prev        - a previous entity to avoid
//      connected   - a list of the connected sinks
function findNextEntity(table, curr, prev, connected) {
    let result = [];
    const directions = EntityDirectionDict[curr.type];

    for (let i = 0; i < directions.length; i++) {
        const entryDirections = directions[i];
        const point = curr.addCoordinates(DirectionShiftDict[entryDirections].x, DirectionShiftDict[entryDirections].y);
        if (point.x > maxX || point.y > maxY) continue;

        const next = table[point.y].find(entity => entity.point.x === point.x);
        if (!next || prev?.isSame(next)) continue;

        if (/[A-Z]/ig.test(next.type)) {
            if (!connected.includes(next.type))
                connected.push(next.type);
            continue;
        }

        const isConnected = EntityDirectionDict[next.type].includes(DirectionConformityDict[entryDirections]);
        if (isConnected)
            result.push(next);
    }

    return [result[0], result.length > 1];
}

// Determines amount of connected sinks in the system.
// Returns:
//      connected - a string of the connected sinks
// Args:
//      path - a path to the data file
function determineConnected(path) {
    const connected = []; // A list of the connected sinks

    // Reading data
    const [entityTable, source] = readData(path);

    // Building system map
    // buildMap(entityTable);

    // Finding the starting points
    let [prev, hasPrevFewConnections] = findNextEntity(entityTable, source, null, connected);
    let [curr, hasFewConnections] = findNextEntity(entityTable, prev, null, connected);

    // A stack of the search
    const pathStack = [[prev, hasPrevFewConnections], [curr, hasFewConnections]];

    while (pathStack.length) {
        let nextData = findNextEntity(entityTable, curr, prev, connected);

        // If we find a dead end - will go back to the previous switch and remove the dead-end way
        if (!nextData[0]) {
            let back = [];
            while (!back[1] && pathStack.length > 2) {
                back = pathStack.pop();
                curr = prev;
                prev = back[0];
            }
            const tableRow = entityTable[prev.point.y];
            const index = tableRow.findIndex((entity) => entity.point.x === prev.point.x);
            entityTable[prev.point.y] = [...tableRow.slice(0, index), ...tableRow.slice(index + 1)];
            if (pathStack.length > 2)
                prev = pathStack[pathStack.length - 2][0];
            else break;
        } else { // Continue search
            prev = curr;
            curr = nextData[0];
            pathStack.push(nextData);
        }
    }

    return connected.join('');
}

// console.log(determineConnected(DataPath));
