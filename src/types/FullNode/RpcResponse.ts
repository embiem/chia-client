import { Block } from './Block';
import { BlockHeader } from './BlockHeader';
import { CoinRecord } from './CoinRecord';
import { BlockchainState } from './BlockchainState';
import { BlockRecord } from './BlockRecord';
import { RpcResponse } from '../RpcResponse';
import { MempoolItem } from './MempoolItem';

export interface BlockchainStateResponse extends RpcResponse {
    blockchain_state: BlockchainState;
}

export interface UnfinishedBlockHeadersResponse extends RpcResponse {
    headers: BlockHeader[];
}

export interface HeaderResponse extends RpcResponse {
    header: BlockHeader;
}

export interface BlocksResponse<T extends Block> extends RpcResponse {
    blocks: T[];
}

export interface BlockResponse extends RpcResponse {
    block: Block;
}

export interface BlockRecordResponse extends RpcResponse {
    block_record: BlockRecord;
}

export interface BlockRecordsResponse extends RpcResponse {
    block_records: Array<BlockRecord>;
}

export interface CoinResponse extends RpcResponse {
    coin_records: Array<CoinRecord>;
}

export interface CoinRecordResponse extends RpcResponse {
    coin_record: CoinRecord;
}

export interface AdditionsAndRemovalsResponse extends RpcResponse {
    additions: Array<CoinRecord>;
    removals: Array<CoinRecord>;
}

export interface NetspaceResponse extends RpcResponse {
    space: number;
}

export interface TransactionIdsResponse extends RpcResponse {
    tx_ids: Array<string>;
}

export interface MempoolItemsResponse extends RpcResponse {
    mempool_items: Array<MempoolItem>;
}

export interface MempoolItemResponse extends RpcResponse {
    mempool_item: MempoolItem;
}
