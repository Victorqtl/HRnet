declare module 'my-hrnet-data-table' {
  import { Employee } from './employee';
  
  type DataTableProps = {
    data: Employee[];
    deleteEmployee: (id: string) => Promise<void>;
  }

  const DataTable: React.FC<DataTableProps>;
}