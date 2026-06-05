export default function Category({ finalCategory }) {
  let cat = finalCategory.map((v, i) => {
    return (
      <li
        key={i}
        className="bg-cyan-400 p-[10px] cursor-pointer text-[20px] font-serif font-[500] mb-2"
      >
        {v.name}
      </li>
    );
  });
  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
}
