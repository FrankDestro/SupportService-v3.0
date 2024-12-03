import './styles.css';

function CardPriority() {
  return (
    <div className="container-card-priority">
      <div className="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100 base-card-charts">
        <a href="#" className="block w-full h-full">
          <div className="w-full">
            <p className="mb-4 text-2xl font-light text-gray-700 dark:text-black">
              Summary 
              <p>10:39:50</p>
            </p>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <p>Baixa</p>
              <p>12</p>
            </div>
            <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
              <div className="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <p>Média</p>
              <p>5</p>
            </div>
            <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
              <div className="w-2/3 h-full text-xs text-center text-white bg-orange-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <p>Alta</p>
              <p>7</p>
            </div>
            <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
              <div className="w-1/4 h-full text-xs text-center text-white bg-red-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <p>Solicitação</p>
              <p>9</p>
            </div>
            <div className="w-full h-2 bg-pink-100 rounded-full">
              <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CardPriority;
