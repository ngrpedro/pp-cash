export interface GetQueryTransactions {
  transactions: {
    id: string;
    obs: string;
    name: {
      name: string;
    };
    amount: number;
    cashin: boolean;
    createdAt: string;
  }[];
}
