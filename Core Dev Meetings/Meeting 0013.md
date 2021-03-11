# Filecoin Core Devs Meeting #13 - 2021-03-11

- Meeting Date/Time: **Thursday 11 March 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/Ot9uObGa7rs
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Fuhon

- Focus on reliability testing
- Improving performance of snapshot restorations (40 times faster)
- Completed work on actor polymorphism to support future actor upgrades
- Implementation of actors v3 to start in 2-3 weeks

Venus

- Delivered version 0.9.1, which integrates actors v3
- Went over the network version 10 upgrade successfully
- Security audit has begun, initial report to come by April 22
- Continuing work on distributed mining pool in the Venus wallet and Venus miner modules

Forest

- Actors v3 worked okay, but the lack of conformance tests was an issue
- Prepping for audit in a month or so
- State migration framework has scope for improvement

Interopnet

- Smaller network that we exert more control over and allow 512 MiB sectors
- Generally desired, will set this up

Next network upgrade

- Would be good to have an upgrade that introduces FIP-0014 by early June
- This would need v4 actors
- Steven suggests maintaining a regular upgrade schedule (perhaps one per quarter)
- Smaller one-off upgrades to accommodate network developments & security concerns can be independently handled

FIP-0014

- Community is generally in favour of it, though disagreement exists
- If we're adopting it, we should have the network upgrade in early April
- Implementation is easy
- We need to agree on final answers to:
    - whether adopting this FIP is acceptable from a security perspective
    - whether the community's overall preference is in fact for this FIP
- Answers to both questions are tending towards "yes"
