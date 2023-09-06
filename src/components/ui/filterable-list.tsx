import React from 'react';
import { Input } from './input';
import { Table, TableBody, TableCaption, TableCell, TableRow } from './table';

export type ListItem = {
  id: number;
  name: string;
};

export type FilterableListProps = {
  items: ListItem[];
  filter?: string;
};

export const FilterableList: React.FC<FilterableListProps> = ({
  items = [],
  filter = undefined,
}) => {
  const [filterKeyword, setFilterKeyword] = React.useState('');

  React.useEffect(() => {
    if (filter) {
      setFilterKeyword(filter);
    }
  }, [filter]);

  const handleFilterKeywordChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.target.value;
    setFilterKeyword(keyword);
  };

  return (
    <div className="bg-slate-50 rounded-lg p-4">
      <Table>
        <TableCaption className="text-lg pb-4">
          Filterable Items List
        </TableCaption>
        <Input
          placeholder="Filter by name"
          className="bg-white"
          value={filterKeyword}
          onChange={handleFilterKeywordChanged}
          data-testid="filter"
        />
        <TableBody>
          {items.map(
            (item) =>
              item.name.toLowerCase().includes(filterKeyword.toLowerCase()) && (
                <TableRow key={item.id}>
                  <TableCell className="font-medium" data-testid="item">
                    {item.name}
                  </TableCell>
                </TableRow>
              )
          )}
          {items.filter((item) =>
            item.name.toLowerCase().includes(filterKeyword.toLowerCase())
          ).length === 0 && (
            <TableRow>
              <TableCell className="italic text-slate-500">No items</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
