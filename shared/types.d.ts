
export type AuctionItem = {
    id: string;
    name: string;
    marketValue: number;
    minimumPrice: number;
  };
  
  export type DBAuctionItem = AuctionItem & {
    category: string | undefined;
    auctionType: string | undefined;
  }
  
  export type  Bid = {
    bidId: string;
    custemorName: string;
    detail: {
      itenId: string;
      bidValue: number;
    }
  };

  export type DBBid = Bid & {
    timeStamp: string;
  }