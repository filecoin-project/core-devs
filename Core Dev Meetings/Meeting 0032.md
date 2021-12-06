# Filecoin Core Devs Meeting #31 - 2021-12-02

**Meeting Date/Time:** Thursday, December 2nd 2021, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

## Updates for the week

### Lotus:
* Shipped Lotus v13.02 on 11/30
    * Release includes enhancemnets to Lotus workers and Lotus retrieval processes, which have been made 200x faster
    * New API endpoint has been exposed and is currently in testing with MinerX participants
* Future enhancements will prioritize storage provider market operations, including UI/UX improvements for data and client onboarding
* Lotus team has fully spec'd out the existing [Snap Deals draft](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0019.md). 
    * All implementations are encouraged to review the current specs and begin devising timelines for updating actors for Snap Deals acceptance
    * Final security considerations will be made through the month of December; FIP last call will be announced sometime in January

### Forest:
* Currently focused on addressing network bugs identited by Consensys audit. 
* Forest implementation is not currently synced with Filecoin mainnet. 
    * Need to run test vectors and address outstanding bugs; expect to be synced by the week of December 13. 

### Fuhon:
* During miner testing, the team discovered some challenges with sector sealing. 
    * The team expects improvements to be implemented during the week of December 6. 
* While implementing FIPs from network upgrade v14, the team encountered issues with the Fuhon node. 
    * Improvements should be completed by December 3. 
* The team is planning for 2022Q1, and is currently brainstorming which tools and enhancements will be shipped. 

### Venus:
* The team is focused on completely Venus Market phase 2, which better supports large storage providers. 
* Also currently working to separate Venus market and Venus sealer, improving dealmaking workflows, and developing a retrieval protocol. 
    * UI/UX enhancements are a priority, and the team is also fielding market research to drive future improvements. 
* Next week, Steven will present his proposed solution to [miner reward pooling](https://docs.google.com/document/d/1_6W500RSWIjYLZ7UAARHe2Pi_z8ywl7cKO8gFCSHKwk/edit#heading=h.qlzfea9u70b9), and has requested interim feedback from the other implementation teams. 

### Filecoin Foundation:
* No security updates or concerns to notes. 
* FIPs:
    * The timeline for the next network upgrade will be determined on the 12/16 Core Devs call. 
    * A reminder about the [new FIPs process](https://github.com/filecoin-project/FIPs/discussions/215) that's being rolled out.
    
## Community Presentation: Boost (market implementation)
* Dirk McCormick presented Boost, a market subset for storage providers that aims to: 
    * Improve storage deal flow; 
    * Improve visibilty for Storage Providers into their systems; 
    * Make extensible transfer data; 
    * Improve team velocity (by reducing complexity in deal-making).
* As a next step, the team will be working to open up additional API endpoints and increase visibility into ceiling transfer occupancy, number of transfers, etc.

## Community Presentation: Filecoin Virtual Machine (pre-FIP protocol enhancement)
* Development of the Filecoin VM is ongoing, with a multi-stage development timeline [now available](https://github.com/filecoin-project/tpm/issues/77#issuecomment-984758446). 
* Key characteristics of the FVM include: 
    * Polyglot WASM -based runtime envirionment for on-chain computation over the state tree. 
    * Strong and native primitives for efficient IPLD state access and maniupulation.  
    * Actors are deployed as WASM bundles on chain. 
    * State tree now stores code too, possibly in a separate subtree. 
    * Built-in actors deployed as WASM bundles on chain, and mapped to static inline CIDs. 
    * Support for foreign runtimes, where the first foreign runtime we support is the EVM. 
    * Native actors can be written in any language that compiles to WASM. 
* Two FIPs will be submitted to support the EVM- one for gas schedule changes, the other for EVM actors- and should be made available sometime in January. 
* Rust actors developed by Chainsafe will become canonical across the network, and will one day exist in their own repo for all implementations. 
