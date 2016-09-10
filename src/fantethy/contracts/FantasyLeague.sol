contract FantasyLeague  {

    uint currentTeamsCount;
    uint buyIn;
    
    struct Team {
        address addr;
        // Add name
        int captain;
        // Team slot array (15)
        bool initialized;
    }

    struct Limits {
        uint maxTeams;
        uint minTeams;

        uint maxCentreForwards;
        uint minCentreForwards;

        uint maxMidFielders;
        uint minMidFielders;

        uint maxDefenders;
        uint minDefenders;

        uint maxGoalKeepers;
        uint minGoalKeepers;
    }

    // TODO: Add PayoutType variable.

    // TODO: Check UI table, one field is missing here.

    enum LeagueStatus { WaitingForTeams, PickInProgress, SeasonInProgress, Finished, Error }
    LeagueStatus status;
    LeagueStatus constant defaultChoice = LeagueStatus.WaitingForTeams;

    mapping (address => Team) teams;


    function getStatus () returns (LeagueStatus) {
    	return status;
    }

    Limits limits;

    function FantasyLeague (string name, uint setBuyIn) {
        limits.maxTeams = 15;
        limits.minTeams = 2;

        limits.maxCentreForwards = 2;
        limits.minCentreForwards = 2;

        limits.maxMidFielders = 4;
        limits.minMidFielders = 4;

        limits.maxDefenders = 4;
        limits.minDefenders = 4;
        buyIn = setBuyIn;
    }

    function joinLeague()  returns (bool) {
        // Check if key is currently in use before allowing it to register. 
        if(teams[msg.sender].initialized == true) {
            return false;
        }
        teams[msg.sender] = Team(msg.sender, -1, true);
        return true;
    }

    function fetchTeamByID () {

    }
}
