// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { FilterableList } from '@/components/ui/filterable-list';

export function App() {
  return (
    <div>
      <FilterableList
        items={[
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
          { id: 3, name: 'Cherry' },
          { id: 4, name: 'Date' },
          { id: 5, name: 'Fig' },
        ]}
      />
    </div>
  );
}

export default App;
