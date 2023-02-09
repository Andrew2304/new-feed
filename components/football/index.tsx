import { Table, Tabs, TabsProps } from 'antd';
import { useMatchColumns, useRankColumns } from './columns';

const matchColumns = useMatchColumns();
const rankColumns = useRankColumns();

const FootballComponent = ({ matches, ranks, tab }: any) => {
  // console.log('ranks1', ranks);
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Lịch đấu`,
      children: (
        <Table
          dataSource={matches}
          columns={matchColumns}
          showHeader={false}
          pagination={{ pageSize: 4 }}
        />
      ),
    },
    {
      key: '2',
      label: `Bảng xếp hạng`,
      children: (
        <Table
          dataSource={ranks}
          columns={rankColumns}
          showHeader={false}
          pagination={{ pageSize: 4 }}
        />
      ),
    },
  ];

  return <Tabs defaultActiveKey={tab} items={items} />;
};

export default FootballComponent;
