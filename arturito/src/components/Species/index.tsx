import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Average_lifespan',
    dataIndex: 'average_lifespan',
    key: 'average_lifespan',
    render: (average_lifespan: string) =>
      parseInt(average_lifespan)
        ? parseInt(average_lifespan).toLocaleString('es-AR')
        : average_lifespan,
  },
  {
    title: 'People',
    dataIndex: 'people',
    key: 'people',
    render: (people: string[]) => people.length,
  },
];

const Species = () => {
  const { data, error } = useSWR('/species', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
};

export default Species;