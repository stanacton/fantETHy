contract Players  {

    enum PlayerPosition { Attacker, CentreForward, Defender, GoalKeeper, Error }
    PlayerPosition constant defaultChoice = PlayerPosition.Error;
    
    struct Player {
        int uid;
    	string FullName;
        PlayerPosition position;
    }

    mapping (address => Player) players;

    address owner;

    bool sealed;

    function Players () {
    	owner = msg.sender;
    }

    function sealContract() {
    	// check msg.sender is the same as owner address using function modifier.
    	// check the contract is not sealed already.
    }

    function addPlayer(Player player) {
        players[players.length] = player;
    }
}
