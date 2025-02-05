declare module 'my-hrnet-data-table' {
  import { Employee } from './employee';
  
  type DataTableProps = {
    data: Employee[];
    editEmployee: (id: string, updateEmployee: Employee) => Promise<void>;
    deleteEmployee: (id: string) => Promise<void>;
  }

  const DataTable: React.FC<DataTableProps>
}