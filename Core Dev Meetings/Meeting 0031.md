# Filecoin Core Devs Meeting #31 - 2021-11-18

**Meeting Date/Time:** Thursday, November 18th 2021, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

## Updates for the week

### Lotus:
* Working on release train v1.13.1, which includes a few small bug fixes and dependency updates.
    * Final Lotus release should go out the week of December 3.
* Currently testing Worker group in Lotus, which gives storage provider's the ability to complete sealing jobs for specified deal groups. 
* Lotus team continues to work on the [Snap Deals draft](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0019.md). 
    * Snap Deal actors are nearly complete; implementation teams are welcome to begin testing. 
    * Security details and auditing, as well as an expansion of the change motivation re: sub-deals, will be contributed next. 
    * The team is still looking for participants to help with tested setup. If interested, reach out to @jennijuju-PLFD on Slack. 
* Upcoming priorities for Lotus team (2022Q1) 
    * Separate market module from Lotus implementation.
    * GoFILIndexer, which will plug into Lotus (or be used as a stand-alone tool) and will enable identity verificiation, CID retrieval, and other tools for storage providers. 

### Forest:
* Forest is close to syncing back to Mainnet. 
* Alex Wade at Consensys identified a few actor bugs that the team is working to fix. 

### Fuhon:
* Working to release 1.0.RC1, which will be finished by November 19 and made available on Github. 
* Like Lotus, the team is interested in exploring ways to decouple market and storage provider modules from the core implementation. 
* The team is also working to integrate Ledger1 into the node's signing pipeline. 
* Maksim is working to migrate the Fuhon roadmap from JIRA to Github. 

### Venus:
* Venus Market Module v1 has been shipped, and the team is working on v2! 
* The team is also working on offline deals support and additional improvements to the Venus<>Lotus data migration tool.
* Phase 2 of the Venus Incubation Program has begun, bringing more storage providers to the Filecoin network. 
* ReportConsensusFault 
    * Jennifer noticed that Venus and Lotus handle block validation during ReportConsensusFault in different ways, and asked for the docs to be updated. 
    * Aayush noted that there are grey spaces in the spec, where consensus-critical details are not properly documented. There is a need to audit the existing spec (specifically at the VM and sync layers) to identify improvement areas.

### Filecoin Foundation:
*  The Foundation is holding an internal Governance Summit from November 17-19 and will follow up with improvements to the FIPs process. 
*  The Chocolate Network Upgrade Retro survey was shared with all standing Core Devs. 

## Q&A:
*  Aayush brought up the lack of documentation standardization, and asked how implementations teams should handle this work. 
    * Jorge noted that Ethereum implementers use a standard RPC, with addendums, including the Open Ethereum API.
    * Lotus is working to stabilize v1 of the Lotus API, which could be the group standard.  
    * Steven asked for a separate space to discuss RPC standards for upcoming FIPs; FF and the Lotus team will work together to identify a space. 
