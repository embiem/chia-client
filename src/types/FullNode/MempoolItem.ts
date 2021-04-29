import { CoinRecord } from "./CoinRecord";

export interface MempoolItem {
  spend_bundle: null; //SpendBundle TODO test this on testnet
  fee: number;
  npc_result: null; //NPCResult TODO test this on testnet
  cost: number;
  spend_bundle_name: string;
  additions: Array<CoinRecord>;
  removals: Array<CoinRecord>;
  program: null;
}
