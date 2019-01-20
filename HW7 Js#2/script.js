//All levels
function nextLevel() {
    let finish = null;
    let before = '';
    while (finish !== "next") {
        if (isFree('west') && before !== 'east') {
            if (isFree('west') && isFree('east')) {
                while (isFree('east')) {
                    finish = east();
                    before = 'east';
                }
            } else {
                while (isFree('west')) {
                    finish = west();
                    before = 'west';
                }
            }
        } else if (isFree('south') && before !== 'north') {
            if (isFree('south') && isFree('north')) {
                while (isFree('north')) {
                    finish = north();
                    before = 'north';
                }
            } else {
                while (isFree('south')) {
                    finish = south();
                    before = 'south';
                }
            }
        } else if (isFree('east') && before !== 'west') {
            while (isFree('east')) {
                finish = east();
                before = 'east';
            }
        } else if (isFree('north')) {
            if (!isFree('west') && !isFree('south') && !isFree('east')) {
                finish = north();
                before = 'north';
            } else {
                while (isFree('north')) {
                    finish = north();
                    before = 'north';
                }
            }
        }
    }
    return finish;
};
nextLevel();
