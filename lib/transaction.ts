export interface Transaction {
  // Transaction hash
  hash: string,
  // The value of the transaction
  value: number,
  // Hash of the block containing the transaction
  blockHash: string,
  // The block number containing the trnasaction
  blockNumber: number,
  // The number of confirmations of the transaction
  confirmations: number,
  // The price per unit of fee
  feePrice: number,
  // The total fee paid for the transaction
  fee: number,
  // The raw transaction object
  _raw: any
}
