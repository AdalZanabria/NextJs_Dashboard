import { Chart } from '@common/Chart';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

//const PRODUCT_OFFSET = 5;
const PRODUCT_LIMIT = 5;

export default function Dashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const products = useFetch(endPoints.products.getAll(PRODUCT_LIMIT, offsetProducts), offsetProducts);
  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
