export default function Productitems({ product }) {
  return (
    <div className="shadow-lg text-center p-4 bg-white rounded-lg flex flex-col h-full justify-between">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[200px] object-cover rounded-md mb-3"
        />
        <h4 className="text-lg font-semibold mb-1">{product.title}</h4>
      </div>
      <b className="text-cyan-600 mt-2 block">Tk: ${product.price}</b>
    </div>
  );
}
