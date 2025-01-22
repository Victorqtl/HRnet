declare module 'my-hrnet-data-table' {
    import { FC } from 'react';
  
    interface DataTableProps {
      data: any;
    }
  
    export const DataTable: FC<DataTableProps>;
  }