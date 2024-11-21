import javax.swing.*;
import java.awt.event.*;

public class GUI extends JFrame implements ActionListener{
    
        //let me use the logic
        Logic logic = new Logic();

        //Forgot they needed to be usable outside of the GUI scope
        JLabel resultLabel;
        JLabel compChoice;
        JLabel compScore;
        JLabel playerScore;
        JButton rockButton;
        JButton paperButton;
        JButton scissorsButton;

    public GUI() {

        //set up the main window
        //JFrame frame = new JFrame();
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(null);
        setSize(420,420);
        setLocationRelativeTo(null);
        setVisible(true);

        //Label for computers score
        compScore = new JLabel("Computer score: 0");
        compScore.setBounds(150,0,200,50);
        add(compScore);

        //show choice of computer
        compChoice = new JLabel("*");
        compChoice.setBounds(175, 50, 50, 50);
        add(compChoice);

        resultLabel = new JLabel("");
        resultLabel.setBounds(175, 125, 100, 50);
        add(resultLabel);

        //label for player score
        playerScore = new JLabel("Your score: 0");
        playerScore.setBounds(150, 200, 200, 50);
        add(playerScore);

        //Add buttons for each choice
        rockButton = new JButton("Rock");
        paperButton = new JButton("Paper");
        scissorsButton = new JButton("Scissors");
        rockButton.setBounds(25, 300, 100, 50);
        paperButton.setBounds(150, 300, 100, 50);
        scissorsButton.setBounds(275, 300, 100, 50);
        add(rockButton);
        add(paperButton);
        add(scissorsButton);

        //add listeners to buttons
        rockButton.addActionListener(this);
        paperButton.addActionListener(this);
        scissorsButton.addActionListener(this);

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        //Players choice
        String playerChoice = e.getActionCommand().toString();

        //caLculate whatever is going on in the program
        String result = logic.Magic(playerChoice);

        //show what the computer chose
        compChoice.setText(logic.getCompChoice());

        //score stuff
        compScore.setText("Computer score: " + logic.getCompScore());
        playerScore.setText("Your score: " + logic.getPlayerScore());

        //Who won?
        resultLabel.setText(result);
    }
}
