contract Players  {

    enum PlayerPosition { Forward, MidFielder, Defender, GoalKeeper, Error }
    PlayerPosition constant defaultChoice = PlayerPosition.Error;
    
    struct Player {
        int uid;
    	string fullName;
        PlayerPosition position;
    }

    Player[] players;

    address owner;

    bool sealed;

    function Players () {
    	owner = msg.sender;
    }

    function sealContract() {
    	// check msg.sender is the same as owner address using function modifier.
    	// check the contract is not sealed already.
    }

    function stringsEqual(string x, string y) returns (bool) {
        return sha3(x) == sha3(y) ? true : false;
    }

    function addPlayer(int uid, string fullName, string position) returns (bool) {
        // TODO: conver position to enum.
        PlayerPosition playerPosition;
        if(stringsEqual(position, "GK")){
            playerPosition = PlayerPosition.GoalKeeper;
        }
        if(stringsEqual(position, "DF")){
            playerPosition = PlayerPosition.Defender;
        }
        if(stringsEqual(position, "MF")){
            playerPosition = PlayerPosition.MidFielder;
        }
        if(stringsEqual(position, "FW")){
            playerPosition = PlayerPosition.Forward;
        }
        else {
            return false;
        }
        players[players.length] = Player(uid, fullName, playerPosition);
        return true;
    }
}
