import { ReactNode } from "react"

export interface EstimateFee {
  title: string
  fee: number
  estimationTime: string
  isActive: boolean
  id: number
}

export interface Collection {
  title: string
  isActive: boolean
  id: number
  image: ReactNode
}

export interface NftAddedRecently {
  id: string
  title: string
  description: string
  image: string
  priceEth: number
  priceCurrency: number
  slipPercent: number
}

export interface NftBidResponse {
  id: number
  user: {
    id: number
    name: string
    photoUrl: string
  }
  strategy: string
  price: number
  purchaseDate: string
}

export interface TypeWalletActivity {
  id: number
  activity: string
  price: number
  status: string
  address: string
  dateCreate: string
}

export interface TypeWalletTransaction {
  id: number
  operation: string
  amount: number
  status: string
  dateCreate: string
}

export interface TypeWalletAuthorFee {
  id: number
  nft: { id: number; name: string }
  seller: { id: number; user_name: string }
  buyer: { id: number; user_name: string }
  price: number
  firstAuthorshipFee: number
  firstAuthorshipAmount: number
  status: string
  dateCreate: string
}
