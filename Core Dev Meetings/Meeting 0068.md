# Core Dev Meeting #68 

**Meeting Date & Time:** Thursday 4, April 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1RHjTFLUgVlgOfdxsSEhsa-KJyVVIhAzSfPUQyzMONZ8/edit#slide=id.g2c7d196a442_0_0


---

## [Supporting Ethereum Legacy Transactions](https://github.com/filecoin-project/FIPs/discussions/962)
#### Stebalien (FilOz)

## Overview
The discussion focused on the integration of Ethereum legacy transactions within the Filecoin network to enhance compatibility and support. The context included the challenges and technical considerations related to the transition from the current support of EIP-1559 transactions to a system that accommodates both EIP-1559 and legacy Ethereum transactions. 

## Ethereum Legacy Transactions
The discussion centered on the need for Filecoin's Lotus implementation to support Ethereum's legacy transactions, which are essential for deploying smart contracts across different chains. The current limitation to only EIP-1559 transactions restricts users, especially in the decentralized finance sector, who require the flexibility to deploy contracts on various chains using a single address.

### Technical Background
The current validation mechanism in Filecoin translates Ethereum transactions into Filecoin messages, specifically catering to EIP-1559 transaction types. This process limits the network's ability to handle legacy Ethereum transactions, which have a different validation mechanism and are crucial for broader smart contract applications.

### Proposed Solutions
Four potential solutions were discussed to enable support for Ethereum legacy transactions:

1. **Dual Decoding Approach**: A method to decode both EIP-1559 and legacy transactions, though not favored due to its complexity and potential error-proneness.
2. **New Signature Types**: Introducing new signature types to distinguish between EIP-1559 and legacy transactions, simplifying the validation process but requiring changes to the protocol.
3. **Appending Identifier Bytes**: Modifying the signature field to include bytes that indicate the transaction type, allowing the system to differentiate between EIP-1559 and legacy transactions without significant protocol changes.
4. **Prepend Byte for Legacy Transactions**: An approach to add a byte only for legacy transactions, maintaining the current structure for EIP-1559 transactions and ensuring backward compatibility.

The team will continue to explore these solutions, considering their impact on the network and user adoption, with a focus on minimizing disruption while enabling essential functionalities for Ethereum transaction compatibility.





---
# nv22 Dragon Upgrade Updates
#### Orjan Roren (FilOz)


## Overview
An update on the nv22 upgrade, codenamed "Dragon," was provided, highlighting the progress and collaborative efforts that have characterized the upgrade process thus far. The upcoming mainnet upgrade and recent developments were discussed.

## Recent Activities
- A QA session titled "Dragon" was conducted about one and a half weeks ago using the Falcon Slack and Slido platforms. This session elicited many insightful questions from the implementers' team, which will be compiled and detailed in a forthcoming blog post.
- The calibration network received a patch upgrade recently to introduce two additional building actor events. This upgrade, prompted by community feedback, aims to facilitate smoother transitions and enhance observability within the network.

## Upcoming Mainnet Upgrade
- The mainnet upgrade is scheduled for April 11. All teams involved have finalized their preparations with stable releases ready, and are now awaiting the upgrade date.

## Community Feedback and Engagement
- Recent community feedback necessitated a rapid response from implementers to incorporate additional features into the network. This scenario underscores the dynamic nature of network upgrades and the importance of active community engagement.
- A retrospective session is proposed to evaluate the upgrade process, particularly focusing on improving the governance and feedback mechanisms. This reflection will inform future upgrade strategies and aims to optimize the early stages of community feedback integration.







