import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        // value={searchQuery}
        // onChange={e => setSearchQuery(e.target.value)}
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <MySelect
        // value={selectedSort}
        value={filter.sort}
        handleSortValueChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sort by:"
        options={[
          { value: 'title', name: 'Title' },
          { value: 'body', name: 'Description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
