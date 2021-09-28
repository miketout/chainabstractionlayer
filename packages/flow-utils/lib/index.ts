import { Transaction, Block, flow } from '@liquality/types'

async function normalizeTx(rawTx: flow.Tx) {
  const normalizedTx: Transaction<flow.Tx> = {
    hash: rawTx.txId,
    value: 0, // TODO: fetch value from events
    blockHash: rawTx.referenceBlockId,
    blockNumber: rawTx.blockNumber,
    confirmations: rawTx.blockConfirmations,
    // feePrice: 0,
    fee: 0, // TODO: fetch fee
    // secret: '',
    _raw: rawTx
  }

  return normalizedTx
}

function normalizeBlock(blockResponse: flow.BlockResponse, rawTxs: flow.Tx[]) {
  const normalizedBlock: Block<flow.Tx> = {
    number: blockResponse.height,
    hash: blockResponse.id,
    timestamp: Math.floor(new Date(blockResponse.timestamp).getTime() / 1000),
    size: 0,
    parentHash: blockResponse.parentId,
    transactions: rawTxs
  }

  return normalizedBlock
}

export { normalizeTx, normalizeBlock }
