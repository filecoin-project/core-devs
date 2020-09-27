## Filecoin Core Devs Meeting #2 - 2020-09-25
- Meeting Date/Time: **Friday 25 September 2020, [17:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/17-00)**
- Meeting Recording: TODO
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL)

#### Agenda

*   Welcome IPFS Force, taking maintainership for go-filecoin
*   Current status update from Filecoin implementations
    *   [Lotus](https://github.com/filecoin-project/lotus)
    *   [Forest](https://github.com/ChainSafe/forest)
    *   [Fuhon](https://github.com/filecoin-project/cpp-filecoin)
    *   [GFC](https://github.com/filecoin-project/go-filecoin)
*   [FIP-0002](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0002.md)
*   The new [Filecoin Spec](https://spec.filecoin.io/)
*   Filecoin Code/Theory Audit Status & Plans
    *   Core node
    *   Actors
    *   gossipsub


#### Notes

*   Forest
    *   #1 goal syncing and interop
        *   Finishing up miner actor changes today
        *   Msg pool changes - msg selection and revert logic
        *   Updating conformance tests
        *   State manager and chainstore (ex upgrade logic)
        *   Testing that AMT matches both ways, refactoring to simplify
    *   #2 full node
        *   Integration of storage miner landing today
        *   Integrating storage/retrieval markets in next few weeks, then can try out go-fil-markets interface
        *   Next week plan to start running local devnet
*   Fuhon
    *   Working towards stand alone devnet
    *   Focusing on wrapping up work with miner
    *   Found a few fixes to sealing process
    *   TLS fixed! Started connecting to lotus/forest
    *   Conformance tests on the docket
*   Lotus
    *   Prepping for spec actors upgrade
    *   Testing upgrade itself in butterfly net
    *   Starting lotus-lite for a gateway-based node: [https://github.com/filecoin-project/lotus/issues/3532#](https://github.com/filecoin-project/lotus/issues/3532#) 
    *   Basic idea, node without chain store that doesnt have to sync
    *   Client node with a wallet that can send messages by utilizing remote node over gateway
    *   Can do deals directly with miners
    *   Remove requirement of having a datastore and other heavyweight components
    *   Hope to run on a phone
*   Analytics on chain to identify things to extract
    *   Extracting 10 messages for each actor/message/etc type
    *   187 vectors that will land as result of this effort
    *   Doing changes to support multiple schema versions for upgrading spec actors logic
    *   Creating tooling to quickly validate changes as they happen - expressing network versions the vector is valid for
    *   Block sequence vectors made progress but not quite ready yet
    *   Network version show consensus breaking changes, spec actors versions shouldn't imply consensus breaking
*   Filecoin Spec
    *   New spec.filecoin.io
    *   Improved experience of making updates - simple editing
    *   TOC automatically updated
    *   Integrated health monitoring to track status of spec sections
    *   Building a service to pull data from remote sources - ex pulling conformance tests in respective implementation
    *   Integration with FIP process to show WIP changes
*   Filecoin Code/Theory Audit Status & Plans
*   [FIP 0002](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0002.md)
    *   Remove fee incurred by a successful recovery.
        *   Async Question: What is the design rhetoric for this fee?
    *   Remove fee incurred by a missed WindowPoSt.
    *   Update Sector Fault Fee (FF) to 3.51 days of expected block reward.
