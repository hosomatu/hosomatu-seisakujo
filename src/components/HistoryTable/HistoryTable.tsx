type HistoryItem = {
    date: string;
    description: string;
    url?: string;
  };
  
  type Props = {
    items: HistoryItem[];
  };
  
  export default function HistoryTable({ items }: Props) {
    return (
      <section id="history" className="mt-6 py-8 px-4">
        <h2 className="text-xl font-bold mb-4 text-center">My History</h2>
  
        <div className="max-w-xl mx-auto">
          <table className="w-full border-collapse">
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="py-3 pr-6 font-mono text-sm text-gray-600 whitespace-nowrap w-1/4">
                    {item.date}
                  </td>
                  <td className="py-3 text-sm text-gray-800">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                        {item.description}
                      </a>
                    ) : (
                      item.description
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  