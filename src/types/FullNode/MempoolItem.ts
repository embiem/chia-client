import { CoinRecord } from "./CoinRecord";

export interface MempoolItem {
  spend_bundle: null;
  fee: number;
  npc_result: null; //NPCResult
  cost: number;
  spend_bundle_name: string;
  additions: Array<CoinRecord>;
  removals: Array<CoinRecord>;
  program: null;
}
