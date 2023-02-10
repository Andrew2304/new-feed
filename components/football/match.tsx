import { Table, Tabs, TabsProps } from 'antd';
import { useMatchColumns } from './columns';

const matchColumns = useMatchColumns();

const MatchComponent = ({ matches, tab }: any) => {
  const items: TabsProps['items'] = [];

  Object.keys(matches).map((key) => {
    items.push({
      key: key,
      label: matches[key].title,
      children: (
        <Table
          dataSource={matches[key].data}
          columns={matchColumns}
          showHeader={false}
          pagination={{ pageSize: 10 }}
        />
      ),
    });
  });

  return <Tabs defaultActiveKey={tab} items={items} />;
};

export default MatchComponent;
