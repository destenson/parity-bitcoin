initSidebarItems({"enum":[["Error","All possible verification errors"],["TransactionError","Possible transactions verification errors"],["VerificationLevel","Blocks verification level."]],"fn":[["block_reward_satoshi",""],["is_valid_proof_of_work","Returns true if hash is lower or equal than target and target is lower or equal than current network maximum"],["is_valid_proof_of_work_hash","Returns true if hash is lower or equal than target represented by compact bits"],["median_timestamp","Returns median timestamp, of given header ancestors. The header should be later expected to have higher timestamp than this median timestamp"],["transaction_sigops","Counts signature operations in given transaction bip16_active flag indicates if we should also count signature operations in previous transactions. If one of the previous transaction outputs is missing, we simply ignore that fact and just carry on counting"],["work_required","Returns work required for given header"]],"mod":[["bigint","Efficient large, fixed-size big integers and hashes."],["compact","Compact representation of `U256`"],["constants","Consenus constants"],["hash","Fixed-size hashes"]],"struct":[["BackwardsCompatibleChainVerifier",""],["BlockAcceptor","Flexible verification of ordered block"],["BlockVerifier",""],["CanonBlock","Blocks whose parents are known to be in the chain"],["CanonHeader",""],["CanonTransaction",""],["ChainAcceptor",""],["ChainVerifier",""],["HeaderAcceptor",""],["HeaderVerifier",""],["MemoryPoolTransactionAcceptor",""],["MemoryPoolTransactionVerifier",""],["TransactionAcceptor",""],["TransactionVerifier",""]],"trait":[["Verify","Interface for block verification"]]});