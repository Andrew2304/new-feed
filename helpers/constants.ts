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
