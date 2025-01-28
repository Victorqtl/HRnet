import { Employee } from './employee';

declare module 'my-hrnet-data-table' {
  
    interface DataTableProps {
      data: Employee[];
    }
  
    export const DataTable: FC<DataTableProps>;
  }