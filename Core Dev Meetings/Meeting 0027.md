# Notes from Core Devs Meeting #27

**Meeting Date/Time:** Thursday, September 23th 2021, 16:00 UTC

**Meeting Recording:** https://www.youtube.com/watch?v=ClebmO4OfWQ

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Lotus (Protocol Labs), Venus (IPFSForce), Filecoin Foundation, and Community representatives

## Updates for the week:

### Lotus:
* Deploying 1.11.3 RC train on Tuesday, September 28

### Forest:
* Operating on Mainnet and working towards initial release
* Working on test factor integration, calibration net sync, and older state migrations
* System release scheduled for end of October (approximately 2-3 weeks)

### Fuhon:
* Completing an internal security audit; timeline is open-ended, but estimated to take 2+ weeks.
* Finishing up miner development and handling interop testing with Lotus node.
* Introducing a more advanced test node for the Fuhon suite of tools.
* Suggested building out an implementation -agnostic test node for the future, which the Lotus team was also interested in following up on.

### Venus:
* New release will be made available next week.
* Market design specs have been made available and shared with the Core Devs.
* Testing is ongoing, as is work on documentation.
* Engineer onboarding and incubation program will happen in Milestone 2, during which small storage providers will be invited to attend.

### Filecoin Foundation:
* Security audits remain ongoing.
* Fuzzer tester for each implementation is being built and should be released 2022Q1.
* New FIP processes are being designed; documentation and process changes will be shared in upcoming meetings.

## Open Discussions on the call:

### FIPs updates:
* FIP019 Snap Deals will remain open to community feedback until specs are completed, no sooner than 2022Q1.
* ZX presented a new FIP draft(BatchBalancer & BatchDiscount Post-HyperDrive Adjustment FIPs#174 - BatchBalancer & BatchDiscount Post-HyperDrive Adjustment)
    * We would need a wide discussion within the community to explain the idea and the motivation behind the change we want to introduce.
    * This looks like an easy change from the implementation team.
