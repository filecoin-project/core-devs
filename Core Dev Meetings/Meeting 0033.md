# Filecoin Core Devs Meeting #33 - 2021-12-16

**Meeting Date/Time:** Thursday, December 16th 2021, 16:00 UTC

**Meeting Recording:** See README

**Attendance:** Forest (Chainsafe), Fuhon (Soramitsu), Venus (IPFSForce), Lotus (Protocol Labs), Filecoin Foundation, and Community representatives

## Updates for the week

*Please note: due to the upcoming holidays, the Core Devs meeting scheduled for Thursday, December 30 has been **canceled**.*

*The next Core Devs meeting- Core Devs Meeting #34- will take place on Thursday, January 13.*

### Updates and Ideas from Filecoin Implementation Teams
#### Venus
* Steven shared details on the Venus team's [small storage provider reward pooling](https://docs.google.com/document/d/1_6W500RSWIjYLZ7UAARHe2Pi_z8ywl7cKO8gFCSHKwk/edit#heading=h.qlzfea9u70b9). 
    * Reward pooling is a strategy for attracting new storage providers to the Filecoin ecosystem and distributing risk and reward. 
    * The current trusted aproach collects block rewards and redistributes based on power ration. 
    * Once the Filecoin Virtual Machine is introduced, a pooling protocol could instead automate the process of leader selection and reward distribution on-chain.
* Core Devs discussion: how should we implement reward pooling, how much of a priority is it, and how should we carry this forward? 
    * Although neither technical approach is a core protocol or implementation enhancement, the creation of a pool is a signficant security risk for the entire network. 
    * The Venus team will continue to work on the storage provider pool, with guidance and buy-in from other Core Devs. 
    * The Venus team will continue to develop specs in the Venus Github repo and decide at a later date whether a FIP is needed. 
#### Fuhon 
* Miner module is delayed; will likely be complete mid-January. 
#### Lotus 
* Lotus team will be on winter break (December 18 - January 2). 
    * Network monitoring will be ongoing, but the team will be less responsive to work asks. 
#### Forest 
* Continuing to work on Consensys audit fixes so that Forest actors are ready for FVM roll-out. 
* The team has implemented DRAND fetching updates and will be synced with mainnet in January.
* A majority of the Forest team will be out of office for the last two weeks of December.

### Bloxico Team Presentation

### Planning for the v15 Network Upgrade 
* The upgrade name, timeline, and accepted FIPs are yet to be determined. 
    * Calibration net sync was proposed for 25 January 2021; mainnet sync proposed for 22 February 2021. 
* A community forum issue was opened for implementation teams and Core Devs to continue to weigh in on the proposed network timeline and FIP details.  It can be found [HERE](https://github.com/filecoin-project/tpm/discussions/85). 
    * Due to the holidays, the upgrade timeline will be agreed to asynchronously.  Please refer to the community forum issue linked above for the most up-to-date information.
* Two new FIPs were briefly introduced to the Core Devs: the [Askv2 Protocol FIP](https://github.com/filecoin-project/FIPs/pull/224) (authored by Brenda Lee) and the [Datacap Removal FIP](https://github.com/filecoin-project/FIPs/pull/226) (authored by Deep Kapur).
