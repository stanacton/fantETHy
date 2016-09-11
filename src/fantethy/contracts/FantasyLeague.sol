contract EntitlementRegistry{function get(string _name)constant returns(address );function getOrThrow(string _name)constant returns(address );}
contract Entitlement{function isEntitled(address _address)constant returns(bool );}

// import "./Oraclize.sol";

contract FantasyLeague  {

    // BlockOne ID bindings
     // The address below is for the Edgware network only
     EntitlementRegistry entitlementRegistry = EntitlementRegistry(0xe5483c010d0f50ac93a341ef5428244c84043b54);

     event Transfer(address indexed _from, address indexed _to, uint256 _value);

     function getEntitlement() constant returns(address) {
         return entitlementRegistry.getOrThrow("com.addc.fantethy.dev");
     }

     modifier entitledUsersOnly {
       if (!Entitlement(getEntitlement()).isEntitled(msg.sender)) throw;
     }

    struct Player {
        uint playerID;
        uint ownGoals;
        uint appearances;
        uint goals;
        uint assists;
        // uint saves;
        uint cleanSheets;
        uint goalsConceded;
        uint redCard;
        uint yellowCard;
    }

    // TODO: match keys
    struct PointsByPlayerType {
        int goalKeeper;
        int defender;
        int midFielder;
        int forward;
    }

    struct ScoringPoints{
        int ownGoals;
        int appearances;
        PointsByPlayerType goals;
        int assists;
        // uint saves;
        int cleanSheets;
        int goalsConceded;
        int redCard;
        int yellowCard;
    }

    struct TeamSlot{
        // we do not need to store position here.
        Player player;
        uint priority;
    }
    
    struct Team {
        address addr;
        // Add name
        int captain;
        // Team slot array (15)
        // 1st position is goal keeper
        // 2nd to 5th position are defenders
        // 6th to 9th position are midFielders
        // 10th to 11th position are attackers
        TeamSlot[15] teamSlots;
        bool initialized;
        int balance;
    }

    struct Limits {
        uint maxTeams;
        uint minTeams;
    }

    enum LeagueStatus { WaitingForTeams, PickInProgress, SeasonInProgress, Finished, Error }
    LeagueStatus status;
    LeagueStatus constant defaultChoice = LeagueStatus.WaitingForTeams;

    mapping (address => Team) teams;

    Limits limits;

    ScoringPoints scoringPoints;
    PointsByPlayerType goalStruct;

    Player playerGlobal;
    // TODO: some duplication can be removed by storing what block number a player
    // joined a particular team and calculate stats rather than storing explicitly.
    // e.g. global var stored for all players. Teams compute valuess

    uint currentTeamsCount;
    uint buyIn;
    int startingFunds;
    // TODO: Add PayoutType variable.
    // TODO: Check UI table, one field is missing here.
    mapping (address => uint) balances;

    function getStatus () entitledUsersOnly returns (LeagueStatus) {
        return status;
    }

    function FantasyLeague (string name, uint setBuyIn) entitledUsersOnly {
        limits.maxTeams = 15;
        limits.minTeams = 2;

        scoringPoints.ownGoals = -3;
        scoringPoints.appearances = 2;
        // depends on the player type.
        goalStruct.goalKeeper = 7; // TODO: update value to something sensible!!!
        goalStruct.defender = 7; // TODO: update value to something sensible!!!
        goalStruct.midFielder = 6; // TODO: update value to something sensible!!!
        goalStruct.forward = 5; // TODO: update value to something sensible!!!
        scoringPoints.goals = goalStruct;

        scoringPoints.assists = 3;
        // scoringPoints.saves = ;
        // only get this for every goal keeper and defender
        scoringPoints.cleanSheets = 5;
        // only get this for every goal keeper and defender.
        scoringPoints.goalsConceded = -1;
        scoringPoints.redCard = -5;
        scoringPoints.yellowCard = -1;

        buyIn = setBuyIn; // this is in ether.
        startingFunds = 5000; // these are our tokens
    }

    function joinLeague() entitledUsersOnly returns (bool) {
        // Check if key is currently in use before allowing it to register. 
        if(teams[msg.sender].initialized == true) {
            return false;
        }
        // teams[msg.sender] = Team(msg.sender, -1, [], false, startingFunds);
        if (balances[msg.sender] < buyIn) return false;
        balances[msg.sender] -= buyIn;
        balances[this] += buyIn;
        Transfer(msg.sender, this, buyIn);
        return true;
    }

    function startDraft() entitledUsersOnly {
        // Create draft order randomly.
        // 
    }

    function onUpdate() entitledUsersOnly {
        // iterate over data structure
        // for each event see if that event effects a team
        // if it does then update the team score
        // regardless of above update global scores for player.
        // setup the next schedule call to API (or refactor to lazy loading)
    }
}
