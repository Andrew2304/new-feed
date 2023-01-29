export const OtpTime = 30;

export const PasswordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()~])[A-Za-z\d`!@#$%^&*()~]{8,}$/;
export const EmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const BlockchainValidation = /^0x[a-fA-F0-9]{40}$/g;

export const PrivateRouter = ["/nft/create", "/wallet", "/collection/create"];

export const FileType = ["jpg", "png", "jpeg", "jjpeg"];

export const FileSize = 1024 * 1024 * 100;

export const GetFileType = (filename: string) => {
  const type =
    filename.substring(filename.lastIndexOf(".") + 1, filename.length) ||
    filename;
  return type.toLocaleLowerCase();
};

export const DateFormatNft = "dd/mm/yyyy hh:MM";

export const DateFormatCollection = "dd/mm/yyyy";

export const DefaultPageSize = 15;

export const StatusNft: any = {
  MintSuccess: "Mint thành công",
  MintFailed: "Mint Thất bại",
  Bidding: "Đang đấu giá",
  Selling: "Đang bán",
  Sold: "Đã bán",
  Tranfered: "Đã chuyển",
  Cancelled: "Cancelled",
};

export const StatusAccount: any = {
  verifed: "Đã xác minh",
  unverified: "Chưa xác minh",
};

export const FilterAmount: any = {
  increase: "Từ thấp đến cao",
  decrease: "Từ cao đến thấp",
};

export const TstTypeOfWallet: any = {
  MintNft: "Mint NFT",
  BuyNft: "Mua NFT",
  SellNft: "Bán NFT",
  MintCompensate: "Hoàn tiền",
  Deposit: "Nạp tiền",
  Withdrawal: "Rút tiền",
  BidNft: "Đặt giá",
  ReleaseBid: "Hoàn tiền đặt giá",
};

export const ActivityTypeOfWallet: any = {
  Transfer: "Chuyển",
  Cancel: "Rút",
  Sell: "Bán",
  Buy: "Mua",
};

export const WalletStatus: any = {
  Processing: "Đang xử lý",
  Success: "Thành công",
  Failed: "Huỷ",
};
