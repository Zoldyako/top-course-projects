document.addEventListener('DOMContentLoaded', function() {
    let player_points = 0, computer_points = 0, rounds = 0


    function generate_computer_choice() {
        let computer_choice = Math.floor(Math.random() * 3) + 1
        return computer_choice
    }


    function get_player_choice() {
        let player_choice = prompt("[1] Rock | [2] Paper | [3] Scissors")

        if (player_choice < 1 || player_choice > 3 || isNaN(player_choice)) {
            console.log("Invalid choice, please choose a number between 1 - 3")
            return get_player_choice()
        } 

        return parseInt(player_choice)
    }


    function round_winner(computer_choice, player_choice, div_score) {
        


        if (computer_choice == player_choice) {
            div_score.innerHTML += "It's a tie<br>"
        
        } else if (
            (computer_choice == 1 && player_choice == 3) ||
            (computer_choice == 2 && player_choice == 1) ||
            (computer_choice == 3 && player_choice == 2) 
        ){
            computer_points++
            console.log("C: " + computer_points)
            div_score.innerHTML += "Computer wins<br>"
        
        } else {
            player_points++
            console.log("P: " + player_points)
            div_score.innerHTML += "Player wins<br>"
        } 
    }


    function play_round(player_choice, div_results) {

        if (rounds >= 5) {

            if (computer_points == player_points) {
                div_results.textContent = `The game ended in a tie! | C: ${computer_points} - P: ${player_points}`
            
            } else if (computer_points > player_points) {
                div_results.textContent = `The computer won the game | C: ${computer_points} - P: ${player_points}` 
            
            } else {
                div_results.textContent = `The player won the game | C: ${computer_points} - P: ${player_points}`
            }
        }

        else {
            let computer_choice = generate_computer_choice()
            //let player_choice = get_player_choice()

            round_winner(computer_choice, player_choice, div_score)
            rounds++
        }
    }


    const btn_rock = document.getElementById('rock')
    const btn_paper = document.getElementById('paper')
    const btn_scissors = document.getElementById('scissors')
    const btn_restart = document.getElementById('restart')

    const div_results = document.getElementById('results')
    const div_score = document.getElementById('score')


    btn_rock.addEventListener('click', () => {
        play_round(1, div_results)
    })

    btn_paper.addEventListener('click', () => {
        play_round(2, div_results)
    })

    btn_scissors.addEventListener('click', () => {
        play_round(3, div_results)
    })

    btn_restart.addEventListener('click', () => {
        div_results.textContent = " "
        div_score.innerHTML = " "
        computer_points = 0
        player_points = 0
        rounds = 0
    })



    

    
});

