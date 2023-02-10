import Image from 'next/image';

export const useRankColumns = () => {
  return [
    {
      title: 'logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (text: any, record: any) => <Image src={record.logo} width={40} height={40} />,
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'change',
      dataIndex: 'change',
      key: 'change',
    },
  ];
};
