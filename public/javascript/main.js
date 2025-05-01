
let cells = document.querySelectorAll(".cells");
const  board = Array(9).fill(""); ;
let PlayerX = true ; //player to start game
let winingStatus = document.querySelector(".wining")
let winingBackground = document.querySelector(".winBack")
let reset = document.querySelector(".reset")
let gameOver = false;
let lastClickedCell;
const winningCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
game();
function game(){
    cellPeaker();
    checkWin();
}

function cellPeaker(){
    cells.forEach((cell , index) =>{
        cell.addEventListener("click", function(){
            if(cell.textContent === "" && !gameOver){
                lastClickedCell = PlayerX ? "X" : "O";
                cell.textContent = lastClickedCell;
                PlayerX = !PlayerX;  // Switch player  
                lastClickedCell = cell.textContent ; 
                board[index] = lastClickedCell;

                checkWin()
            }
            
        } , {once:true})
    })
}

function checkWin(){
     winningCombos.some(combo =>{
        const [a,b,c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            gameOver= !gameOver;
            winingStatus.textContent = `${board[a]} wins !`;
            winingBackground.classList.add("w-full","h-full","absolute","flex","justify-center","items-center","bg-custom-gradient" ,"flex-col","gap-5");
            winingStatus.classList.add("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
            reset.textContent= "reset"
            reset.classList.add("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
            resetGame()
        } else if (!board.includes("") && !gameOver){
            gameOver = true ;
            winingStatus.textContent = "It's a Tie!";
            winingBackground.classList.add("w-full","h-full","absolute","flex","justify-center","items-center","bg-custom-gradient","flex-col","gap-5");
            winingStatus.classList.add("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
            reset.textContent= "reset"
            reset.classList.add("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
            resetGame()
        }
    })

    
}

function resetGame(){
    reset.addEventListener("click",function(){
        cells.forEach(cell =>{
            cell.textContent = ""
        })
        board.fill("");
        PlayerX = true;
        gameOver = false ;
        winingBackground.classList.remove("w-full","h-full","absolute","flex","justify-center","items-center","bg-custom-gradient","flex-col","gap-5");
        winingStatus.classList.remove("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
        reset.classList.remove("bg-[#447294]","p-3","text-7xl","font-bold","text-white","rounded-lg");
        reset.textContent="";
        winingStatus.textContent="";
        game()

    })
}