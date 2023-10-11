# Core Dev Meeting #62 

**Meeting Date & Time:** Thursday 5, October 2023 16:00 UTC

**Meeting Recording:** 

**Meeting Slides:** https://docs.google.com/presentation/d/19r_vnG2F7-8AE6qxfjbyYEnpTA6EsM3MV7xHVb9dh7I/edit#slide=id.g19157ff4f70_0_0



---


## [SuperSnaps: Adding Snarkpack for SnapDeals](https://github.com/filecoin-project/FIPs/discussions/752)
#### Nemo & Jake (Protocol Labs)




## Premise
The discussion focused on the technology and optimization techniques behind Snap Deals and Super Snaps, mechanisms used for efficient data storage and verification on a blockchain network.

## Content

### Snap Deals
- **Core Function**: Enables adding actual user data into an empty sector, known as a CC sector, which is initially committed to the network without user data.
- **Workflow**: 
  1. Start with an empty CC sector.
  2. Seal it to produce a replica.
  3. Overwrite or mix some empty data in the CC sector with actual data, known as a sector update.
  4. A new replica is generated post-update.
- **Verification**: Utilizes Groth16 proofs (also referred to as Snarks) to ensure that data updates in the sector were executed correctly.

### Super Snaps
- **Optimization**: An extension of Snap Deals designed for efficient proof aggregation.
- **Efficiency Boost**: Rather than publishing each Snark proof individually, aggregates them into a single compact proof, making the verification process more efficient.
- **Flexibility**: Allows for the aggregation of Snarks across multiple CC sector updates.
- **Gas and Time Efficiency**: 
  1. Verification time and gas cost scale logarithmically with aggregated proofs.
  2. Crossover point is at 3 proofs, beyond which aggregation becomes more gas-efficient than individual publication.

### Multi-Sector Optimization 
- Storage providers with multiple CC sectors can perform data updates across these sectors in a batch operation.
- Enables the aggregation of all proofs into a single proof that lands on-chain, further enhancing efficiency.
- Goal is to save on chain bandwidth.

## Next Steps
1. Further technical evaluation of Super Snaps for potential bottlenecks and vulnerabilities.
2. Benchmark the actual gas and time savings in a live environment.
3. Explore the feasibility of integrating Super Snaps with existing storage solutions in the blockchain ecosystem.
4. PR opened for this proposal 

---

## **[FVM BLS Aggregate Signatures](https://github.com/filecoin-project/FIPs/discussions/752)** 
#### Facilitated by Nemo & Jake (Protocol Labs) 



## BLS Aggregate Signatures to FVM 

### Context
This FIP proposes the following changes to FVM:

1. Addition of a syscall for BLS aggregate signature verification (by definition, this also supports non-aggregate BLS signatures).
1. Removal of the syscall currently used for generic signature (i.e. Secp256k1 and non-aggregate BLS) validation, and refactoring its associated SDK function in terms of existing Secp256k1 signature syscalls and the added aggregate BLS syscall.

### Existing Signature Schemes
- **ECDSA**: Elliptic Curve Digital Signature Algorithm.
- **BLS**: BLS 12-381, another signature algorithm.
- Both are non-aggregate signatures, requiring single signers and messages.

### Aggregate Signatures
- Enables multiple signers to each sign their own message.
- Aggregate those individual signatures into one constant-size signature.
- The aggregate signature retains the same size as individual signatures.
  
### Gas Efficiency
- Verification of an aggregate signature is more gas-efficient.
- Estimated to consume half to two-thirds of the gas needed for individual signature verification.

### API Changes
- Additive change to the API, no breaking changes.
- Doesn't affect current user-facing APIs, adds a new API for aggregate signatures.

### Trade-offs and Use-cases
- No trade-offs, as it doesn't affect the gas costs for non-aggregate signatures.
- Allows for cheaper multi-signature verification.




# 
## [Network v21 (Watermelon Upgrade) Discussions & updated upgrade timelines](https://github.com/filecoin-project/core-devs/discussions/140)
**Facilitated by Jennifer Wang Lotus, Protocol Labs)**



#### Proposed FIPs for Inclusion in nv21
The following Filecoin Improvement Proposals (FIPs) are being considered for inclusion in the nv21 Watermelon network upgrade:
- [FIP0052: Increase Max Sector Commitment to 3.5 years](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0052.md)

- [FIP0059: Synthetic PoRep](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0059.md)

- [FIP0070: Allow SPs to move partitions between deadlines](https://github.com/filecoin-project/FIPs/pull/740/commits/bd6c62d46009f586a661d3e1c797f84bb8cfb59a) 
- [FIP0071: Deterministic State Access (IPLD Reachability)](https://github.com/filecoin-project/FIPs/discussions/735)
- [FIP0072: Improved Event Syscall API](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0072.md)
- [FIP0073: Remove beneficiary from the self_destruct syscall](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0073.md) 
- [FIP0075: Improvements to the FVM Randomness syscalls](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0075.md)



## Updated Timelines
The following key dates are updated timeline for the nv21 Watermelon Upgrade:
- **Last Call for All FIPs:** Sept 13
- **Code Freeze:** Oct 10
- **Calibnet Upgrade:** Oct 19
- **Mainnet Upgrade:** Nov 28



## Governance Updates 
- Community Governance Call is is October 30- register [here](https://fil-org.zoom.us/meeting/register/tZMkf-2qpjIqEt3nkeKh_7f7_F6wPm76zbTw)
- Join the Fil-Gov channel [here](https://filecoinproject.slack.com/archives/C0535S9TUUF)
- A discussion thread announcing the FIP0001v2 Initiative , a project championed by the Filecoin Foundation on proposed FIP process changes. Read more [here](https://github.com/filecoin-project/FIPs/discussions/833).



 










---
