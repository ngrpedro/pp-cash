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

export interface GetQueryContacts {
  contacts: {
    id: string;
    name: string;
  }[];
}
