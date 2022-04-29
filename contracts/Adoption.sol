pragma solidity ^0.5.0;

contract Adoption {
    address[16] public adopters;
    
    function adopt(uint petId) public returns(uint) {
        require(petId >= 0 && petId <= 15, "Oops! we don't have a pet with the given tag.");
        require(address(adopters[petId]) == 0x0000000000000000000000000000000000000000, "Oh snap! it seems someone already adopted that cutie.");
        
        adopters[petId] = msg.sender;
        return petId;        
    }
    
    function getAdopters() 
    public 
    view 
    returns(address[16] memory) {
        return adopters;
    }
}