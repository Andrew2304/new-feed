import { Table, Tabs, TabsProps } from 'antd';
import { useRankColumns } from './columns';

const rankColumns = useRankColumns();

const RankComponent = ({ ranks, tab }: any) => {
  const items: TabsProps['items'] = [];

  Object.keys(ranks).map((key) => {
    items.push({
      key: key,
      label: ranks[key].title,
      children: (
        <Table
          dataSource={ranks[key].data}
          columns={rankColumns}
          showHeader={false}
          pagination={{ pageSize: 6 }}
        />
      ),
    });
  });

  return <Tabs defaultActiveKey={tab} items={items} />;
};

export default RankComponent;
