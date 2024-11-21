import java.util.Random;

public class Logic {

    //list of choices for computer
    private String[] choiceList = {"Rock", "Paper", "Scissors"};

    //store the final choice
    private String compChoice;

    //Generate random number thing
    private Random rand = new Random();

    //declare score ints
    private int compScore;
    private int playerScore;

    //Getters

    /**
     * 
     * @return returns the score of the player as an int
     */
    public int getPlayerScore() {
        return playerScore;
    }

    /**
     * 
     * @return returns the score of the computer as an int
     */
    public int getCompScore() {
        return compScore;
    }

    /**
     * 
     * @return returns the choice of the computer as a string
     */
    public String getCompChoice() {
        return compChoice;
    }


    public Logic(){

    }

    /**
     * handles all logic for determining winner
     * 
     * @param playerChoice takes string of the players choice
     * @return returns a string of who won
     */
    public String Magic(String playerChoice) {
        //Random choice... hopefully
        compChoice = choiceList[rand.nextInt(3)];

        String result;

        //Big if statement to compare the two choices
        if (compChoice.equals("Rock")) {
            if (playerChoice.equals("Paper")) {
                result = "You Win!";
                playerScore++;
            }
            else if (playerChoice.equals("Scissors")) {
                result = "Computer Wins!";
                compScore++;
            }
            else {
                result = "Draw";
            }
        }
        else if (compChoice.equals("Paper")) {
            if (playerChoice.equals("Scissors")) {
                result = "You Win!";
                playerScore++;
            }
            else if (playerChoice.equals("Rock")) {
                result = "Computer Wins!";
                compScore++;
            }
            else {
                result = "Draw";
            }
        }
        else {
            if (playerChoice.equals("Rock")) {
                result = "You Win!";
                playerScore++;
            }
            else if (playerChoice.equals("Paper")) {
                result = "Computer Wins!";
                compScore++;
            }
            else {
                result = "Draw";
            }
        }
        
        return result;
    }
}
