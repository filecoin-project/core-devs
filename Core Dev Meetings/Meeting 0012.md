# Filecoin Core Devs Meeting #12 - 2021-02-25

- Meeting Date/Time: **Thursday 25 February 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/lmaBuSRz6Rk
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Venus:

- Just back from holidays
- Updated to actors v3, running on calibration net
- New release coming out
- Extracting out Venus miner to enable distributed mining pool

Forest:

- Focused on network v10 / actors v3
- One actor and some migration worker remains
- Updating the RPC interface, aiming to ensure partial or full feature-compatibility with Lotus
- Getting ready for audit in a few weeks
- Improvements to message pool and sync in the works
- AI: start maintaining a list of consensus-critical changes going into any release

Fuhon:

- Fixed lots of consensus bugs, node running well on mainnet now 
- Preparing for reliability and stress testing ("crash and smash" a node and see what happens)
- Actors v2 nearly done
- Large refactor performed to simplify actors version upgrades moving forward
- Introduce a quality gate

Lotus:

- 1.5.0 released, introduces network version 10 and actors v3
- Upgrade epoch is 550321
- Running on calibration-net right now
- Preliminary work on what v4 actors will look like
- Includes a new lightweight "PoSt disputer"

Calibration-net:

- Reset last week, now running network v10
- Only has 32 and 64 GiB sectors
- Will be kept alive for long, but not perfect yet
- Faucet is behind a CAPTCHA again

FIP-0013:

- Aggregates ProveCommits
- You can thus commit multiple sectors with 1 message
- Shaves the "overhead" gas costs (loading state, etc.)
- Also aggregates the proofs themselves: aggregating 1000 proofs is significantly smaller than sending 1000 individual proofs
- Aggregating 50 proofs leads to ~2x gas utilization, 800 proofs leads to maybe 20x utilization
- Q: Does aggregating proofs lead to compression, or is it just linear in the number of proofs?
    - It does lead to significant size savings
- Q: Can we aggregate across miners too?
    - That will likely be the next step! We plan to put out per-miner aggregation first for the immediate benefit to chain bandwidth, but cross-miner aggregation will probably be the next step.
- Q: What happens if one of the proofs in the aggregation are bad? Will the ProveCommit fail for every sector?
    - It is impossible to aggregate a set of proofs if any single proof is bad. There might be some edge-cases (what happens if one of the sectors has, perhaps, already been committed?). Focus is on the theory right now, exact design is up to community discussion.

Filecoin Foundation:

- Redeveloping website to include a developer-specific portal
- Input is very welcome!
- Foundation is hiring!

Upgrade process:

- FIPs do a good job of keeping the big things organized
- Changelog of smaller actors / protocol changes would be very nice
- Slower release cadence, agree upon a launch epoch together
- Run upgrades for a week on test networks, with a suite of test cases
- AI: We should investigate what Ethereum and other projects do

Extending v1 sectors:

- [FIP Issue #56](https://github.com/filecoin-project/FIPs/issues)
- Security vulnerability was found in v1 proofs, so v1.1 proofs was introduced in network v7
- New insecure v1 sectors can not be created (uncontroversial), but disagreement over disallowing extension of existing v1 sectors
- We need more data about when the existing v1 sectors expire
- Some were created as 180 day sectors, others as 540
- Steven (Venus) proposes allowing a one-time extension of those v1 sectors whose lifetimes are less than 540 days
- Feedback from community is strongly needed
- Would it be possible to "upgrade" the insecure v1 sectors so that they retain the same collateral, but become secure?
- Eric (Forest) says from a technical perspective, allowing insecure sectors to die out is optimal
- We need to figure out the best way to get opinions from as many community, there's a polling tool under development that could work well
- The Filecoin Foundation can help provide transparency into the discussion
