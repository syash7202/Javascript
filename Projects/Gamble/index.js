// 1. Deposit the money.
// 2. Get the no. of lines to bet on
// 3. collet the bet amount
// 4. spin the slot machine
// 5. check for win or lose
// 6. if win :: give money
// 7. play again  (handle min. balance)

const prompt = require("prompt-sync")();


// Global Variables

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 8,
    "B": 6,
    "C": 4,
    "D": 2
};

const SYMBOLS_VALUE = {   
    "A": 3,
    "B": 6,
    "C": 9,
    "D": 12
};


const deposit= () => {
    while(true){

        const depositAmount = prompt("Enter the deposit amount : ")
        // converting deposit to number as by default it is a string
        const numberDepositAmount = parseFloat(depositAmount);
        
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount !");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const numberOfBetLines = () => {
    while(true){

        const lines = prompt("Enter the number of lines to bet (1-3) : ")
        // converting lines to number as by default it is a string
        const numberOfBetLines = parseFloat(lines);
        
        if(isNaN(numberOfBetLines) || numberOfBetLines <= 0 || numberOfBetLines > 3) {
            console.log("Invalid line number ! try again");
        }
        else{
            return numberOfBetLines;
        }
    } 
}


const getBet = (balance, lines) => {
    while(true){

        const bet = prompt("Enter the total bet amount per line: ")
        // converting bet amount to number as by default it is a string
        const numberBet = parseFloat(bet);
        
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet! try again");
        }
        else{
            return numberBet;
        }
    } 
}

const spin = () => {
    const symbols = []; // using this i can change the value of array being a const data type as only the refernce is passed everytime. 
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        // console.log(symbol, count);
        for(let i =0; i< count; i++){
            symbols.push(symbol);
        }
    }
    // console.log(symbols);

    const reels =[];

    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol); // Add that element to the array
            reelSymbols.splice(randomIndex,1) // removes that element from array
        }  
    }

    return reels;
};


const trasnpose = (reels) => {
    const rows = [];

    for(let i =0 ; i<ROWS; i++){
        rows.push([]);
        for(let j =0; j<COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) => {
    for(const row of rows){
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString+= symbol;
            if ( i != row.length -1){
                rowString+= " | ";
            }
        }

        console.log(rowString);
    }
};


const getWinnings = (rows, bet, lines) => {
    let winnings= 0;

    for(let row =0 ; row < lines;  row++){
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }


        if(allSame){
            winnings += bet * SYMBOLS_VALUE[symbols[0]];
        }
    }

    return winnings;
};


const game = () => {

    let balance = deposit();    
    // console.log(depositAmount);
    while(true){
        console.log("You have a balance of : ₹ " + balance);
    const numberOfLines = numberOfBetLines();
    //console.log(numberOfLines);
    const bet = getBet(balance , numberOfLines);    
    balance -= bet * numberOfBetLines;
    // console.log(bet);

// till now we got the matrix as 
// [[A B C], [D D D], [A A A]] SO WE TRANSPOSE IT TO EASILY CHECK THE WINNING CONDITION.
//[[A D A], [B D A], [C D A]]

    const reels = spin();
    const rows = trasnpose(reels);
    printRows(rows);
    const winnings =getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("Yoy won, ₹ " + winnings.toString());

    if(balance<=0){
        console.log("You rane out of money!");
        break;
    }

    const playAgain = prompt("Do you want to play again? (y\\n)");

    if(playAgain!= "y") break;
    }
};

game();