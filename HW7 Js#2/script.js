//level 1
  while(isFree('north')){
    north();
  }

//level 2
  for (let i = 0; i < 16; i++){
    east();
  }

//level 3-4
  while(isFree('south') || isFree('east')){
    if (isFree('south')) {
      south();
    } else if( isFree('east')) {
      east();
    }
  }

//level 5
  // kill me please
//level 6
  // kill me please
//level 7
  // kill me please
