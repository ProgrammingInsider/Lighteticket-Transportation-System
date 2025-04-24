interface ListItem {
    value: string;
    onClick?: () => void;
  }
  
  const Dropdown = ({ lists }: { lists: ListItem[] }) => {
    return (
      <nav className="card-bg box-shadow absolute top-11 left-2 w-full border-radius z-10">
        <ul className="flex flex-col gap-1">
          {lists.map((list, index) => (
            <li
              key={index}
              className="py-2 px-6 cursor-pointer flex gap-2 items-center paragraph-color border-b border-b-gray-400 hover:font-medium"
              onClick={list.onClick}
            >
              {list.value}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  

  export default Dropdown