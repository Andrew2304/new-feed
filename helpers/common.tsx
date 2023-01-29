export const getFileType = (filename: string) => {
  const type = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
  return type.toLocaleLowerCase();
};

export const headerRequest = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const headerRequestAuth = (token?: string) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer  ${token || localStorage.getItem('token')?.replaceAll('"', '')}`,
  };
};

export const headerFileRequestAuth = (token?: string) => {
  return {
    Accept: 'application/json',
    // 'Content-Type': 'multipart/form-data',
    Authorization: `Bearer  ${token || localStorage.getItem('token')?.replaceAll('"', '')}`,
  };
};

export function convertToSlug(str: string) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, '-');

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, '');

  // return
  return str;
}